#!/bin/bash

# Get the last changelog entry date or use a default date
LAST_CHANGELOG_DATE=$(grep -E "^### [A-Za-z]+ [0-9]+, [0-9]+" apps/www/content/docs/changelog.mdx | head -1 | sed 's/### //' || echo "January 1, 2024")

# Get commits since last changelog entry
COMMITS=$(git log --since="$LAST_CHANGELOG_DATE" --pretty=format:"%h|%s|%an|%ad" --date=short | head -20)

# If no commits found, get last 10 commits
if [ -z "$COMMITS" ]; then
  COMMITS=$(git log -10 --pretty=format:"%h|%s|%an|%ad" --date=short)
fi

# Categorize commits based on conventional commit types and EldoraUI patterns
ADDED=""
CHANGED=""
FIXED=""
REMOVED=""
DOCS=""
CHORE=""

while IFS='|' read -r hash message author date; do
  # Skip if message is empty
  [ -z "$message" ] && continue
  
  # Format the commit entry
  ENTRY="- $message ([$hash](https://github.com/eldoraui/ui/commit/$hash))"
  
  # Categorize based on commit message prefixes and content
  case "$message" in
    feat:*|add:*|new:*)
      ADDED="$ADDED$ENTRY
"
      ;;
    fix:*|bug:*|resolve:*)
      FIXED="$FIXED$ENTRY
"
      ;;
    docs:*|documentation:*)
      DOCS="$DOCS$ENTRY
"
      ;;
    chore:*|maintenance:*|deps:*|dependencies:*)
      CHORE="$CHORE$ENTRY
"
      ;;
    refactor:*|update:*|improve:*|enhance:*)
      CHANGED="$CHANGED$ENTRY
"
      ;;
    remove:*|delete:*|drop:*)
      REMOVED="$REMOVED$ENTRY
"
      ;;
    *)
      # Default categorization based on keywords
      if echo "$message" | grep -qiE "(add|new|create|implement)"; then
        ADDED="$ADDED$ENTRY
"
      elif echo "$message" | grep -qiE "(fix|bug|resolve|correct)"; then
        FIXED="$FIXED$ENTRY
"
      elif echo "$message" | grep -qiE "(update|change|modify|improve|enhance)"; then
        CHANGED="$CHANGED$ENTRY
"
      elif echo "$message" | grep -qiE "(remove|delete|drop|deprecate)"; then
        REMOVED="$REMOVED$ENTRY
"
      else
        CHANGED="$CHANGED$ENTRY
"
      fi
      ;;
  esac
done <<< "$COMMITS"

# Get today's date
TODAY=$(date +"%B %d, %Y")

# Build the changelog entry
OUTPUT="### $TODAY

"

# Add sections in order of importance
if [ -n "$ADDED" ]; then
  OUTPUT+="#### Added
$ADDED
"
fi

if [ -n "$FIXED" ]; then
  OUTPUT+="#### Fixed
$FIXED
"
fi

if [ -n "$CHANGED" ]; then
  OUTPUT+="#### Changed
$CHANGED
"
fi

if [ -n "$REMOVED" ]; then
  OUTPUT+="#### Removed
$REMOVED
"
fi

if [ -n "$DOCS" ]; then
  OUTPUT+="#### Documentation
$DOCS
"
fi

if [ -n "$CHORE" ]; then
  OUTPUT+="#### Maintenance
$CHORE
"
fi

# Add the changelog entry to the file
if [ -n "$OUTPUT" ] && [ "$OUTPUT" != "### $TODAY

" ]; then
  # Create a temporary file with the new entry
  echo "$OUTPUT" > /tmp/changelog_entry.mdx
  
  # Insert the new entry after the frontmatter
  awk '
    /^---$/ { 
      if (++count == 2) { 
        while ((getline line < "/tmp/changelog_entry.mdx") > 0) 
          print line
        close("/tmp/changelog_entry.mdx")
      }
    }
    { print }
  ' apps/www/content/docs/changelog.mdx > /tmp/changelog_updated.mdx
  
  # Replace the original file
  mv /tmp/changelog_updated.mdx apps/www/content/docs/changelog.mdx
  rm -f /tmp/changelog_entry.mdx
  
  # Add the updated changelog to git
  git add apps/www/content/docs/changelog.mdx
  
  echo "✅ Changelog updated automatically!"
  echo "📝 Added $(echo "$COMMITS" | wc -l | tr -d ' ') commits to changelog"
else
  echo "ℹ️  No new commits to add to changelog"
fi
