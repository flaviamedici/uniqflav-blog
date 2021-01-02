import React from "react"
import { graphql } from "gatsby"

import { Container, Content, ContentCard, FeatureImage, Pagination, Seo} from "../components"

import { H1, P } from "../elements"

const allPosts = ({pageContext, data}) => {
    const {currentPage, numPages} = pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`
    const nextPage = `/${currentPage + 1}`

    const posts = data.allMdx.edges

    return(
        <Container>
            <Seo />
            <FeatureImage />
            <Content>
                <H1 textAlign="center" margin="0 0 1rem 0">
                   Uniq Flav blog
                </H1>
                <P color="dark2" textAlign="center">
                This is the space I've created to share my everyday life and interests. I am 35 years old living in Seattle, 
                I am a proud dog mom, I work in tech and I love make-up, shoes and the gym. 
                My 2021 mantra: "I love myself and I am open to love and receive love from others" 
                </P>
                {posts.map(post => (
                    <ContentCard 
                        key={post.node.frontmatter.slug}
                        date={post.node.frontmatter.date}
                        title={post.node.frontmatter.title}
                        excerpt={post.node.frontmatter.excerpt}
                        slug={post.node.frontmatter.slug}
                    />
                ))}
            </Content>
            <Pagination 
                isFirst={isFirst}
                isLast={isLast}
                prevPage={prevPage}
                nextPage={nextPage}
            />
        </Container>
    )
}

export default allPosts

export const pageQuery = graphql`
    query AllPostsQuery($skip: Int!, $limit: Int!) {
        allMdx(limit: $limit, skip: $skip, sort: {fields: frontmatter___date, order: DESC}) {
            edges {
              node {
                frontmatter {
                  date(formatString: "MMMM DD, YYYY")
                  excerpt
                  slug
                  title
                }
              }
            }
          }
    }
`