#!/bin/bash

# Get the current commit information
CURRENT_COMMIT=$(git log -1 --pretty=format:"%h|%s|%an|%ad" --date=short)

# Check if current commit is already in changelog
if grep -q "${CURRENT_COMMIT%%|*}" apps/www/content/docs/changelog.mdx; then
  echo "ℹ️  Current commit already in changelog"
  exit 0
fi

# Parse current commit
IFS='|' read -r hash message author date <<< "$CURRENT_COMMIT"

# Format the commit entry
ENTRY="- $message ([$hash](https://github.com/eldoraui/ui/commit/$hash))"

# Categorize based on commit message prefixes and content
CATEGORY=""
case "$message" in
  feat:*|add:*|new:*)
    CATEGORY="#### Added"
    ;;
  fix:*|bug:*|resolve:*)
    CATEGORY="#### Fixed"
    ;;
  docs:*|documentation:*)
    CATEGORY="#### Documentation"
    ;;
  chore:*|maintenance:*|deps:*|dependencies:*)
    CATEGORY="#### Maintenance"
    ;;
  refactor:*|update:*|improve:*|enhance:*)
    CATEGORY="#### Changed"
    ;;
  remove:*|delete:*|drop:*)
    CATEGORY="#### Removed"
    ;;
  *)
    # Default categorization based on keywords
    if echo "$message" | grep -qiE "(add|new|create|implement)"; then
      CATEGORY="#### Added"
    elif echo "$message" | grep -qiE "(fix|bug|resolve|correct)"; then
      CATEGORY="#### Fixed"
    elif echo "$message" | grep -qiE "(update|change|modify|improve|enhance)"; then
      CATEGORY="#### Changed"
    elif echo "$message" | grep -qiE "(remove|delete|drop|deprecate)"; then
      CATEGORY="#### Removed"
    else
      CATEGORY="#### Changed"
    fi
    ;;
esac

# Get today's month and year for grouping
TODAY_MONTH=$(date +"%B %Y")
TODAY_FULL=$(date +"%B %d, %Y")

# Check if this month's section already exists
if grep -q "### $TODAY_FULL" apps/www/content/docs/changelog.mdx; then
  # Today's section exists, add to it
  # Create a simple insert after the category
  sed -i.bak "/$CATEGORY/a\\
$ENTRY" apps/www/content/docs/changelog.mdx
  rm -f apps/www/content/docs/changelog.mdx.bak
else
  # Create a new monthly section
  NEW_ENTRY="### $TODAY_FULL

$CATEGORY
$ENTRY

"
  
  # Insert after frontmatter
  awk -v entry="$NEW_ENTRY" '
    /^---$/ { 
      if (++count == 2) { 
        print entry
      }
    }
    { print }
  ' apps/www/content/docs/changelog.mdx > /tmp/changelog_updated.mdx
  
  # Replace the original file
  mv /tmp/changelog_updated.mdx apps/www/content/docs/changelog.mdx
fi

# Add the updated changelog to git
git add apps/www/content/docs/changelog.mdx

echo "✅ Changelog updated automatically!"
echo "📝 Added commit: $message"