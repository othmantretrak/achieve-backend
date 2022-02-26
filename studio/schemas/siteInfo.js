import { DocumentIcon } from "@sanity/icons";

export default {
  name: "siteInfo",
  title: "Site Info",
  icon: DocumentIcon,
  type: "document",
  fields: [
    {
      name: "title",
      title: "WebeSite Info Title",
      type: "string",
    },
    {
      name: "email",
      title: "Email address",
      type: "string",
    },
    {
      name: "phone",
      title: "Phone Number",
      type: "string",
    },
    {
      name: "address",
      title: "Site  Address",
      type: "string",
    },
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
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};