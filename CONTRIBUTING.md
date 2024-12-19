# Contributing to EldoraUI

Thank you for your interest in contributing to EldoraUI! We appreciate your support and look forward to your contributions. This guide will help you understand the directory structure and provide detailed instructions on how to add a new component to EldoraUI.

Read the [example PR](https://github.com/karthikmudunuri/eldoraui/pull/12) to learn which files you need to add. **You only need to change 5 files to add a new component or effect** and it only takes around 10 minutes of work!

Once done, open a pull request from your forked repo to the main repo [here](https://github.com/karthikmudunuri/eldoraui/compare).

## Getting Started

### Fork and Clone the Repository

1. **Fork this repository**  
   Click [here](https://github.com/karthikmudunuri/eldoraui/fork) to fork the repository.

2. **Clone your forked repository to your local machine**

   ```bash
   git clone https://github.com/<YOUR_USERNAME>/magicui.git
   ```

3. **Navigate to the project directory**

   ```bash
   cd eldoraui
   ```

4. **Create a new branch for your changes**

   ```bash
   git checkout -b my-new-branch
   ```

5. **Install dependencies**

   ```bash
   pnpm i
   ```

6. **Create a `.env.local` file**

   ```bash
   touch .env.local && echo "NEXT_PUBLIC_APP_URL=http://localhost:3000" > .env.local
   ```

7. **Run the project**
   ```bash
   pnpm dev
   ```

## Adding a New Component

To add a new component to EldoraUI, you will need to modify several files. Follow these steps:

### 1. Create Component

Create the main component in `registry/default/eldoraui/example-component.tsx`

```typescript
import React from 'react'

export default function ExampleComponent() {
  return (
    <div>
      This is your component.
    </div>
  )
}
```

### 2. Create Component Demo

Provide a basic example to showcase your component in `registry/default/demos/example-component-demo.tsx`

```typescript
import ExampleComponent from '@/registry/default/eldoraui/example-component'

export default function ExampleComponentDemo() {
  return (
    <div className="relative justify-center">
      <ExampleComponent />
    </div>
  )
}
```

### 3. Update Sidebar

Add your component to the sidebar in `config/docs.ts`

```typescript
{
    title: "Example Component",
    href: `/docs/components/example-component`,
    items: [],
    label: "New",
}
```

### 4. Create docs

Create an MDX file for documenting your component in `content/docs/components/example-component.mdx`

```md
---
title: Example Component
date: 2024-06-01
description: Example component for Eldora UI
author: karthikmudunuri
published: true
---

<ComponentPreview name="example-component-demo" />

## Installation

<Steps>

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="example-component" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

<ComponentSource name="example-component" />

</Steps>

## Props

| Prop  | Type   | Description                | Default |
| ----- | ------ | -------------------------- | ------- |
| color | String | The color of the component | "blue"  |
```

### 5. Update Registry

Export your component and example in the registry files:

In `registry/registry-ui.ts`:

```typescript
export const ui: Registry = [
  // ... existing components ...
  {
    name: "example-component",
    type: "registry:ui",
    files: ["eldoraui/example-component.tsx"],
    // Add any dependencies or tailwind configurations if needed
  },
];
```

In `registry/registry-examples.ts`:

```typescript
export const examples: Registry = [
  // ... existing examples ...
  {
    name: "example-component-demo",
    type: "registry:example",
    registryDependencies: ["example-component"],
    files: ["demos/example-component-demo.tsx"],
  },
];
```

Make sure to add any necessary dependencies, tailwind configurations, or other properties as needed for your specific component.

## Ask for Help

For any help or questions, please open a new GitHub issue.
