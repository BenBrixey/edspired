import * as React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import StyledServicesHeroSection from '../components/Backgrounds/ServicesBackground';
import StyledServicesSection from '../components/Backgrounds/ServicesSection';
import StyledServicesSectionTwo from '../components/Backgrounds/ServicesSectionTwo';
import StyledServicesSectionThree from '../components/Backgrounds/ServicesSectionThree';
import StyledServicesSectionFour from '../components/Backgrounds/ServicesSectionFour';

const BannerOne = styled.div`
  display: flex;
  width: 100%;
  margin-top: 2rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: #d8e1ea;
`;

const BannerTwo = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 2rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: #d8e1ea;
`;

const IconWrapper = styled.div`
  width: 150px;
  padding: 1rem;
  margin-top: auto;
  margin-bottom: auto;
`;

const TextWrapper = styled.div`
  padding: 1rem;
`;

const BannerHeaderWrapper = styled.div`
  padding: 1rem;
`;

export default function ServicesPage() {
  return (
    <>
      <StyledServicesHeroSection />
      <BannerOne>
        <IconWrapper>
          <StaticImage
            src="../images/checklist.png"
            alt="Checklist icon"
            style={{ width: '100px' }}
          />
        </IconWrapper>

        <TextWrapper>
          <BannerHeaderWrapper>
            <h2>
              Every student will have a FREE consultation, this allows an
              initial assessment of the students requirements to be carried out
              and a friendly meet and greet for parents, students and tutor!
            </h2>
          </BannerHeaderWrapper>

          <BannerHeaderWrapper>
            Edspired tutoring does not try and create a one size fits all
            education programme. Every child will have a tailored support plan
            for the subject requested, aimed at improving the targets area
            discussed and identified during the initial consultation.
          </BannerHeaderWrapper>
        </TextWrapper>
      </BannerOne>
      <StyledServicesSection />
      <BannerTwo>
        <IconWrapper>
          <StaticImage
            src="../images/pound-sign.png"
            alt="Pound sign icon"
            style={{ width: '100px' }}
          />
        </IconWrapper>

        <TextWrapper>
          <BannerHeaderWrapper>
            <h2>£35 per hour session</h2>
          </BannerHeaderWrapper>

          <BannerHeaderWrapper>
            <h3>
              One to one tutoring is a highly personalised way of teaching
            </h3>
            <p>
              Your tutor is able to recognise how you learn and retain
              information and adjust each lesson accordingly
            </p>
          </BannerHeaderWrapper>
        </TextWrapper>
      </BannerTwo>
      <StyledServicesSectionTwo />
      <BannerOne>
        <IconWrapper>
          <StaticImage
            src="../images/report-icon.png"
            alt="Report sheet icon"
            style={{ width: '100px' }}
          />
        </IconWrapper>

        <TextWrapper>
          <BannerHeaderWrapper>
            <h2>
              Edspired tutoring will provide all students and parents with a
              simple informative contract. This contract puts simply what is
              expected of both student and tutor for all parties to see.
            </h2>
          </BannerHeaderWrapper>

          <BannerHeaderWrapper>
            Tutoring is a two way street in which both student and tutor must
            put in the required level of work to see improvments. Edspired
            tutoring cannot guarentee an improvemnt in grades or exam results.
            However, with the right commitment and attitude, Edspired will help
            you gain confidence to tackle the subjects.
          </BannerHeaderWrapper>
        </TextWrapper>
      </BannerOne>
      <StyledServicesSectionThree />
      <BannerTwo>
        <IconWrapper>
          <StaticImage
            src="../images/pound-sign.png"
            alt="Pound sign icon"
            style={{ width: '100px' }}
          />
        </IconWrapper>

        <TextWrapper>
          <BannerHeaderWrapper>
            <h2>£35 per hour session</h2>
          </BannerHeaderWrapper>

          <BannerHeaderWrapper>
            <h3>
              One to one tutoring is a highly personalised way of teaching
            </h3>
            <p>
              Your tutor is able to recognise how you learn and retain
              information and adjust each lesson accordingly
            </p>
          </BannerHeaderWrapper>
        </TextWrapper>
      </BannerTwo>
      <StyledServicesSectionFour />
      <BannerOne>
        <IconWrapper>
          <StaticImage
            src="../images/progress-icon.png"
            alt="Progress icon"
            style={{ width: '100px' }}
          />
        </IconWrapper>

        <TextWrapper>
          <BannerHeaderWrapper>
            <h2>
              Confidence is key to improving on any subject and as the student
              continues to progress, Edspired will provide constant feedback to
              parents on progression, areas to improve and the students mental
              well being if appropriate.
            </h2>
          </BannerHeaderWrapper>

          <BannerHeaderWrapper>
            Helping students develop academically is what Edspired Tutoring is
            driven to acheive. Inspiring the next generation to make the most of
            their oppurtunities. We will also make sure we are an ear to listen
            if things are getting tough.
          </BannerHeaderWrapper>
        </TextWrapper>
      </BannerOne>
    </>
  );
}
