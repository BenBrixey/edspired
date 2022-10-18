import React from 'react';
import { Link, graphql } from 'gatsby';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { AmplifyProvider } from '@aws-amplify/ui-react';
import Amplify, { API } from 'aws-amplify';
import moment from 'moment';
import { createCandidate } from '../graphql/mutations';

import awsExports from '../aws-exports';

Amplify.configure(awsExports);

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  margin-bottom: 3rem;
`;

const GroupWrapper = styled(Form.Group)`
  display: flex;
  width: 100%;
  padding: 1rem;
`;

const InputWrapper = styled.div`
  width: 100%;
`;

const BookingWrapper = styled.div`
  border-radius: 5px;
  background-color: #f2f2f2;
  border: 1px solid #ccc; /* Gray border */
  padding: 1rem 3rem;
  margin-top: 1rem;
`;

const FormControl = styled(Form.Control)`
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded borders */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 6px; /* Bottom margin */
  resize: vertical; /* Allow the user to vertically resize the textarea (not horizontally) */
`;

const FormSelect = styled(Form.Select)`
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded borders */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 6px; /* Bottom margin */
  resize: vertical; /* Allow the user to vertically resize the textarea (not horizontally) */
`;

const FormCheck = styled(Form.Check)`
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded borders */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 6px; /* Bottom margin */
  resize: vertical; /* Allow the user to vertically resize the textarea (not horizontally) */
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem;
`;

const LogoWrapper = styled.div`
  width: 150px;
  padding: 2rem;
  align-item: center;
  justify-content: center;
`;

const StyledButton = styled(Button)`
  font-size: 1.5rem;
  text-decoration: none;
  color: #111;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :hover {
    color: white;
    ::after {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
  background: var(--blue);

  border: 1px solid black;
  padding: 1rem 3rem;
  border-radius: 5px;
  cursor: pointer;
  --cast: 2px;
  box-shadow: var(--cast) var(--cast) 0 var(--grey);
  text-shadow: 0.5px 0.5px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.2s;
`;

export default function BookingForm({ clubs }) {
  const clubDate = clubs.map((club) => {
    const newDate = moment(club.launchAt).format('dddd, MMMM Do YYYY');
    return newDate;
  });
  //   moment(club.launchAt).format('dddd, MMMM Do YYYY')
  // );
  console.log(clubDate);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const dateSelect = document.getElementById('date');
    const dateRaw = dateSelect.options[dateSelect.selectedIndex].text;
    const date = moment(dateRaw, 'dddd, MMMM Do YYYY').format('YYYY-MM-DD');
    const name = e.target.name.value;
    const ageSelect = document.getElementById('age');
    const age = ageSelect.options[ageSelect.selectedIndex].text;
    const medical = e.target.medical.value;
    const telephone = e.target.telephone.value;
    const email = e.target.email.value;
    const photoConsent = e.target.photoConsent.value;
    const foodConsent = e.target.foodConsent.value;

    console.log(date);
    console.log(dateRaw);
    console.log(name);
    console.log(age);
    console.log(medical);
    console.log(telephone);
    console.log(email);
    console.log(photoConsent);
    console.log(foodConsent);

    await API.graphql({
      query: createCandidate,
      variables: {
        input: {
          date,
          name,
          age,
          medical,
          telephone,
          email,
          photoConsent,
          foodConsent,
        },
      },
    });
  };
  return (
    <AmplifyProvider>
      <BookingWrapper>
        <HeaderWrapper>
          <TextWrapper>
            <h1>Booking Form</h1>

            <h2>Please fill out and submit the form below</h2>
          </TextWrapper>
          <LogoWrapper>
            <Link to="/">
              <StaticImage
                src="../../images/circle-logo.png"
                alt="edspired logo"
              />
            </Link>
          </LogoWrapper>
        </HeaderWrapper>

        <Container>
          <Form onSubmit={handleFormSubmit}>
            <GroupWrapper className="mb-3">
              <InputWrapper>
                <Form.Label>Choose Adventure Start Date: </Form.Label>
              </InputWrapper>
              <InputWrapper>
                <FormSelect
                  aria-label="Default select example"
                  required
                  id="date"
                  name="date"
                >
                  <option>Select a date</option>
                  {clubDate.map((club) => (
                    <option key={club.launchAt}>{club}</option>
                  ))}
                </FormSelect>
              </InputWrapper>
            </GroupWrapper>
            <GroupWrapper className="mb-3">
              <InputWrapper>
                <Form.Label>Name of Adventurer: </Form.Label>
              </InputWrapper>
              <InputWrapper>
                <FormControl
                  size="sm"
                  required
                  label="Adventurer Name"
                  name="name"
                  placeholder="Name of Adventurer"
                />
              </InputWrapper>
            </GroupWrapper>
            <GroupWrapper className="mb-3">
              <InputWrapper>
                <Form.Label>Age of Adventurer: </Form.Label>
              </InputWrapper>
              <InputWrapper>
                <FormSelect
                  style={{ width: '100%' }}
                  aria-label="Default select example"
                  required
                  id="age"
                  name="age"
                >
                  <option>Select Age</option>
                  <option value="1">7</option>
                  <option value="2">8</option>
                  <option value="3">9</option>
                  <option value="4">10</option>
                  <option value="5">11</option>
                  <option value="6">12</option>
                  <option value="7">13</option>
                  <option value="8">14</option>
                  <option value="9">15</option>
                  <option value="10">16</option>
                </FormSelect>
              </InputWrapper>
            </GroupWrapper>
            <GroupWrapper
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <InputWrapper>
                <Form.Label>Allergies & Medical Conditions:</Form.Label>
              </InputWrapper>
              <InputWrapper>
                <FormControl as="textarea" rows={5} name="medical" />
              </InputWrapper>
            </GroupWrapper>
            <GroupWrapper
              className="mb-3"
              controlId="exampleForm.ControlInput1"
            >
              <InputWrapper>
                <Form.Label>
                  Parent/Guardian Emergency Contact Number
                </Form.Label>
              </InputWrapper>
              <InputWrapper>
                <FormControl placeholder="+44" name="telephone" />
              </InputWrapper>
            </GroupWrapper>
            <GroupWrapper
              className="mb-3"
              controlId="exampleForm.ControlInput1"
            >
              <InputWrapper>
                <Form.Label>Email address</Form.Label>
              </InputWrapper>
              <InputWrapper>
                <FormControl
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                />
              </InputWrapper>
            </GroupWrapper>
            <GroupWrapper
              className="mb-3"
              controlId="exampleForm.ControlInput1"
            >
              <InputWrapper>
                <Form.Label>
                  Use of photographs for future Edspired Tutoring marketing
                </Form.Label>
              </InputWrapper>
              <InputWrapper>
                {['radio'].map((type) => (
                  <div key={`photoConsent-${type}`} className="mb-3">
                    <FormCheck
                      inline
                      label="I do consent"
                      value="I do consent"
                      name="photoConsent"
                      type={type}
                      id={`photoConsent-${type}-1`}
                    />
                    <FormCheck
                      inline
                      label="I do not consent"
                      value="I do not consent"
                      name="photoConsent"
                      type={type}
                      id={`photoConsent-${type}-2`}
                    />
                  </div>
                ))}
              </InputWrapper>
            </GroupWrapper>
            <GroupWrapper
              className="mb-3"
              controlId="exampleForm.ControlInput1"
            >
              <InputWrapper>
                <Form.Label>
                  Snacks are homemade in my kitchen. Are you happy for your
                  child to have these during the club?
                </Form.Label>
              </InputWrapper>
              <InputWrapper>
                {['radio'].map((type) => (
                  <div key={`foodConsent-${type}`} className="mb-3">
                    <FormCheck
                      inline
                      label="Yes"
                      value="Yes"
                      name="foodConsent"
                      type={type}
                      id={`foodConsent-${type}-1`}
                    />
                    <FormCheck
                      inline
                      label="No"
                      value="No"
                      name="foodConsent"
                      type={type}
                      id={`foodConsent-${type}-2`}
                    />
                    <FormCheck
                      inline
                      label="Other"
                      value="Other"
                      name="foodConsent"
                      type={type}
                      id={`foodConsent-${type}-3`}
                    />
                  </div>
                ))}
              </InputWrapper>
            </GroupWrapper>
            <ButtonWrapper>
              <StyledButton type="submit">Submit</StyledButton>{' '}
            </ButtonWrapper>
          </Form>
        </Container>
      </BookingWrapper>
    </AmplifyProvider>
  );
}
