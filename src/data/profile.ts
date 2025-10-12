export interface ProfileData {
  name: string;
  title: string;
  bio: string;
  headshotUrl?: string;
}

export const profileData: ProfileData = {
  name: "Your Name",
  title: "Software Engineer | Full Stack Developer",
  bio: "Passionate developer with expertise in building scalable web applications. I love solving complex problems and creating intuitive user experiences. Currently focused on React, TypeScript, and modern web technologies.",
  headshotUrl: "/headshot.jpeg",
};
