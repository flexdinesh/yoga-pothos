import { builder } from "./builder";

class User {
  id: string;
  name: string;

  constructor({ id, name }: { id: string; name: string }) {
    this.id = id;
    this.name = name;
  }
}

builder.objectType(User, {
  name: "User",
  description: "A User",
  fields: (t) => ({
    id: t.exposeString("id"),
    name: t.exposeString("name"),
  }),
});

builder.queryFields((t) => ({
  user: t.field({
    type: User,
    resolve: () => new User({ id: "100", name: "Jo" }),
  }),
  users: t.field({
    type: [User],
    resolve: () => [
      new User({ id: "100", name: "Jo" }),
      new User({ id: "101", name: "Jan" }),
    ],
  }),
}));
