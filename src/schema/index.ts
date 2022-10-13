import { builder } from './builder';
import './health';
import './user';

export const schema = builder.toSchema();
