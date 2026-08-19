import type { Access, CollectionConfig, FieldAccess } from "payload";

function roleOf(user: unknown): "admin" | "editor" | "author" | undefined {
  if (!user || typeof user !== "object" || !("role" in user)) return undefined;
  const role = (user as { role?: unknown }).role;
  if (role === "admin" || role === "editor" || role === "author") return role;
  return undefined;
}

const isLoggedIn: Access = ({ req: { user } }) => Boolean(user);
const isAdmin: Access = ({ req: { user } }) => roleOf(user) === "admin";
const isAdminField: FieldAccess = ({ req: { user } }) => roleOf(user) === "admin";

export const Users: CollectionConfig = {
  slug: "users",
  admin: {
    useAsTitle: "email",
    group: "Admin",
  },
  auth: {
    tokenExpiration: 7200,
    maxLoginAttempts: 5,
    lockTime: 15 * 60 * 1000,
    cookies: {
      sameSite: "Lax",
      secure: process.env.NODE_ENV === "production",
    },
  },
  access: {
    admin: ({ req: { user } }) => Boolean(user),
    read: isLoggedIn,
    create: isAdmin,
    update: isLoggedIn,
    delete: isAdmin,
  },
  fields: [
    {
      name: "role",
      type: "select",
      required: true,
      defaultValue: "editor",
      options: [
        { label: "Admin", value: "admin" },
        { label: "Editor", value: "editor" },
        { label: "Author", value: "author" },
      ],
      access: {
        update: isAdminField,
      },
      admin: {
        description:
          "Admins manage users and site settings. Editors publish content. Authors draft their own posts.",
      },
    },
  ],
};
