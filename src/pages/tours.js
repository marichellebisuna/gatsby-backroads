import React, { Component } from 'react';
import Tours from '../components/Tours/Tours';
import Layout from '../components/Layout';
import Header from '../examples/RegularHeader';
import StyledHero from '../components/StyledHero';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';

export default class tours extends Component {
	render() {
		return (
			<Layout>
				<SEO title="Tours" />
				<StyledHero img={this.props.data.defaultBcg.childImageSharp.fluid} />

				<Tours />
			</Layout>
		);
	}
}

export const query = graphql`
	query {
		defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
			childImageSharp {
				fluid(maxWidth: 4160, quality: 90) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`;
