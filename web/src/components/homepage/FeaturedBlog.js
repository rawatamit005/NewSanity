import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FeaturedBlogsStyles } from '../../styles/homePage/FeaturedBlogsStyles';
import { SectionTitle } from '../typography/Title';
import ParagraphText from '../typography/ParagraphText';
import BlogGrid from '../blogs/BlogGrid';

function FeaturedBlog() {
  const data = useStaticQuery(graphql`
    {
      allSanityFeatured(filter: { _id: { eq: "featuredItems" } }) {
        nodes {
          blogs {
            title
            id
            publishedAt
            categories {
              title
              slug {
                current
              }
            }
            coverImage {
              alt
              asset {
                gatsbyImageData
              }
            }
            slug {
              current
            }
          }
        }
      }
    }
  `);
  const featuredBlogs = data.allSanityFeatured.nodes[0].blogs;
  console.log(featuredBlogs);
  return (
    <FeaturedBlogsStyles>
      <SectionTitle>Featured Blog</SectionTitle>
      <ParagraphText className="featuredBlogs__text">
        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
      </ParagraphText>
      <BlogGrid blogs={featuredBlogs} />
    </FeaturedBlogsStyles>
  );
}

export default FeaturedBlog;
