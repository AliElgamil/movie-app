import React, { Fragment } from 'react';
import { Jumbotron, Accordions, Header, Navbar, Footer } from '../Components';
function Home({ user }) {
  return (
    <Fragment>
      <Navbar user={user} />
      <Header />
      <Jumbotron />
      <Accordions />
      <Footer />
    </Fragment>
  );
}

export default Home;
