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
      title: "Membre Avatar (250px*250)",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "profession",
      title: "Profession",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "twitter",
      title: "twitter url",
      type: "string",
    },
    {
      name: "instagram",
      title: "instagram Url",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "name",
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
