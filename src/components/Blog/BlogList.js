import React from 'react';
import BlogCard from '../Blog/BlogCard';
import Title from '../Title';
import { useStaticQuery, graphql } from 'gatsby';
import styles from '../css/blog.module.css';

const getPosts = graphql`
	query {
		posts: allContentfulPost(sort: { fields: published, order: DESC }) {
			edges {
				node {
					id: contentful_id
					published(formatString: "do MMMM YYYY, dddd")
					createdAt(formatString: "LLLL")
					title
					slug
					image {
						fluid {
							...GatsbyContentfulFluid_withWebp
						}
					}
				}
			}
		}
	}
`;

const BlogList = () => {
	const { posts } = useStaticQuery(getPosts);
	
	return (
		<section className={styles.blog}>
            <Title title="our" subtitle="blogs" />
            <div className={styles.center}>
{posts.edges.map(({node})=>{return <BlogCard key={node.id} blog={node}/>})}
            </div>

        </section>
	);
};

export default BlogList;
