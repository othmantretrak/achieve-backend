import { DocumentIcon } from "@sanity/icons";

export default {
  name: "tarieven",
  title: "Tarieven",
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
      name: "periodb",
      title: "Maandelijks or Eenmalig for Basic",
      type: "object",
      fields: [
        {
          name: "maandelijks",
          title: "Maandelijks",
          type: "boolean",
          options: { layout: "checkbox" },
        },
        {
          name: "eenmalig",
          title: "Eenmalig",
          type: "boolean",
          options: { layout: "checkbox" },
        },
      ],
    },
    {
      name: "s_price",
      title: "Standard Price",
      type: "number",
    },
    {
      name: "periods",
      title: "Maandelijks or Eenmalig for Standard",
      type: "object",
      fields: [
        {
          name: "maandelijks",
          title: "Maandelijks",
          type: "boolean",
          options: { layout: "checkbox" },
        },
        {
          name: "eenmalig",
          title: "Eenmalig",
          type: "boolean",
          options: { layout: "checkbox" },
        },
      ],
    },
    {
      name: "p_price",
      title: "Premium Price",
      type: "number",
    },
    {
      name: "periodp",
      title: "Maandelijks or Eenmalig for Premium",
      type: "object",
      fields: [
        {
          name: "maandelijks",
          title: "Maandelijks",
          type: "boolean",
          options: { layout: "checkbox" },
        },
        {
          name: "eenmalig",
          title: "Eenmalig",
          type: "boolean",
          options: { layout: "checkbox" },
        },
      ],
    },
    {
      title: "Services 1",
      name: "service1",
      type: "object",
      fields: [
        { name: "title", type: "string" },
        {
          name: "seb",
          type: "string",
          title: "text for Basic put (yes or no if you want icons)",
        },
        {
          name: "ses",
          type: "string",
          title: "text for Standard put (yes or no if you want icons)",
        },
        {
          name: "sep",
          type: "string",
          title: "text for Premium put (yes or no if you want icons)",
        },
      ],
    },
    {
      title: "Services 2",
      name: "service2",
      type: "object",
      fields: [
        { name: "title", type: "string" },
        {
          name: "seb",
          type: "string",
          title: "text for Basic put (yes or no if you want icons)",
        },
        {
          name: "ses",
          type: "string",
          title: "text for Standard put (yes or no if you want icons)",
        },
        {
          name: "sep",
          type: "string",
          title: "text for Premium put (yes or no if you want icons)",
        },
      ],
    },
    {
      title: "Services 3",
      name: "service3",
      type: "object",
      fields: [
        { name: "title", type: "string" },
        {
          name: "seb",
          type: "string",
          title: "text for Basic put (yes or no if you want icons)",
        },
        {
          name: "ses",
          type: "string",
          title: "text for Standard put (yes or no if you want icons)",
        },
        {
          name: "sep",
          type: "string",
          title: "text for Premium put (yes or no if you want icons)",
        },
      ],
    },
    {
      title: "Services 4",
      name: "service4",
      type: "object",
      fields: [
        { name: "title", type: "string" },
        {
          name: "seb",
          type: "string",
          title: "text for Basic put (yes or no if you want icons)",
        },
        {
          name: "ses",
          type: "string",
          title: "text for Standard put (yes or no if you want icons)",
        },
        {
          name: "sep",
          type: "string",
          title: "text for Premium put (yes or no if you want icons)",
        },
      ],
    },
    {
      title: "Services 5",
      name: "service5",
      type: "object",
      fields: [
        { name: "title", type: "string" },
        {
          name: "seb",
          type: "string",
          title: "text for Basic put (yes or no if you want icons)",
        },
        {
          name: "ses",
          type: "string",
          title: "text for Standard put (yes or no if you want icons)",
        },
        {
          name: "sep",
          type: "string",
          title: "text for Premium put (yes or no if you want icons)",
        },
      ],
    },
    {
      title: "Services 6",
      name: "service6",
      type: "object",
      fields: [
        { name: "title", type: "string" },
        {
          name: "seb",
          type: "string",
          title: "text for Basic put (yes or no if you want icons)",
        },
        {
          name: "ses",
          type: "string",
          title: "text for Standard put (yes or no if you want icons)",
        },
        {
          name: "sep",
          type: "string",
          title: "text for Premium put (yes or no if you want icons)",
        },
      ],
    },
    {
      title: "Services 7",
      name: "service7",
      type: "object",
      fields: [
        { name: "title", type: "string" },
        {
          name: "seb",
          type: "string",
          title: "text for Basic put (yes or no if you want icons)",
        },
        {
          name: "ses",
          type: "string",
          title: "text for Standard put (yes or no if you want icons)",
        },
        {
          name: "sep",
          type: "string",
          title: "text for Premium put (yes or no if you want icons)",
        },
      ],
    },
    {
      title: "Services 8",
      name: "service8",
      type: "object",
      fields: [
        { name: "title", type: "string" },
        {
          name: "seb",
          type: "string",
          title: "text for Basic put (yes or no if you want icons)",
        },
        {
          name: "ses",
          type: "string",
          title: "text for Standard put (yes or no if you want icons)",
        },
        {
          name: "sep",
          type: "string",
          title: "text for Premium put (yes or no if you want icons)",
        },
      ],
    },
    {
      title: "Services 9",
      name: "service9",
      type: "object",
      fields: [
        { name: "title", type: "string" },
        {
          name: "seb",
          type: "string",
          title: "text for Basic put (yes or no if you want icons)",
        },
        {
          name: "ses",
          type: "string",
          title: "text for Standard put (yes or no if you want icons)",
        },
        {
          name: "sep",
          type: "string",
          title: "text for Premium put (yes or no if you want icons)",
        },
      ],
    },
    {
      title: "Services 10",
      name: "service10",
      type: "object",
      fields: [
        { name: "title", type: "string" },
        {
          name: "seb",
          type: "string",
          title: "text for Basic put (yes or no if you want icons)",
        },
        {
          name: "ses",
          type: "string",
          title: "text for Standard put (yes or no if you want icons)",
        },
        {
          name: "sep",
          type: "string",
          title: "text for Premium put (yes or no if you want icons)",
        },
      ],
    },
    {
      title: "Services 11",
      name: "service11",
      type: "object",
      fields: [
        { name: "title", type: "string" },
        {
          name: "seb",
          type: "string",
          title: "text for Basic put (yes or no if you want icons)",
        },
        {
          name: "ses",
          type: "string",
          title: "text for Standard put (yes or no if you want icons)",
        },
        {
          name: "sep",
          type: "string",
          title: "text for Premium put (yes or no if you want icons)",
        },
      ],
    },
    {
      title: "Services 12",
      name: "service12",
      type: "object",
      fields: [
        { name: "title", type: "string" },
        {
          name: "seb",
          type: "string",
          title: "text for Basic put (yes or no if you want icons)",
        },
        {
          name: "ses",
          type: "string",
          title: "text for Standard put (yes or no if you want icons)",
        },
        {
          name: "sep",
          type: "string",
          title: "text for Premium put (yes or no if you want icons)",
        },
      ],
    },
    {
      title: "Services 13",
      name: "service13",
      type: "object",
      fields: [
        { name: "title", type: "string" },
        {
          name: "seb",
          type: "string",
          title: "text for Basic put (yes or no if you want icons)",
        },
        {
          name: "ses",
          type: "string",
          title: "text for Standard put (yes or no if you want icons)",
        },
        {
          name: "sep",
          type: "string",
          title: "text for Premium put (yes or no if you want icons)",
        },
      ],
    },
    {
      title: "Services 14",
      name: "service14",
      type: "object",
      fields: [
        { name: "title", type: "string" },
        {
          name: "seb",
          type: "string",
          title: "text for Basic put (yes or no if you want icons)",
        },
        {
          name: "ses",
          type: "string",
          title: "text for Standard put (yes or no if you want icons)",
        },
        {
          name: "sep",
          type: "string",
          title: "text for Premium put (yes or no if you want icons)",
        },
      ],
    },
    {
      title: "Services 15",
      name: "service15",
      type: "object",
      fields: [
        { name: "title", type: "string" },
        {
          name: "seb",
          type: "string",
          title: "text for Basic put (yes or no if you want icons)",
        },
        {
          name: "ses",
          type: "string",
          title: "text for Standard put (yes or no if you want icons)",
        },
        {
          name: "sep",
          type: "string",
          title: "text for Premium put (yes or no if you want icons)",
        },
      ],
    },
    {
      title: "Services 16",
      name: "service16",
      type: "object",
      fields: [
        { name: "title", type: "string" },
        {
          name: "seb",
          type: "string",
          title: "text for Basic put (yes or no if you want icons)",
        },
        {
          name: "ses",
          type: "string",
          title: "text for Standard put (yes or no if you want icons)",
        },
        {
          name: "sep",
          type: "string",
          title: "text for Premium put (yes or no if you want icons)",
        },
      ],
    },
    {
      title: "Services 17",
      name: "service17",
      type: "object",
      fields: [
        { name: "title", type: "string" },
        {
          name: "seb",
          type: "string",
          title: "text for Basic put (yes or no if you want icons)",
        },
        {
          name: "ses",
          type: "string",
          title: "text for Standard put (yes or no if you want icons)",
        },
        {
          name: "sep",
          type: "string",
          title: "text for Premium put (yes or no if you want icons)",
        },
      ],
    },
    {
      title: "Services 18",
      name: "service18",
      type: "object",
      fields: [
        { name: "title", type: "string" },
        {
          name: "seb",
          type: "string",
          title: "text for Basic put (yes or no if you want icons)",
        },
        {
          name: "ses",
          type: "string",
          title: "text for Standard put (yes or no if you want icons)",
        },
        {
          name: "sep",
          type: "string",
          title: "text for Premium put (yes or no if you want icons)",
        },
      ],
    },
    {
      title: "Services 19",
      name: "service19",
      type: "object",
      fields: [
        { name: "title", type: "string" },
        {
          name: "seb",
          type: "string",
          title: "text for Basic put (yes or no if you want icons)",
        },
        {
          name: "ses",
          type: "string",
          title: "text for Standard put (yes or no if you want icons)",
        },
        {
          name: "sep",
          type: "string",
          title: "text for Premium put (yes or no if you want icons)",
        },
      ],
    },
    {
      title: "Services 20",
      name: "service20",
      type: "object",
      fields: [
        { name: "title", type: "string" },
        {
          name: "seb",
          type: "string",
          title: "text for Basic put (yes or no if you want icons)",
        },
        {
          name: "ses",
          type: "string",
          title: "text for Standard put (yes or no if you want icons)",
        },
        {
          name: "sep",
          type: "string",
          title: "text for Premium put (yes or no if you want icons)",
        },
      ],
    },
    /* {
      title: "Services",
      name: "services",
      type: "object",
      fields: [
        { name: "service1", type: "string" },
        { name: "s1eb", type: "boolean", title: "text for Basic" },
        { name: "s1es", type: "boolean", title: "text for Standard" },
        { name: "s1ep", type: "boolean", title: "text for Premium" },
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
