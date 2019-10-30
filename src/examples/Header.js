import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Header = () => {
	const { site: { siteMetadata: info } } = useStaticQuery(graphql`
		query MyQuery {
			site {
				siteMetadata {
					author
					description
					title
					data {
						age
						name
					}
				}
			}
		}
	`);
	console.log(info);
	return (
		<div>
			<h1>Title:{info.title}</h1>
			<h1>Author:{info.author}</h1>
			<h1>Description:{info.description}</h1>
		</div>
	);
};

export default Header;
