import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Grid, Cell } from "styled-css-grid";
import { media } from "../../constants/responsive";
import IconWork from "../Icons/IconWork.js";
import IconEducation from "../Icons/IconEducation.js";

import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";

import "./styles.css";

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
        <div>
          <h2 dangerouslySetInnerHTML={{ __html: timeLineTitle()[langKey] }} />
          <h5 dangerouslySetInnerHTML={{ __html: timeLineSubTitle()[langKey] }} />
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)"
              }}
              date="2017 - present"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<IconWork />}
            >
              <h3 className="vertical-timeline-element-title">
                Frontend Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                <a href="https://space307.com/">Space307</a>
              </h4>
              <p>
                UI development, Visual Design, ReactJS, SCSS, TWIG, GatsbyJS,
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2016 - present"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<IconWork />}
            >
              <h3 className="vertical-timeline-element-title">Co Founder</h3>
              <h4 className="vertical-timeline-element-subtitle">
                <a href="https://tagbox.me/">TagBox</a>
              </h4>
              <p>
                TagBox aims to create an easy experience to built up an e-commerce site through an instagram account.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2016 - 2017"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<IconEducation />}
            >
              <h3 className="vertical-timeline-element-title">Frontend Developer</h3>
              <h4 className="vertical-timeline-element-subtitle">
                <a href="https://selectel.ru/">Selectel - IT Infrastructure Solutions</a>
              </h4>
              <p>UI development, Angular, Native Javascript, jQuery, SCSS</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2014 - 2015"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">Frontend Developer</h3>
              <h4 className="vertical-timeline-element-subtitle">
                <a href="https://www.nic.ru/">RU-CENTER Group</a>
              </h4>
              <p>Client-side programming (mostly with JavaScript & jquery & knockout.js & CSS & HTML & XSLT & TWIG)</p>
            </VerticalTimelineElement>


            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2011 - 2014"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">
                Frontend Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                <a href="https://sweb.ru/">SpaceWeb Hosting</a>
              </h4>
              <p>Client-side programming (mostly with JavaScript & CSS & HTML & XSLT)</p>
            </VerticalTimelineElement>





            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="November 2012"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">
                Agile Development Scrum Master
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Certification
              </h4>
              <p>Creative Direction, User Experience, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2002 - 2006"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">
                Bachelor of Science in Interactive Digital Media Visual Imaging
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Bachelor Degree
              </h4>
              <p>Creative Direction, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            />
          </VerticalTimeline>
        </div>
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

Timeline.propTypes = {
  author: PropTypes.object.isRequired,
  className: PropTypes.string,
  langKey: PropTypes.string
};

export default Timeline;
