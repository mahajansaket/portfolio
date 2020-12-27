import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import recovid19 from './assets/img/recovid19.jpg';
import personalWebsite from './assets/img/personalWebsite.JPG';
import reSIS from './assets/img/reSIS.jpg';
import reOver from './assets/img/reoverlay.jpg';
import calApp from './assets/img/calculator.jpg';
import fileManager from './assets/img/fileManager.jpg';
import { Button } from 'semantic-ui-react';

export default function Page2() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container fluid>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <h1 class="ui blue header">File Manager</h1>
          <img
            className="d-block w-100"
            src={fileManager}
            alt="https://warm-beach-30718.herokuapp.com/"
          />

          <Carousel.Caption>
            <Button
              fluid
              href="https://warm-beach-30718.herokuapp.com/"
              target="_blank"
            >
              {' '}
              Click to Open
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <h1 class="ui blue header">GatsbyJS Website</h1>
          <img
            className="d-block w-100"
            src={personalWebsite}
            alt="https://smahajan.com/"
          />

          <Carousel.Caption>
            <Button
              fluid
              href="https://smahajan.com/"
              target="_blank"
            >
              {' '}
              Click to Open
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <h1 class="ui blue header">ReactJS Website</h1>
          <img
            className="d-block w-100"
            src={reOver}
            alt="https://www.thawing-brushlands-32902.herokuapp.com/"
          />

          <Carousel.Caption>
            <Button
              fluid
              href="https://www.thawing-brushlands-32902.herokuapp.com/"
              target="_blank"
            >
              {' '}
              Click to Open
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <h1 class="ui blue header">COVID-19 Tracker</h1>
          <img
            className="d-block w-100"
            src={recovid19}
            alt="https://mahajansaket.github.io/COVID-19/"
          />

          <Carousel.Caption>
            <Button
              fluid
              href="https://mahajansaket.github.io/COVID-19/"
              target="_blank"
            >
              Click to Open
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <h1 class="ui blue header">Student Management Website</h1>
          <img
            className="d-block w-100"
            src={reSIS}
            alt="https://agile-cove-39529.herokuapp.com/"
          />

          <Carousel.Caption>
            <Button
              fluid
              href="https://agile-cove-39529.herokuapp.com/"
              target="_blank"
            >
              {' '}
              Click to Open
            </Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <h1 class="ui blue header">Calculator Application</h1>
          <img
            className="d-block w-100"
            src={calApp}
            alt="https://infinite-plateau-76234.herokuapp.com"
          />

          <Carousel.Caption>
            <Button
              fluid
              href="https://infinite-plateau-76234.herokuapp.com"
              target="_blank"
            >
              {' '}
              Click to Open
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}
