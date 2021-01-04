import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Tabs, Tab } from './Tabs/Tabs'
import raindrop from '../images/raindrop.jpg'
import hiotron from '../images/hiotron.jpg'
import { PayPalButtons } from '@paypal/react-paypal-js'
import Slider from './Slider/Slider'
import { init, sendForm } from 'emailjs-com'
import { useForm } from 'react-hook-form'
init('user_enGmhIJ1ZVGjJqQ6tLwQn')

function Main(props) {
  const [refNumber, setRefNumber] = useState('000000')

  const { register, handleSubmit, watch, errors } = useForm()

  const generateRefNumber = () => {
    const numStr = '000000' + ((Math.random() * 1000000) | 0)
    setRefNumber(numStr.substring(numStr.length - 6))
  }

  let close = <div className="close" onClick={props.onCloseArticle}></div>

  const onSubmit = data => {
    // console.log(data);
    generateRefNumber()
    sendForm('default_service', 'template_dshpq4i', '#contact-form').then(
      function(response) {
        console.log('SUCCESS!', response.status, response.text)
      },
      function(error) {
        console.log('FAILED...', error)
      }
    )
  }

  return (
    <div
      ref={props.setWrapperRef}
      id="main"
      style={props.timeout ? { display: 'flex' } : { display: 'none' }}
    >
      <article
        id="about"
        className={`${props.article === 'about' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Intro</h2>
        <span className="image main">
          <img
            align="center"
            src="https://github-readme-stats.vercel.app/api?username=mahajansaket&show_icons=true&locale=en"
            alt="mahajansaket"
          />
        </span>
        <p>
          Hello! I'm Saket Mahajan, pursuing Computer Science from Santa Clara
          Univesity who enjoys building things that live on the internet. I
          develop exceptional websites and web apps that provide intuitive,
          pixel-perfect user interfaces with efficient and modern backends. My
          goal is to grow as a person and as a professional, every day.
        </p>

        <p>
          Here are a few technologies I've been working with recently:
          <ul>
            <li>Java</li>
            <li>React</li>
            <li>GraphQL</li>
            <li>TypeScript</li>
            <li>Node.js</li>
            <li>JavaScript (ES6+)</li>
          </ul>
        </p>
        {close}
      </article>

      <article
        id="work"
        className={`${props.article === 'work' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Work</h2>

        <Tabs>
          <Tab label={'infor500'} tabName={'InFor500'}>
            <span className="image main">
              <img src={raindrop} alt="Infor500" />
            </span>
            <ul>
              <li>
                {' '}
                Design and develop new web application using ReactJs,
                Typescript, GraphQL
              </li>
              <li> Develop Postgres SQL triggers, functions and procedures</li>
              <li>
                {' '}
                Team collaboration and task integration in the Agile methodology
                using Jira and Bitbucket
              </li>
              <li>
                {' '}
                Led Test Automation and conducted Unit, Integration, E2E tests
                using Jest, Enzyme and Cypress
              </li>
              <li> Generated Golang functions on GCP Cloud Run for Anthos</li>
              <li> Setup Authorization code flow to login with Auth0</li>
            </ul>
          </Tab>
          <Tab label={'hiotron'} tabName={'hIoTron'}>
            <span className="image main">
              <img src={hiotron} alt="" />
            </span>
            <ul>
              <li>
                {' '}
                Built an application for real-time data monitoring from
                Electric-Power Meter and Smart Locks
              </li>
              <li>
                {' '}
                Created a multi-purpose library by integrating libraries from
                Arduino UNO, Arduino MEGA, NodeMCU
              </li>
              <li>
                {' '}
                Tested the multi-purpose library on smart devices involved in
                home automation
              </li>
            </ul>
          </Tab>
        </Tabs>
        {close}
      </article>

      <article
        id="portfolio"
        className={`${props.article === 'portfolio' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none', width: '100%' }}
      >
        <h2 className="major">Portfolio</h2>
        {/* <span className="image main"></span> */}
        <Slider />
        {close}
      </article>
      <article
        id="contact"
        className={`${props.article === 'contact' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Contact</h2>
        <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="user_name"
              ref={register}
              placeholder="Name"
            />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="user_email"
              ref={register}
              placeholder="Email"
            />
            <input type="hidden" name="ref_number" value={refNumber} />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="4"
              ref={register}
            ></textarea>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send" className="special" />
            </li>
            <li>
              <input type="reset" value="Reset" />
            </li>
          </ul>
        </form>
        <ul className="icons" style={{ display: 'flex' }}>
          <li>
            <a href="https://www.smahajan.com" className="icon fa-globe">
              <span className="label">https://www.smahajan.com</span>
            </a>
          </li>

          <li>
            <a
              href="https://github.com/codebushi/gatsby-starter-dimension"
              className="icon fa-github"
            >
              <span className="label">GitHub</span>
            </a>
          </li>
          <li>
            <a
              className="icon"
              href="https://www.buymeacoffee.com/killMeSak"
              target="_blank"
            >
              <img
                src="https://cdn.buymeacoffee.com/widget/assets/coffee%20cup.svg"
                style={{ height: '36px', width: '36px', margin: 0, padding: 0 }}
              />
            </a>
          </li>
          <li>
            <div className="icon">
              <PayPalButtons style={{ layout: 'horizontal' }} />
            </div>
          </li>
        </ul>
        {close}
      </article>
    </div>
  )
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onOpenArticle: PropTypes.func,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
