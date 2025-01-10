import React from 'react'
import {
  Html, Body, Head, Heading, Hr, Container, Preview, Section, Text
} from '@react-email/components'
import {Tailwind} from '@react-email/tailwind'

type ContactFormEmailProps= {
  message: string
  email: string
}
const ContactFormEmail = ({ message, email }: ContactFormEmailProps) => {
  return <Html>
     <Head />
      <Preview>New Message from your portfolio site</Preview>
      <Tailwind>
        <Body>
          <Container>
          <Heading>You received the following message from the contact form </Heading>
          <Text>{message}</Text>
          <Hr />
          <Text>The sender's email is: {email}</Text>
          </Container>
        </Body>
      </Tailwind>
  </Html>;
};

export default ContactFormEmail