/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: [
			"cdn-icons-png.flaticon.com",
			"www.shareicon.net",
			"upload.wikimedia.org",
		],
	},
}

module.exports = nextConfig
