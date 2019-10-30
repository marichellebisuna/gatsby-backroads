import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Contact from '../components/Contact/Contact';
import StyledHero from '../components/StyledHero';
import { graphql } from 'gatsby';

export default function contact({ data }) {
	return (
		<Layout>
			<StyledHero img={data.contactBcg.childImageSharp.fluid} />
			<Contact />
		</Layout>
	);
}

export const query = graphql`
	query {
		contactBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
			childImageSharp {
				fluid(maxWidth: 4160, quality: 90) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`;
