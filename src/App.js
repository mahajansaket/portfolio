import React, { Fragment } from 'react';
import { Container } from 'semantic-ui-react';

import Menu from './Menu';
import Page2 from './Page2';

const App = () => (
  <Fragment>
    <Menu />
    <Container>
      {/* <Login /> */}
      <Page2/>
    </Container>
  </Fragment>
);

export default App;
