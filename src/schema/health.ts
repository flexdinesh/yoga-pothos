import { builder } from './builder';

class Health {
  status: string;

  constructor(status: string) {
    this.status = status;
  }
}

builder.objectType(Health, {
  name: 'Health',
  description: 'API Health',
  fields: t => ({
    status: t.exposeString('status'),
  }),
});

builder.queryFields(t => ({
  health: t.field({
    type: Health,
    resolve: () => new Health('ok'),
  }),
}));
