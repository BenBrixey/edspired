import * as React from 'react';
import { AmplifyProvider } from '@aws-amplify/ui-react';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  return (
    <>
      <p>Hey! I'm the contact page</p>
      <ContactForm />
    </>
  );
}
