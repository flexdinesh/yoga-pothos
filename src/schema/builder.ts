import { DateTimeResolver } from "graphql-scalars";
import SchemaBuilder from "@pothos/core";

export const builder = new SchemaBuilder<{
  Scalars: {
    ID: {
      Output: number | string;
      Input: string;
    };
    DateTime: {
      Output: Date;
      Input: Date;
    };
  };
}>({});

builder.queryType();
// builder.mutationType();

builder.addScalarType("DateTime", DateTimeResolver, {});
