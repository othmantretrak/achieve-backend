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
      name: "published",
      title: "Published",
      type: "boolean",
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
      name: "aboutCase",
      title: "About this case",
      description: "what we did for this specific client",
      type: "text",
    },
    {
      name: "caseWebsite",
      title: "Case website",
      type: "string",
    },
    {
      name: "GeleverdeDiensten",
      title: "Geleverde diensten",
      description: "separated by comma (,)",
      type: "text",
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
      name: "caseLogo",
      title: "case's Logo (300px*300px)",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "WhoClient",
      title: "Who is the client?",
      description: "Who is the client?",
      type: "text",
    },

    {
      name: "youtube",
      title: "Youtube Links",
      description: "separated by comma (,)",
      type: "text",
    },
    {
      title: "Onze aanpak ",
      name: "faq",
      type: "object",
      fields: [
        {
          name: "aklantvraag",
          type: "text",
          title: "De klantvraag",
        },
        { name: "bstrategie", type: "text", title: "Onze strategie" },
        { name: "doelstelling", type: "text", title: "De doelstelling" },
      ],
    },
    {
      title: "testimonial",
      name: "testimonial",
      type: "object",
      fields: [
        { name: "testititle", type: "string", title: "testimonial title" },
        { name: "text", type: "text", title: "testimonial text" },
        {
          name: "testimonialImg",
          title: "testimonial image (1000px*600px)",
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
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
    /*    {
      name: "body",
      title: "Body",
      type: "blockContent",
    }, */
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
