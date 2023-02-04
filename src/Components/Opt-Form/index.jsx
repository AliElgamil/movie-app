import React, { useRef, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EmailContext } from '../../Context/context';
import { Container, Input, Button, Text, Form, Alert } from './style/OptForm';

export default function OptForm() {
  const [checkEmail, setCheckEmail] = useState(false);
  const { setEmail } = useContext(EmailContext);
  const inputEmail = useRef(null);
  const navigate = useNavigate();

  const formSubmit = (e) => {
    e.preventDefault();

    const mailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!inputEmail.current.value.match(mailFormat)) {
      setCheckEmail(true);
      return;
    }
    setEmail(inputEmail.current.value);
    navigate('/signup');
  };
  return (
    <Container>
      <Text>
        Ready to watch? Enter your email to create or restart your membership.
      </Text>
      <Form>
        <Input type={'email'} placeholder="Email address" ref={inputEmail} />
        <Button onClick={formSubmit.bind(this)}>
          Get Started <img src="/images/icons/chevron-right.png" alt="Icon" />{' '}
        </Button>
      </Form>
      {checkEmail ? <Alert>Your email is not valid</Alert> : null}
    </Container>
  );
}
