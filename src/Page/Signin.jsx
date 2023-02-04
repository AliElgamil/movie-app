import React, { Fragment } from 'react';
import { Footer, Navbar, SigninForm } from '../Components';

export default function Signin() {
  return (
    <Fragment>
      <Navbar user={true} />
      <SigninForm />
      <Footer />
    </Fragment>
  );
}
