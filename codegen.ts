import type {CodegenConfig} from '@graphql-codegen/cli';

const config: CodegenConfig = {
    // schema: "http://localhost:3001/graphql",
    documents: [
        'src/operations/place/query.ts',
        'src/operations/subject/query.ts',
        'src/operations/promo/query.ts',
        'src/operations/image/mutation.ts',
    ],
    generates: {
        'src/generated/': {
            config: {
                enumsAsTypes: true,
                futureProofEnums: true,
            },
            plugins: [],
            preset: 'client',
        },
    },
    overwrite: true,
    schema: 'https://dev-backend.inmap.app/graphql',
};

export default config;
