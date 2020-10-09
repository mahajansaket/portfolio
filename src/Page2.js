import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import recovid19 from "./assets/img/recovid19.jpg";
import personalWebsite from "./assets/img/personalWebsite.JPG";
import rethawingBrush from "./assets/img/rethawingBrush.jpg";
import reSIS from "./assets/img/reSIS.jpg";
import { Button } from "semantic-ui-react";

export default function Page2() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  return (
    <Container fluid>
    
      <Carousel activeIndex={index} onSelect={handleSelect} >
        
        <Carousel.Item>
          <h1 class="ui blue header">COVID-19 Tracker</h1>
          <img className="d-block w-100" src={recovid19} alt="First slide" />

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
         <h1 class="ui blue header">ReactJS Website</h1>
          <img
            className="d-block w-100"
            src={rethawingBrush}
            alt="Second slide"
          />

          <Carousel.Caption>
            <Button
            fluid
            href="https://www.thawing-brushlands-32902.herokuapp.com/"
            target="_blank"
          >  Click to Open
          </Button>
          </Carousel.Caption>
          
          
        </Carousel.Item>
        <Carousel.Item>
         <h1 class="ui blue header">Student Management Website</h1>
          <img className="d-block w-100" src={reSIS} alt="Third slide" />

         <Carousel.Caption>
            <Button
            fluid
            href="https://agile-cove-39529.herokuapp.com/"
            target="_blank"
          >  Click to Open
          </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <h1 class="ui blue header">GatsbyJS Website</h1>
          <img
            className="d-block w-100"
            src={personalWebsite}
            alt="Second slide"
          />

          <Carousel.Caption>
            <Button
            fluid
            href="https://smahajan.com/"
            target="_blank"
          >  Click to Open
          </Button>
          
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}


// import withAutoplay from 'react-awesome-slider/dist/autoplay';

// import recovid19 from './assets/img/recovid19.jpg';
// import personalWebsite from './assets/img/personalWebsite.JPG';
// import rethawingBrush from './assets/img/rethawingBrush.jpg';
// import reSIS from './assets/img/reSIS.jpg';
// import AwesomeSlider from 'react-awesome-slider';
// import 'react-awesome-slider/dist/styles.css';
// // import AwsSliderStyles from 'react-awesome-slider/src/styles.scss';
// import ReactDOM from "react-dom";
// // import Slide from "react-swipeable-views";
// import Button from "@material-ui/core/Button";
// import useMediaQuery from "@material-ui/core/useMediaQuery";
// import { red, blue, green } from "@material-ui/core/colors";
// import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";

// const AutoplaySlider = withAutoplay(AwesomeSlider);

// const AutoRotatingCarouselModal = ({ handleOpen, setHandleOpen, isMobile }) => {
//     return (
//       <div>
//         {/* <Button onClick={() => setHandleOpen({ open: true })}>Open carousel</Button> */}
//         <AutoRotatingCarousel
//           // label="Get started"
//           open={handleOpen.open}
//           onClose={() => setHandleOpen({ open: false })}
//           onStart={() => setHandleOpen({ open: false })}
//           autoplay={false}
//           mobile={isMobile}
//           // style={{ position: "absolute" }}
//         >
//           <Slide
//             media={
//               <img src={reSIS} />
//             }
//             // mediaBackgroundStyle={{ backgroundColor: red[400] }}
//             // style={{ backgroundColor: red[600] }}
//             // title="This is a very cool feature"
//             // subtitle="Just using this will blow your mind."
//           />
//           <Slide
//             media={
//               <img src={recovid19} />
//             }
//             // mediaBackgroundStyle={{ backgroundColor: blue[400] }}
//             // style={{ backgroundColor: blue[600] }}
//             // title="Ever wanted to be popular?"
//             // subtitle="Well just mix two colors and your are good to go!"
//           />
//           <Slide
//             media={
//               <a href="http://www.google.com">
//               <img src={rethawingBrush} /></a>
//             }
//             // mediaBackgroundStyle={{ backgroundColor: green[400] }}
//             // style={{ backgroundColor: green[600] }}
//             // title="May the force be with you"
//             // subtitle="The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe."
//           />
//           <Slide
//             media={
//               <img src={personalWebsite} ></img>

//             }
//             // mediaBackgroundStyle={{ backgroundColor: green[400] }}
//             // style={{ backgroundColor: green[600] }}
//             // title="May the force be with you"
//             // subtitle="The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe."
//           > <Button>Open</Button></Slide>
//         </AutoRotatingCarousel>
//       </div>
//     );
//   };

//   export default function App() {
//     const [handleOpen, setHandleOpen] = useState({ open: false });
//     const handleClick = () => {
//       setHandleOpen({ open: true });
//     };
//     const matches = useMediaQuery("(max-width:600px)");
//     return (
//       <>
//         <Button onClick={handleClick}>Open carousel</Button>
//         <AutoRotatingCarouselModal
//           isMobile={matches}
//           handleOpen={handleOpen}
//           setHandleOpen={setHandleOpen}
//         />
//       </>
//     );
//   }

// export default function slider() {
// // const slider = (
//     return (
//   <AutoplaySlider
//     play={true}
//     cancelOnInteraction={false} // should stop playing on user interaction
//     interval={6000}
//   >
//     <div data-src={recovid19} />
//     <div data-src={personalWebsite} />
//     <div data-src={reSIS} />
//   </AutoplaySlider>

// );
// }
