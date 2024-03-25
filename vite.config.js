import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/more-than-just-shorter-links-for-deploy/",
  plugins: [react()],
});
