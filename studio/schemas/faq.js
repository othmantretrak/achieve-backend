import { DocumentIcon } from "@sanity/icons";

export default {
  name: "faq",
  title: "FAQ",
  icon: DocumentIcon,
  type: "document",
  fields: [
    {
      name: "question",
      title: "Question",
      type: "string",
    },
    {
      name: "answer",
      title: "Answer",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "question",
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