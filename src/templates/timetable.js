import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const TimetablePageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-12">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light has-text-white-bis">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
        </div>
      </div>
    </section>
  )
}

TimetablePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const TimetablePage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <TimetablePageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

TimetablePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default TimetablePage

export const timetablePageQuery = graphql`
  query TimetablePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
