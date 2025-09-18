import { icons } from "./icons.js";

const $socialList = document.querySelector(".social-list");

const socialLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com"
  },
  {
    name: "X",
    url: "https://x.com"
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com"
  },
];

export function renderSocialLinks() {
  socialLinks.forEach(({ name, url }) => {
    const socialItem = document.createElement("li");
    socialItem.classList.add("social__item");

    const socialLink = document.createElement("a");
    socialLink.setAttribute("href", url);
    socialLink.setAttribute("target", "_blank");
    socialLink.setAttribute("rel", "noopener noreferrer");
    socialLink.setAttribute("title", name);
    socialLink.setAttribute("aria-label", `Visit us on ${name}`);
    socialLink.classList.add("social__link", "grid", "focus-outline");

    socialLink.innerHTML = icons[name];

    socialItem.appendChild(socialLink);
    $socialList.appendChild(socialItem);
  });
}