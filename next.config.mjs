// Import required packages
import withPWAInit from "@ducanh2912/next-pwa";

// Your existing Next.js configuration
const nextConfig = {
  reactStrictMode: true,
};

// Merge withPWA configuration with your existing configuration
const withPWA = withPWAInit({
  dest: "public",
  reloadOnOnline:true,
  cacheOnFrontEndNav:true,
  aggressiveFrontEndNavCaching:true,
  swcMinify:true,
  disable:false,
  workboxOptions:{
    disableDevLogs:true

  }
});

// Export the merged configuration
export default withPWA(nextConfig);
