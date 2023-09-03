import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://dev-backend.inmap.app/graphql",
  documents: [
    "src/operations/place/query.ts",
    "src/operations/subject/query.ts",
    "src/operations/promo/query.ts",
    "src/operations/image/mutation.ts",
  ],
  generates: {
    "src/generated/": {
      preset: "client",
      config: {
        enumsAsTypes: true,
        futureProofEnums: true,
      },
      plugins: [],
    },
  },
};

export default config;
