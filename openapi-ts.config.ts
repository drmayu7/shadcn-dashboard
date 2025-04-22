import {defineConfig} from '@hey-api/openapi-ts';

import { config } from "dotenv";

config({ path: ".env" });
const openapiFile = process.env.OPENAPI_OUTPUT_FILE;

export default defineConfig({
    input: openapiFile as string,
    output: {
        format: "prettier",
        lint: "eslint",
        path: "app/openapi-client",
    },
    plugins: ['@hey-api/client-fetch'],
});