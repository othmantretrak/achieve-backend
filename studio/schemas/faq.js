import { DocumentIcon } from "@sanity/icons";

export default {
  name: "faq",
  title: "FAQ",
  icon: DocumentIcon,
  type: "document",
  fields: [
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
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
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "faqcategory" } }],
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
