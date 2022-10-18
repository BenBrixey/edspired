import React from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import { AmplifyProvider } from '@aws-amplify/ui-react';
import Amplify, { API } from 'aws-amplify';
import { createCandidate } from '../graphql/mutations';

import awsExports from '../aws-exports';

Amplify.configure(awsExports);

export default function ContactForm() {
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    await API.graphql({
      query: createCandidate,
      variables: {
        input: {
          name,
          email,
          message,
        },
      },
    });
  };
  return (
    <AmplifyProvider>
      <Container height="100vh">
        <div>
          <h1>Contact</h1>

          <h2>Fill out the form below to contact</h2>

          <Form.Group as="form" direction="column" onSubmit={handleFormSubmit}>
            <Form.Control
              required
              label="Your Name"
              name="name"
              placeholder="Full Name"
            />
            <Form.Control
              label="Email"
              name="email"
              placeholder="you@email.com"
              type="email"
              required
            />
            <Form.Control
              required
              label="Message"
              name="message"
              placeholder="Enter your message"
            />
            <div>
              <Button type="submit" variation="primary">
                Send Message
              </Button>
            </div>
          </Form.Group>
        </div>
      </Container>
    </AmplifyProvider>
  );
}
