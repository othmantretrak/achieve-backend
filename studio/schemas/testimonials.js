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
      type: "blockContent",
    },
    {
      name: "fullName",
      title: "Full Name",
      type: "string",
    },
  ],
};
