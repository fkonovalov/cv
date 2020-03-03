import React from 'react';
import TagsPageRoute from '../../components/pages/Tags';
import { graphql } from 'gatsby';

export default (props) => <TagsPageRoute {...props} />;

export const pageQuery = graphql`
  query TagsPtQuery {
    allMarkdownRemark(
      limit: 2000
      filter: {
        frontmatter: { draft: { ne: true } } ,
        fields: {
          langKey: {eq: "ru"}
        }
      }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
