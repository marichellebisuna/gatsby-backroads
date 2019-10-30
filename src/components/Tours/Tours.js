import React from 'react';
import TourList from '../Tours/TourList';
import { useStaticQuery, graphql } from 'gatsby';

const getTours = graphql`
	query {
		tours: allContentfulTour {
			edges {
				node {
					contentful_id
					name
					price
					slug
					country
					days
					images {
						fluid {
							...GatsbyContentfulFluid_tracedSVG
						}
					}
				}
			}
		}
	}
`;

const Tours = () => {
	const { tours } = useStaticQuery(getTours);

	return <TourList tours={tours} />;
};

export default Tours;
