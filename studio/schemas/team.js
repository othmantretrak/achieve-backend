import { DocumentIcon } from "@sanity/icons";

export default {
  name: "team",
  title: "Teams",
  icon: DocumentIcon,
  type: "document",
  fields: [
    {
      name: "name",
      title: "Full Name",
      type: "string",
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "facebook",
      title: "facebook url",
      type: "string",
    },
    {
      name: "instagram",
      title: "instagram Url",
      type: "string",
    },
  ],
};
