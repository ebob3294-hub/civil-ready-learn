import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.pc.app",
  appName: "Formation P.C",
  webDir: "dist",
  android: {
    allowMixedContent: true,
  },
};

export default config;
