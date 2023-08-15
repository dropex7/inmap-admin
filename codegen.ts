import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://dev-backend.inmap.app/graphql",
  documents: [
    "src/operations/place/query.ts",
    "src/operations/subject/query.ts",
    "src/operations/promo/query.ts",
  ],
  generates: {
    "src/generated/": {
      preset: "client",
      plugins: ["typescript", "typescript-operations"],
    },
  },
};

export default config;
