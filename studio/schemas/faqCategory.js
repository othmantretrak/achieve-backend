import { TagIcon } from "@sanity/icons";

export default {
  name: "faqcategory",
  title: "FAQ Category",
  icon: TagIcon,
  type: "document",
  hidden: true,
  fields: [
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
    {
      name: "title",
      title: "Title",
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
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
};
