import {
  pgEnum,
  pgTable,
  serial,
  text,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const tierEnum = pgEnum("tier", ["free", "standard", "premium"]);

export const workspace = pgTable("workspace", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name").notNull(),

  tier: tierEnum("tier").notNull().default("free"),
  owner: varchar("owner").notNull(),
});
