import { DocumentIcon } from "@sanity/icons";

export default {
  name: "companies",
  title: "Companies",
  icon: DocumentIcon,
  type: "document",
  fields: [
    {
      name: "imagesGallery",
      title: "Images gallery",
      type: "array",
      of: [{ type: "image" }],
    },
  ],
  preview: {
    select: {
      title: "Companies images",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        title: "Companies images",
        subtitle: author && `by ${author}`,
      });
    },
  },
};