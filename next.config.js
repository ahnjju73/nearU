/** @type {import('next').NextConfig} */
const config = {
  swcMinify: false,
  trailingSlash: true,
  images: {
    domains: ['kr.object.ncloudstorage.com'],
  },
  env: {
    // HOST
    HOST_API_KEY: 'https://api-dev-minimal-v4.vercel.app',
    // MAPBOX
    MAPBOX_API: '',
    // FIREBASE
    FIREBASE_API_KEY: '',
    FIREBASE_AUTH_DOMAIN: '',
    FIREBASE_PROJECT_ID: '',
    FIREBASE_STORAGE_BUCKET: '',
    FIREBASE_MESSAGING_SENDER_ID: '',
    FIREBASE_APPID: '',
    FIREBASE_MEASUREMENT_ID: '',
    // AWS COGNITO
    AWS_COGNITO_USER_POOL_ID: '',
    AWS_COGNITO_CLIENT_ID: '',
    // AUTH0
    AUTH0_DOMAIN: '',
    AUTH0_CLIENT_ID: '',
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    config.module.rules.push({
      test: /\.svg$/,
      use: {
        loader: '@svgr/webpack',
        options: {
          svgoConfig: {
            plugins: [
              {
                name: 'removeViewBox',
                active: false,
              },
            ],
          },
        },
      },
    });
    return config;
  },
};

module.exports = config;
