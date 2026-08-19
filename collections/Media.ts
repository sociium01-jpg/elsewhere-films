import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true,
  },
  admin: {
    group: "Content",
  },
  upload: {
    mimeTypes: ["image/*", "video/mp4", "video/webm", "application/pdf", "image/svg+xml"],
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
      admin: {
        description: "Required. Describe the image for accessibility and search.",
      },
    },
  ],
};
