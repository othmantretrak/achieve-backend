import { MdSettingsApplications } from "react-icons/md";

export default {
  name: "settings",
  title: "Site settings ",
  icon: MdSettingsApplications,
  type: "document",
  fields: [
    {
      name: "title",
      title: "WebeSite Info Title",
      type: "string",
      hidden: true,
      initialValue: "Site Settings",
    },
    {
      name: "btnhovercolor",
      title: "Btn hover Color",
      type: "colorPicker",
      description: "choose color by clicking on the circle",
    },
    {
      name: "favoriteColor",
      title: "Btn hover Color",
      type: "color",
      options: {
        disableAlpha: true,
      },
    },
    {
      name: "FooterIcons",
      title: "Footer icons",
      type: "object",
      fields: [
        {
          name: "emailIcon",
          title: "Footer email image (80px)",
          type: "image",
          options: {
            hotspot: true,
          },
        },
        {
          name: "addressIcon",
          title: "Footer address image (80px)",
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
