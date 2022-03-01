import { DocumentIcon } from "@sanity/icons";

export default {
  name: "tarieven",
  title: "Tarieven",
  icon: DocumentIcon,
  type: "document",
  fields: [
    {
      name: "name",
      title: "Services Name",
      type: "string",
    },
    {
      name: "b_price",
      title: "Basic Price",
      type: "number",
    },
    {
      name: "s_price",
      title: "Standard Price",
      type: "number",
    },
    {
      name: "p_price",
      title: "Premium Price",
      type: "number",
    },
    {
      title: "Services 1",
      name: "service1",
      type: "object",
      fields: [
        { name: "title", type: "string" },
        { name: "seb", type: "boolean", title: "Enabled for Basic" },
        { name: "ses", type: "boolean", title: "Enabled for Standard" },
        { name: "sep", type: "boolean", title: "Enabled for Platinuim" },
      ],
    },
    {
      title: "Services 2",
      name: "service2",
      type: "object",
      fields: [
        { name: "title", type: "string" },
        { name: "seb", type: "boolean", title: "Enabled for Basic" },
        { name: "ses", type: "boolean", title: "Enabled for Standard" },
        { name: "sep", type: "boolean", title: "Enabled for Platinuim" },
      ],
    },
    {
      title: "Services 3",
      name: "service3",
      type: "object",
      fields: [
        { name: "title", type: "string" },
        { name: "seb", type: "boolean", title: "Enabled for Basic" },
        { name: "ses", type: "boolean", title: "Enabled for Standard" },
        { name: "sep", type: "boolean", title: "Enabled for Platinuim" },
      ],
    },
    {
      title: "Services 4",
      name: "service4",
      type: "object",
      fields: [
        { name: "title", type: "string" },
        { name: "seb", type: "boolean", title: "Enabled for Basic" },
        { name: "ses", type: "boolean", title: "Enabled for Standard" },
        { name: "sep", type: "boolean", title: "Enabled for Platinuim" },
      ],
    },
    {
      title: "Services 5",
      name: "service5",
      type: "object",
      fields: [
        { name: "title", type: "string" },
        { name: "seb", type: "boolean", title: "Enabled for Basic" },
        { name: "ses", type: "boolean", title: "Enabled for Standard" },
        { name: "sep", type: "boolean", title: "Enabled for Platinuim" },
      ],
    },
    {
      title: "Services 6",
      name: "service6",
      type: "object",
      fields: [
        { name: "title", type: "string" },
        { name: "seb", type: "boolean", title: "Enabled for Basic" },
        { name: "ses", type: "boolean", title: "Enabled for Standard" },
        { name: "sep", type: "boolean", title: "Enabled for Platinuim" },
      ],
    },
    {
      title: "Services 7",
      name: "service7",
      type: "object",
      fields: [
        { name: "title", type: "string" },
        { name: "seb", type: "boolean", title: "Enabled for Basic" },
        { name: "ses", type: "boolean", title: "Enabled for Standard" },
        { name: "sep", type: "boolean", title: "Enabled for Platinuim" },
      ],
    },
    /* {
      title: "Services",
      name: "services",
      type: "object",
      fields: [
        { name: "service1", type: "string" },
        { name: "s1eb", type: "boolean", title: "Enabled for Basic" },
        { name: "s1es", type: "boolean", title: "Enabled for Standard" },
        { name: "s1ep", type: "boolean", title: "Enabled for Platinuim" },
        { name: "service2", type: "string" },
        { name: "s2e", type: "boolean" },
        { name: "service3", type: "string" },
        { name: "s3e", type: "boolean" },
        { name: "service4", type: "string" },
        { name: "s4e", type: "boolean" },
        { name: "service5", type: "string" },
        { name: "s5e", type: "boolean" },
        { name: "service6", type: "string" },
        { name: "s6e", type: "boolean" },
        { name: "service7", type: "string" },
        { name: "s7e", type: "boolean" },
      ],
    }, */
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
