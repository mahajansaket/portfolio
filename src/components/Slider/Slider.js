import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import fileManager from '../../images/portfolio/fileManager.jpg'
import personalWebsite from '../../images/portfolio/personalWebsite.jpg'
import covid19 from '../../images/portfolio/covid19.jpg'
import calculator from '../../images/portfolio/calculator.jpg'
import StudentInfoSys from '../../images/portfolio/StudentInfoSys.png'
import thawingBrush from '../../images/portfolio/thawingBrush.png'
import '../../assets/css/slide.css'

const Slider = () => {
  function openLink(link) {
    window.open(link)
  }

  return (
    <Carousel infiniteLoop showArrows={true} showStatus={false}>
      <div>
        <img src={fileManager} alt="https://warm-beach-30718.herokuapp.com/" />
        <p className="legend">
          <a href="https://warm-beach-30718.herokuapp.com/" target="_blank">
            <button>File Manager</button>
          </a>
        </p>
      </div>

      <div style={{ display: 'block' }}>
        <img
          src={calculator}
          alt="https://infinite-plateau-76234.herokuapp.com"
        />
        <p className="legend">
          <a
            href="https://infinite-plateau-76234.herokuapp.com"
            target="_blank"
          >
            <button>Calculator</button>
          </a>
        </p>
      </div>
      <div style={{ display: 'block' }}>
        <img src={covid19} alt="https://mahajansaket.github.io/COVID-19/" />
        <p className="legend">
          <a href="https://mahajansaket.github.io/COVID-19/" target="_blank">
            <button>COVID-19</button>
          </a>
        </p>
      </div>
      <div style={{ display: 'block' }}>
        <img src={personalWebsite} />
        <p className="legend">
          <a href="https://www.smahajan.com" target="_blank">
            <button>Gatsby-JS Website</button>
          </a>
        </p>
      </div>
      <div style={{ display: 'block' }}>
        <img
          src={StudentInfoSys}
          alt="https://agile-cove-39529.herokuapp.com/"
        />
        <p className="legend">
          <a href="https://agile-cove-39529.herokuapp.com/" target="_blank">
            <button>Student Information System</button>
          </a>
        </p>
      </div>
      <div style={{ display: 'block' }}>
        <img
          src={thawingBrush}
          alt="https://www.thawing-brushlands-32902.herokuapp.com/"
        />
        <p className="legend">
          <a href="https://agile-cove-39529.herokuapp.com/" target="_blank">
            <button>Alternate Personal Website</button>
          </a>
        </p>
      </div>
    </Carousel>
  )
}
export default Slider
