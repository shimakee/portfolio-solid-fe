import { defineConfig, loadEnv } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [solidPlugin()],
    server: {
      port: +env.APP_PORT,
      host: true,
    },
    dev: {
      port: +env.APP_PORT,
      host: true,
    },
    preview: {
      port: +env.APP_PORT,
      host: true,
      strictPort: true,
    },
    build: {
      target: "esnext",
    },
  };
});
