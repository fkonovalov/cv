import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid } from 'styled-css-grid';
import { media } from '../../constants/responsive';
import IconWork from '../Icons/IconWork.js';
import IconEducation from '../Icons/IconEducation.js';

import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';

import './styles.css';

const Timeline = ({ className, langKey }) => {
  const timeLineTitle = () => ({
    en: `Work experience & Education`,
    ru: `Опыт работы и обучение`
  });

  const timeLineSubTitle = () => ({
    en: `My previous jobs and my qualifications.`,
    ru: `Мои предыдущие места работы и квалификация.`
  });

  return (
    <MainWrapper className={className}>
      <Wrapper>
        <TimeLineContainer>
          <Title
            dangerouslySetInnerHTML={{ __html: timeLineTitle()[langKey] }}
          />
          <SubTitle
            dangerouslySetInnerHTML={{ __html: timeLineSubTitle()[langKey] }}
          />
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentArrowStyle={{
                borderRight: '7px solid #e3e3e3'
              }}
              date="2017 - present"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<IconWork />}
            >
              <h3 className="vertical-timeline-element-title">
                Frontend Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                <a
                  href="https://space307.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Space307
                </a>
              </h4>
              <p>
                UI development, Visual Design, ReactJS, SCSS, TWIG, GatsbyJS
              </p>

              <p>
                Develop{' '}
                <a
                  href="https://olymptrade.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Olymptrade trading platform
                </a>
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentArrowStyle={{
                borderRight: '7px solid  #e3e3e3'
              }}
              date="2017"
              iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
              icon={<IconEducation />}
            >
              <h3 className="vertical-timeline-element-title">
                Agile Development Scrum Master
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                <a
                  href="https://scrumtrek.ru/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  ScrumTrek Certification
                </a>
              </h4>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2016 - present"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{
                borderRight: '7px solid #e3e3e3'
              }}
              icon={<IconWork />}
            >
              <h3 className="vertical-timeline-element-title">Co Founder</h3>
              <h4 className="vertical-timeline-element-subtitle">
                <a
                  href="https://tagbox.me/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  TagBox
                </a>
              </h4>
              <p>
                TagBox aims to create an easy experience to built up an
                e-commerce site through an instagram account.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2016 - 2017"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{
                borderRight: '7px solid #e3e3e3'
              }}
              icon={<IconEducation />}
            >
              <h3 className="vertical-timeline-element-title">
                Frontend Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                <a
                  href="https://selectel.ru/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Selectel - IT Infrastructure Solutions
                </a>
              </h4>
              <p>UI development, Angular, Native Javascript, jQuery, SCSS</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2014 - 2015"
              contentArrowStyle={{
                borderRight: '7px solid #e3e3e3'
              }}
              icon={<IconWork />}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">
                Frontend Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                <a
                  href="https://www.nic.ru/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  RU-CENTER Group
                </a>
              </h4>
              <p>
                Client-side programming (mostly with JavaScript, jQuery,
                knockout.js, CSS, HTML, XSLT and TWIG)
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentArrowStyle={{
                borderRight: '7px solid  #e3e3e3'
              }}
              date="2015"
              iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
              icon={<IconEducation />}
            >
              <h3 className="vertical-timeline-element-title">
                "Javascript, DOM, interfaces for programmers" course
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                <a
                  href="https://learn.javascript.ru/courses/js-20151005-2130/fedor-konovalov/ru/certificate.jpg"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  JavaScript.ru Certification
                </a>
              </h4>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2011 - 2014"
              contentArrowStyle={{
                borderRight: '7px solid #e3e3e3'
              }}
              icon={<IconWork />}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">
                Frontend Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                <a
                  href="https://sweb.ru/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  SpaceWeb Hosting
                </a>
              </h4>
              <p>
                Client-side programming (mostly with JavaScript & CSS & HTML &
                XSLT)
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentArrowStyle={{
                borderRight: '7px solid  #e3e3e3'
              }}
              date="2005 - 2010"
              iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
              icon={<IconEducation />}
            >
              <h3 className="vertical-timeline-element-title">
                Taganrog University of Management and Economics
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                <p>Marketing Specialist</p>
              </h4>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </TimeLineContainer>
      </Wrapper>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  background-color: ${props => props.theme.welcome.backgroundColor};
  background-color: ${props => props.theme.timeline.backgroundColor};
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
  text-align: center;
  height: auto;
  grid-auto-flow: row dense;
  grid-auto-rows: minmax(20px, auto);
  grid-template-columns: 1fr;
  grid-gap: 0;
  ${media.md`
    grid-auto-flow: column;
  `}
`;

const TimeLineContainer = styled.div`
  padding: 18px;
  ${media.md`
    padding-top: 40px;
  `}
`;

const Title = styled.h2`
  padding: 8px 0;
`;

const SubTitle = styled.h3`
  padding: 8px 0 26px;
  font-size: 1.1rem;
`;

Timeline.propTypes = {
  className: PropTypes.string,
  langKey: PropTypes.string
};

export default Timeline;
