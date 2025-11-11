import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Portal-Legit/", // 👈 precisa ser igual ao nome do repositório
});
