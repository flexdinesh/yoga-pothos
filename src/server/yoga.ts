import * as chalk from 'chalk';
import * as express from 'express';
import { createServer } from '@graphql-yoga/node';
import { schema } from '../schema';

export const graphQLServer = createServer({
  schema,
});

const app = express();

// Bind GraphQL Yoga to `/graphql` endpoint
app.use('/graphql', graphQLServer);

app.use('/', (req, res) => {
  res.json({
    status: 'ok',
  });
});

app.listen(4000, () => {
  console.log(`🚀 GraphQL server started at ${chalk.blue('http://localhost:4000/graphql')}`);
  console.log(`✨ Health endpoint at ${chalk.green('http://localhost:4000')}`);
});
