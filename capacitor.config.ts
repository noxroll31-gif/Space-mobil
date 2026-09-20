import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.spacevwid.game',
  appName: 'SpaceVWID',
  webDir: 'www',
  android: {
    allowMixedContent: true
  }
};

export default config;
