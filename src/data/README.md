# Portfolio Data Files

This folder contains all the content for your portfolio website. Edit these files to update your portfolio without touching any component code!

## Quick Start Guide

### 📝 Update Your Profile
Edit `profile.ts` to change:
- Your name
- Job title
- Bio/description
- Headshot image (add image to `/public` folder and reference it here)

### 🔗 Add Navigation Items
Edit `navigation.ts` to:
- Add new sidebar menu items
- Change existing menu items
- Update resume file path

### 💼 Add/Edit Experiences
Edit `experiences.ts`:
- Add new work experience by copying the format
- Each experience includes: title, company, period, description, and skills
- Experiences are displayed in order (newest first recommended)

### 🚀 Add/Edit Projects
Edit `projects.ts`:
- Add new projects by copying the format
- Include: title, description, technologies, GitHub URL, and live demo URL
- Projects are displayed in order

### ✍️ Add/Edit Blog Posts
Edit `blog-posts.ts`:
- Add new blog posts by copying the format
- Include: title, date, excerpt, and tags
- Posts are displayed in order (newest first recommended)

## File Structure

```
src/data/
├── profile.ts       # Personal information and bio
├── navigation.ts    # Sidebar menu items and resume path
├── experiences.ts   # Work experience entries
├── projects.ts      # Project portfolio entries
├── blog-posts.ts    # Blog post entries
└── README.md        # This file
```

## TypeScript Interfaces

All data files use TypeScript interfaces for type safety. This means you'll get autocomplete and error checking in your editor!

## Example: Adding a New Experience

```typescript
{
  title: "Software Engineer",
  company: "Amazing Company",
  period: "2024 - Present",
  description: "Working on cool projects...",
  skills: ["React", "TypeScript", "Node.js"],
}
```

Just add this object to the array in `experiences.ts` and it will automatically appear on your website!
