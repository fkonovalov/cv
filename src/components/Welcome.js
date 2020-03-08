import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid, Cell } from 'styled-css-grid';
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaCodepen
} from 'react-icons/fa';
import { media } from '../constants/responsive';
import IconAvatar from './Icons/IconAvatar.js';

const Welcome = ({ className, langKey }) => {
  const getIntro = () => ({
    en: `Hello! My name is <span class="name">Fyodor</span>`,
    ru: `Привет! Меня зовут <span class="name">Фёдор</span>`
  });
  const getBio = () => ({
    en:
      'I\'m a frontend developer at <a href="https://tagbox.me" target="_blank"><b>TagBox</b></a>. We invent, build and invest in startups with the world\'s most influential companies. I build high-performance products and teams.  I\'m a software engineer with 12+ years of experience and I\'ve been managing technology teams in the last 8 years.',
    ru:
      'Я frontend developer в  <a href="https://tagbox.me" target="_blank"><b>TagBox</b></a>. We invent, build and invest in startups with the world\'s most influential companies. I build high-performance products and teams.  I\'m a software engineer with 12+ years of experience and I\'ve been managing technology teams in the last 8 years.'
  });
  return (
    <MainWrapper className={className}>
      <Wrapper>
        <LeftGapCell />
        <BioWrapper middle>
          <BioContainer>
            <Name>
              <span dangerouslySetInnerHTML={{ __html: getIntro()[langKey] }} />
            </Name>
            <Bio dangerouslySetInnerHTML={{ __html: getBio()[langKey] }} />
            <SocialLinks>
              <li>
                <A
                  href="https://codepen.io/fkonovalov"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FaCodepen />
                </A>
              </li>
              <li>
                <A
                  href="https://twitter.com/discotune"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FaTwitter />
                </A>
              </li>
              <li>
                <A
                  href="https://www.linkedin.com/in/fkonovalov/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FaLinkedin />
                </A>
              </li>
              <li>
                <A
                  href="https://www.instagram.com/dakrasivo/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FaInstagram />
                </A>
              </li>
              <li>
                <A
                  href="https://www.facebook.com/discotune"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FaFacebook />
                </A>
              </li>
              <li>
                <A
                  href="https://github.com/fkonovalov"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FaGithub />
                </A>
              </li>
            </SocialLinks>
          </BioContainer>
        </BioWrapper>
        <PictureContainer>
          {/*<ProfilePicture src={Avatar} alt="Fyodor Avatar" width={410} height={341} />*/}
          <IconAvatar />
        </PictureContainer>
        <RightGapCell />
      </Wrapper>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  background-color: ${props => props.theme.welcome.backgroundColor};
  padding-top: 2rem;
  ${media.md`
    padding-top: 0;
  `}
`;

const Wrapper = styled(Grid)`
  margin: ${props => props.theme.welcome.margin};
  font-family: ${props => props.theme.blog.author.fontFamily};
  font-size: ${props => props.theme.blog.author.fontSize};
  line-height: ${props => props.theme.blog.author.lineHeight};
  height: auto;
  grid-auto-flow: row dense;
  grid-auto-rows: minmax(20px, auto);
  grid-template-columns: auto 4.2rem 4.2rem auto;
  grid-gap: 0;
  ${media.md`
    height: 408px;
    grid-auto-flow: column;
    grid-template-columns: auto 50rem 21.25rem auto;
  `}
`;

const BioWrapper = styled(Cell)`
  grid-column: 1 / span 4;
  grid-row: 2 / span 1;
  text-align: center;
  ${media.md`
    text-align: left;
    background: url('/img/welcome_bg_curve.png') top right no-repeat;
    background-size: 244px 408px;
    font-size: 2.625rem;
    align-items: center;
    grid-column: 2 / span 1;
    grid-row: 1 / span 1;
  `}
`;

const BioContainer = styled.div`
  padding: 0;
  ${media.md`
    padding: 0 45px;
  `}
`;

const PictureContainer = styled(Cell)`
  display: grid;
  position: relative;
  grid-column: 2 / span 2;
  grid-row: 1 / span 1;
  place-items: center;
  background: none;
  border-radius: 50%;
  ${media.md`
    max-width: none;
    border-radius: 0%;
    background: url('/img/welcome_bg.png') top left;
    background-size: 1px 408px;
    grid-column: 3 / span 1;
    grid-row: 1 / span 1;
  `}
`;

const LeftGapCell = styled(Cell)`
  grid-column: 1 / span 1;
  grid-row: 1 / span 1;
`;

const RightGapCell = styled(Cell)`
  grid-column: 4 / span 1;
  grid-row: 1 / span 1;
  ${media.md`
    background: url('/img/welcome_bg.png') top left;
    background-size: 1px 408px;
  `}
`;

const Name = styled.div`
  font-size: 1.6rem;
  font-family: ${props => props.theme.fonts.SansSerif};
  font-weight: 500;
  margin: 1.2rem 0 1.6rem;
  ${media.md`
    margin-bottom: 2.5rem;
    margin-top: 0;
    font-size: 2.625rem;
  `}
  .name {
    color: ${({ theme }) => theme.colors.brand};
  }
`;

const Bio = styled.div`
  line-height: ${({ theme }) => theme.scale(3.2)};
  display: block;
  font-size: 0.9rem;
  line-height: 1.5rem;
  br {
    display: none;
  }
  padding: 0 35px;
  ${media.md`
    br { display: block; }
    font-size: 1.22rem;
    line-height: 1.9rem;
    padding: 0 120px 0 0;
  `}
`;

const SocialLinks = styled.ul`
  display: flex;
  margin-top: 26px;
  margin-bottom: 30px;
  list-style: none;
  justify-content: center;
  ${media.md`
    justify-content: flex-start;
  `}
  li {
    margin-right: 8px;
  }
  ${media.md`
    margin-bottom: 0;
  `}
`;

const A = styled.a`
  color: ${props => props.theme.colors.black};
  text-decoration: none;
  font-size: 1.5rem;
  display: inline-block;
  padding: ${props => props.theme.socialLinks.a.padding};
  transition: 0.3s;
  opacity: 0.8;
  &:hover {
    opacity: 1;
    color: ${props => props.theme.socialLinks.a.hover.color};
    transition: 0.3s;
  }
`;

Welcome.propTypes = {
  className: PropTypes.string,
  langKey: PropTypes.string
};

export default Welcome;
