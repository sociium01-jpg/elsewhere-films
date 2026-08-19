import type { Payload } from "payload";

export async function seedAdminUser(payload: Payload) {
  const email = process.env.PAYLOAD_ADMIN_EMAIL;
  const password = process.env.PAYLOAD_ADMIN_PASSWORD;

  if (!email || !password) {
    payload.logger.warn(
      "PAYLOAD_ADMIN_EMAIL / PAYLOAD_ADMIN_PASSWORD not set — skipping admin seed.",
    );
    return;
  }

  const existing = await payload.find({
    collection: "users",
    where: { email: { equals: email } },
    limit: 1,
  });

  if (existing.totalDocs > 0) {
    return;
  }

  await payload.create({
    collection: "users",
    data: {
      email,
      password,
      role: "admin",
    },
  });

  payload.logger.info(`Seeded admin user ${email}`);
}
