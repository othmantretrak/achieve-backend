import { DocumentIcon } from "@sanity/icons";

export default {
  name: "testimonial",
  title: "Testimonial",
  icon: DocumentIcon,
  type: "document",
  fields: [
    {
      name: "message",
      title: "Message",
      type: "text",
    },
    {
      name: "fullName",
      title: "Full Name",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "fullName",
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
