require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`
}),
	(module.exports = {
		siteMetadata: {
			title: 'gatsby backroads',
			description: 'gatsby tutorial backroads',
			author: '@marichellebisuna',
			twitterUsername: '@john_smilga',
			image: '/defaultBcg.jpeg',
			siteUrl: 'https://https://backroadsgatsby.netlify.com/'
		},

		plugins: [
			{
				resolve: `gatsby-source-filesystem`,
				options: {
					name: `images`,
					path: `${__dirname}/src/images/`
				}
			},
			{
				resolve: `gatsby-source-contentful`,
				options: {
					spaceId: process.env.CONTENTFUL_SPACE_ID,
					accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
				}
			},
			{
				resolve: 'gatsby-plugin-robots-txt',
				options: {
					host: 'https://https://backroadsgatsby.netlify.com/',
					sitemap: 'https://https://backroadsgatsby.netlify.com/sitemap.xml',
					policy: [ { userAgent: '*', allow: '/' } ]
				}
			},
			`gatsby-transformer-sharp`,
			`gatsby-plugin-sharp`,
			`gatsby-plugin-sass`,
			`gatsby-plugin-styled-components`,
			`gatsby-plugin-transition-link`,
			`gatsby-plugin-react-helmet`,
			`gatsby-plugin-sitemap`,
			'gatsby-plugin-robots-txt'
		]
	});
