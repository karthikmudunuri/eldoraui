import fs from "fs";
import path from "path";
import { rimraf } from "rimraf";
import type { DocsConfig } from "@/types/docs";

// import { getDocs } from "@/server/docs";

// const getCategoryDocs = (category: string) => {
//   return getDocs(category).map((category) => ({
//     title: category.title,
//     href: category.href,
//     label: category.label,
//     disabled: category.disabled,
//   }));
// };

const docsConfig: DocsConfig = {
  nav: [
    {
      title: "Getting Started",
      slug: "docs",
      items: [
        {
          title: "Installation",
          href: "/docs/installation",
        },
      ],
    },
    {
      title: "Components",
      slug: "components",
      items: [
        {
          title: "Overview",
          href: "/components",
        },
        {
          title: "Buttons",
          items: [
            { title: "Button", href: "/components/buttons/button" },
            {
              title: "Toggle Button",
              href: "/components/buttons/toggle-button",
            },
            {
              title: "File Trigger",
              href: "/components/buttons/file-trigger",
            },
          ],
        },
        {
          title: "Inputs",
          items: [
            { title: "TextField", href: "/components/inputs/text-field" },
            { title: "TextArea", href: "/components/inputs/text-area" },
            {
              title: "SearchField",
              href: "/components/inputs/search-field",
            },
            {
              title: "NumberField",
              href: "/components/inputs/number-field",
            },
            { title: "Checkbox", href: "/components/inputs/checkbox" },
            {
              title: "Checkbox Group",
              href: "/components/inputs/checkbox-group",
            },
            {
              title: "Radio Group",
              href: "/components/inputs/radio-group",
            },
            { title: "Switch", href: "/components/inputs/switch" },
            { title: "Slider", href: "/components/inputs/slider" },
          ],
        },
        {
          title: "Menus and Selection",
          items: [
            { title: "Menu", href: "/components/menus-and-selection/menu" },
            { title: "ListBox", href: "/components/menus-and-selection/list-box" },
            { title: "Select", href: "/components/menus-and-selection/select" },
            { title: "Combobox", href: "/components/menus-and-selection/combobox" },
          ],
        },
        {
          title: "Dates",
          items: [
            { title: "Calendar", href: "/components/dates/calendar" },
            {
              title: "Range Calendar",
              href: "/components/dates/range-calendar",
            },
            { title: "Time Field", href: "/components/dates/time-field" },
            { title: "Date Field", href: "/components/dates/date-field" },
            {
              title: "Date Picker",
              href: "/components/dates/date-picker",
            },
            {
              title: "Date Range Picker",
              href: "/components/dates/date-range-picker",
            },
          ],
        },
        {
          title: "Colors",
          items: [
            { title: "Color Area", href: "/components/colors/color-area" },
            {
              title: "Color Field",
              href: "/components/colors/color-field",
            },
            {
              title: "Color Slider",
              href: "/components/colors/color-slider",
            },
            {
              title: "Color Swatch",
              href: "/components/colors/color-swatch",
            },
            {
              title: "Color Picker",
              href: "/components/colors/color-picker",
            },
          ],
        },
        {
          title: "Drag and drop",
          items: [
            {
              title: "DropZone",
              href: "/components/drag-and-drop/drop-zone",
            },
          ],
        },
        {
          title: "Feedback",
          items: [
            { title: "Alert", href: "/components/feedback/alert" },
            { title: "Progress", href: "/components/feedback/progress" },
            { title: "Skeleton", href: "/components/feedback/skeleton" },
          ],
        },
        {
          title: "Layout",
          items: [
            { title: "Aspect Ratio", href: "/components/layout/aspect-ratio" },
            { title: "Scroll Area", href: "/components/layout/scroll-area" },
          ],
        },
        {
          title: "Data display",
          items: [
            { title: "Avatar", href: "/components/data-display/avatar" },
            { title: "Badge", href: "/components/data-display/badge" },
            { title: "Separator", href: "/components/data-display/separator" },
          ],
        },
        {
          title: "Navigation",
          items: [
            { title: "Link", href: "/components/navigation/link" },
            { title: "Tabs", href: "/components/navigation/tabs" },
            { title: "Breadcrumbs", href: "/components/navigation/breadcrumbs" },
          ],
        },
        {
          title: "Overlay",
          items: [
            { title: "Dialog", href: "/components/overlay/dialog" },
            { title: "Alert Dialog", href: "/components/overlay/dialog#alert-dialog" },
            { title: "Drawer", href: "/components/overlay/dialog#drawer" },
            { title: "Popover", href: "/components/overlay/dialog#popover" },
            { title: "Tooltip", href: "/components/overlay/tooltip" },
          ],
        },
      ],
    },
  ],
};

const index = `
// This file is autogenerated by scripts/build-preview-imports.ts
// Do not edit this file directly.
import type { DocsConfig } from "@/types/docs";

export const docsConfig: DocsConfig = ${JSON.stringify(docsConfig)};
`;

rimraf.sync(path.join(process.cwd(), "src", "config", "docs-config.ts"));
fs.writeFileSync(path.join(process.cwd(), "src", "config", "docs-config.ts"), index);

console.log("\x1b[32m✓\x1b[0m Created docs-config file.");
