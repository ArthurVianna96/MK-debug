const { withGluestackUI } = require('@gluestack/ui-next-adapter');

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	transpilePackages: ['solito', '@gluestack-ui/themed'],
};

module.exports = withGluestackUI(nextConfig);
