import React, { Fragment } from 'react';
import { Footer, Navbar, SignupForm } from '../Components';

export default function Signup() {
  return (
    <Fragment>
      <Navbar user={true} />
      <SignupForm />
      <Footer />
    </Fragment>
  );
}
