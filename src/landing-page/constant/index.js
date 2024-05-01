import card1 from "../assets/card-1.svg";
import card2 from "../assets/card-2.svg";
import card3 from "../assets/card-3.svg";
import icon1 from "../assets/icon-1.svg";
import icon2 from "../assets/icon-2.svg";
import icon4 from "../assets/icon-4.svg";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#index",
    value: "home",
  },
  {
    id: "1",
    title: "About",
    url: "#about",
    value: "about",
  },
  {
    id: "2",
    title: "Features",
    url: "#features",
    value: "features",
  },
  {
    id: "3",
    title: "Contact",
    url: "#contact",
    value: "contact",
  },
];

export const features = [
  {
    id: "0",
    title: "Knowledge Exchange",
    text: "The content sharing interface allows students to share a wide range of materials, from articles and blog posts to videos and relevent academic content",
    backgroundUrl: card1,
    img: icon1,
  },
  {
    id: "1",
    title: "Student Profiles and Search",
    text: "Facilitate student profiles where they can include interests, skills, and areas of study. Allow searching for classmates based on these criteria to find potential study partners or project collaborators.",
    backgroundUrl: card2,
    img: icon2,
  },
  {
    id: "2",
    title: "Discussion Forums",
    text: "Create forums for specific courses or topics where students can discuss concepts, ask questions, and share insights. Integrate a chat feature for quick communication between classmates working on group projects",
    backgroundUrl: card3,
    img: icon4,
  },
];
