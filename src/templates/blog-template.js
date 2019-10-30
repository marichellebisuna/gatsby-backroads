import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import styles from '../components/css/single-blog.module.css';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Blog = ({ data }) => {
	const { title, published, text: { json } } = data.post;
	const options = {
		renderNode: {
			'embedded-asset-block': (node) => {
				console.log(node);
				return (
					<div className="rich">
						<h3>this is awesome image</h3>
						<img width="400" src={node.data.target.fields.file['en-US'].url} />
						<p>images provided by jane doe</p>
					</div>
				);
			},
			'embedded-entry-block': (node) => {
				console.log(node.data.target.fields);
				const { title, image, text } = node.data.target.fields;

				return (
					<div>
						<br />
						<br />
						<br />
						<br />
						<h1>other post: {title['en-US']}</h1>
						<img width="400" src={image['en-US'].fields.file['en-US'].url} alt="" />
						{documentToReactComponents(text['en-US'])}
						<br />
						<br />
						<br />
						<br />
					</div>
				);
			}
		}
	};

	return (
		<Layout>
			<section className={styles.blog}>
				<div className={styles.center}>
					<h1>{title}</h1>
					<h4>published at: {published}</h4>
					<article className={styles.post}>{documentToReactComponents(json, options)}</article>
					<AniLink fade to="/blog" className="btn-primary">
						all posts
					</AniLink>
				</div>
			</section>
		</Layout>
	);
};

export const query = graphql`
	query getPost($blogSlug: String!) {
		post: contentfulPost(slug: { eq: $blogSlug }) {
			title
			published(formatString: "do MMMM YYYY, dddd")
			text {
				json
			}
		}
	}
`;

export default Blog;
