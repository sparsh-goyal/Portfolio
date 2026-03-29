import { useEffect } from "react";
import { ACHIEVEMENTS, PROJECTS } from "../constants";

const profileImage = new URL("../assets/profile2.jpeg", import.meta.url).href;

const imageSources = [
  profileImage,
  ...PROJECTS.map((project) => project.image),
  ...ACHIEVEMENTS.map((achievement) => achievement.image ?? "/assets/awards/trophy-badge.svg"),
];

export default function ImagePrefetcher() {
  useEffect(() => {
    imageSources.forEach((src) => {
      if (!src) return;

      const img = new Image();
      img.decoding = "async";
      img.src = src;
    });
  }, []);

  return null;
}
