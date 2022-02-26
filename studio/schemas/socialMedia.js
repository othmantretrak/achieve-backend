import { DocumentIcon } from "@sanity/icons";

export default {
  name: "socialMedia",
  title: "Social Media",
  icon: DocumentIcon,
  type: "document",
  fields: [
    {
      name: "facebook",
      title: "facebook Url",
      type: "string",
    },
    {
      name: "twitter",
      title: "twitter url",
      type: "string",
    },
    {
      name: "instagram",
      title: "instagram url",
      type: "string",
    },
  ],
};
