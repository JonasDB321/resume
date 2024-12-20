module.exports = {
	async rewrites() {
	  return [
		{
		  source: '/sitemap.xml',
		  destination: '/api/sitemap',
		},
	  ];
	},
	reactStrictMode: false,
	webpack(config) {
	  config.module.rules.push({
		test: /\.svg$/,
		use: ["@svgr/webpack"],
	  });
	  return config;
	},
  };
  