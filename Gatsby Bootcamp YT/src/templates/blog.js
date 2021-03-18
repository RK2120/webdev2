import React from 'react'
import { graphql } from 'gatsby'

import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { BLOCKS } from '@contentful/rich-text-types'

import Layout from '../components/layout'
import Head from '../components/head'

// export const query = graphql`
//   query ($slug: String!) {
//     markdownRemark (fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost (slug: {eq: $slug}) {
      title
      publishedDate(formatString: "hh:mmA on MMMM Do, YYYY")
      body {
        raw
        references {
          ... on ContentfulAsset {
            __typename
            contentful_id
            title
            file {
              url
            }
          }
        }
      }
    }
  }
`

 

const Blog = props => {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const alt = node.data.target.title
        const url = node.data.target.file.url
        return <img alt={alt} src={url} />
        // console.log(node)
        // return <p>logged</p>
      }
    }
  }

  //const { description } = props.data.contentfulBlogPost.body  
  return(
        // <Layout>
        //     <h1>{props.data.markdownRemark.frontmatter.title}</h1>
        //     <p>{props.data.markdownRemark.frontmatter.date}</p>
        //     <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}}></div>
        // </Layout>

        <Layout>
          <Head title={props.data.contentfulBlogPost.title} />
            <h1>{props.data.contentfulBlogPost.title}</h1>
            <p>{props.data.contentfulBlogPost.publishedDate}</p>
            {renderRichText(props.data.contentfulBlogPost.body, options)}
        </Layout>
    )
}

export default Blog