import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "sishi.man.tracker",
  appName: "sushsi-man-tracker",
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
  },
  server: {
    androidScheme: "https",
    cleartext: true,
    iosScheme: "https",
  },
  android: {
    path: "./platforms/android",
  },
  webDir: "build",
};

export default config;
