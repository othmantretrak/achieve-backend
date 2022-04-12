import { DocumentIcon } from "@sanity/icons";

export default {
  name: "case",
  title: "Cases",
  icon: DocumentIcon,
  type: "document",
  fields: [
    {
      name: "title",
      title: "Case Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },

    {
      name: "mainImage",
      title: "Main image (1000px*600px)",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "youtube",
      title: "Youtube Link",
      type: "string",
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
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
