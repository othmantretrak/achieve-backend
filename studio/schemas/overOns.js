import { DocumentIcon } from "@sanity/icons";

export default {
  name: "overOns",
  title: "over ons details",
  icon: DocumentIcon,
  type: "document",
  fields: [
    {
      name: "title",
      title: "over ons details",
      type: "string",
      hidden: true,
      initialValue: "over ons details",
    },
    {
      name: "introduction",
      title: "introduction text",
      type: "text",
    },
    {
      name: "communicatie",
      title: "Communicatie section",
      type: "object",
      fields: [
        {
          name: "text",
          title: "communicatie text",
          type: "text",
        },
        {
          name: "communicatieIcon",
          title: "communicatie image (80px)",
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: "transparantie",
      title: "Transparantie section",
      type: "object",
      fields: [
        {
          name: "text",
          title: "Transparantie text",
          type: "text",
        },
        {
          name: "transparantieIcon",
          title: "Transparantie image (80px)",
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: "professionaliteit",
      title: "Professionaliteit section",
      type: "object",
      fields: [
        {
          name: "text",
          title: "professionaliteit text",
          type: "text",
        },
        {
          name: "professionaliteitIcon",
          title: "Professionaliteit image (80px)",
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: "passie",
      title: "Passie section",
      type: "object",
      fields: [
        {
          name: "text",
          title: "Passie text",
          type: "text",
        },
        {
          name: "passieIcon",
          title: "Passie image (80px)",
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
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
