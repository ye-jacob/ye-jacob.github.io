import { Home, Briefcase, FolderGit2, FileText, FileUser, LucideIcon } from "lucide-react";

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
  { title: "Resume", url: "/resume", icon: FileUser },
];
