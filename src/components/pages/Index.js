import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../layout';
// import PostCardList from '../PostCardList';
// import { FormattedMessage } from 'react-intl';
// import BtnLink from '../BtnLink';
import styled from 'styled-components';
import { media } from '../../constants/responsive';
import Timeline from "../Timeline/Timeline";
import Welcome from "../Welcome";

const Index = (props) => {
  // const allStoriesPosts = props.data.all.edges.map(p => p.node);
  // const featuredPosts = props.data.featured.edges.map(p => p.node);
  const { author } = props.data.site.siteMetadata;
  const { langKey } = props.pageContext;

  return (
    <Layout location={props.location}>
      <Wrapper>
        {/*<Welcome author={author} langKey={langKey} />*/}
        <Timeline author={author} langKey={langKey} />
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
    ${media.md`
        padding: 0 45px;
    `}
`;

Index.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default Index;
