# 📝 How to Edit Your Website

## Quick Start

**Everything you need to edit is in ONE file: `src/data.ts`**

Just open that file and modify the data - your website will update automatically!

---

## What You Can Edit

### 1. **Profile / Homepage** (Top of `data.ts`)

Edit your name, title, bio, and profile picture:

```typescript
export const profile = {
  name: "Your Name",
  title: "Your Title",
  bio: "Your bio text here...",
  headshotUrl: "/your-image.jpg", // Put images in the /public folder
};
```

### 2. **Experiences** 

Add, remove, or edit work experiences:

```typescript
{
  title: "Your Job Title",
  company: "Company Name",
  period: "2020 - Present",
  description: "What you did at this job...",
  skills: ["Skill1", "Skill2"], // Optional
}
```

**To add a new experience:** Copy an existing one and modify it.

**To remove an experience:** Delete the entire object `{ ... }`.

**To reorder:** Move the objects up or down in the array.

### 3. **Projects**

Add, remove, or edit projects:

```typescript
{
  title: "Project Name",
  description: "What the project does...",
  technologies: ["Tech1", "Tech2"], // Optional
  githubUrl: "https://github.com/...", // Optional
  liveUrl: "https://your-demo.com", // Optional
}
```

**Note:** `githubUrl` and `liveUrl` are optional - you can leave them out if you don't have them.

### 4. **Blog Posts**

Add, remove, or edit blog posts:

```typescript
{
  title: "Your Blog Post Title",
  date: "March 15, 2024",
  excerpt: "Short summary of the post...",
  tags: ["Tag1", "Tag2"],
  slug: "url-friendly-title", // Used in URL: /blog/url-friendly-title
  content: `Your blog post content here.

## Use ## for Headings

Write paragraphs normally.

## Another Heading

More content...`,
}
```

**Tips:**
- Use `## Heading` for section headings in your content
- The `slug` should be URL-friendly (lowercase, hyphens instead of spaces)
- Use backticks (\`) for multi-line content

---

## File Locations

- **Edit content:** `src/data.ts` ← **This is the main file!**
- **Add images:** Put them in `/public/` folder, then reference as `/filename.jpg`
- **Navigation:** `src/data/navigation.ts` (usually don't need to edit this)

---

## Common Tasks

### Add a New Project
1. Open `src/data.ts`
2. Find the `projects` array
3. Copy an existing project object
4. Paste it and modify the fields
5. Save - done!

### Remove a Blog Post
1. Open `src/data.ts`
2. Find the `blogPosts` array
3. Delete the entire object `{ ... }` for that post
4. Save - done!

### Update Your Bio
1. Open `src/data.ts`
2. Find `export const profile`
3. Change the `bio` field
4. Save - done!

### Change Profile Picture
1. Put your image in the `/public/` folder
2. Open `src/data.ts`
3. Update `headshotUrl: "/your-image.jpg"`
4. Save - done!

---

## Need Help?

- All data is in `src/data.ts`
- Just edit the values and save
- The website updates automatically (if dev server is running)
- Use simple text, no HTML needed (except `##` for headings in blog posts)

---

**That's it! You only need to edit one file to update your entire website.** 🎉

