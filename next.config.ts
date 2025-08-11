import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

if (process.env.NODE_ENV === 'development') {
  nextConfig.experimental = {
    ...nextConfig.experimental,
    allowedDevOrigins: [
      'https://*.cluster-htdgsbmflbdmov5xrjithceibm.cloudworkstations.dev',
    ],
  };
}


export default nextConfig;
