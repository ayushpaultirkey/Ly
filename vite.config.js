import { join } from "path";
import { defineConfig } from "vite";
import { fileURLToPath, URL } from "url";
import h12VitePlugin from "./plugin/h12.vite";

export default defineConfig({
    root: join(__dirname, "/public"),
    build: {
        outDir: "../dist"
    },
    optimizeDeps: {
        entries: [
            'public/script/app.js',
        ]
    },
    plugins: [
        h12VitePlugin()
    ],
    resolve: {
        alias: [
            { find: "@library", replacement: fileURLToPath(new URL("./public/library", import.meta.url)) }
        ]
    }
})