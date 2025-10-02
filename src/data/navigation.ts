import { Home, Briefcase, FolderGit2, FileText, LucideIcon } from "lucide-react";

export interface NavigationItem {
  title: string;
  url: string;
  icon: LucideIcon;
}

// Add or remove navigation items here
export const navigationItems: NavigationItem[] = [
  { title: "Home", url: "/", icon: Home },
  { title: "Experiences", url: "/experiences", icon: Briefcase },
  { title: "Projects", url: "/projects", icon: FolderGit2 },
  { title: "Blog", url: "/blog", icon: FileText },
];

// Resume file path (relative to public folder)
export const resumePath = "/resume.pdf";
