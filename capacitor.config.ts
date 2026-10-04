import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.protectioncivile.formationsp",
  appName: "Formation SP",
  webDir: "dist/client",
  android: {
    allowMixedContent: true,
  },
};

export default config;
