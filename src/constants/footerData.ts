import {  footerList } from "@/types/footerDataType";
import { Urls } from "./urlsData";

export const FooterData: footerList = [
  {
    title: "Pages",
    data: [
      { text: "About us", link: Urls.about },
      { text: "Contact", link: Urls.contact },
      { text: "privacy-policy", link: Urls.privacyPolicy },
      { text: "Services", link: Urls.service },
    ],
  },
  {
    title: "Our Services",
    data: [
      {
        text: "General Construction",
      },
      { text: "Property Maintenance" },
      { text: "Project Management" },
      { text: "Virtual Design & Build" },
      { text: "Preconstruction" },
    ],
  },
  {
    title: "Connects",
    data: [
      { text: "+888 (123) 869523" },
      { text: "example@gmail.com" },
      { text: "Orangy town karachi" },
    ],
  },
];
