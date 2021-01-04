import PropTypes from 'prop-types'
import React from 'react'
import '../assets/css/header.css'

function Header(props) {
  return (
    // const Header = props => (
    <header id="header" style={props.timeout ? { display: 'none' } : {}}>
      <div className="logo">
        <span className=" fa fa-spinner fa-pulse fa-3x fa-fw"></span>
      </div>
      <div className="content">
        <div className="inner">
          <h1>Saket Mahajan</h1>
          <p>
            I'm Effective communicator with strong programming, problem-solving
            and management skills. I love and have been working on projects that
            provide solutions to the problems in our society. Being a quick
            learner, I prefer to work in a challenging environment to upgrade
            knowledge, improve skills to give out the best in me.
            <br />
            Feel free to check my website! Email me at{' '}
            <a href="mailto:mahajan.saket96@gmail.com">
              mahajan.saket96@gmail.com
            </a>{' '}
          </p>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <button onClick={() => props.onOpenArticle('about')}>
              About Me
            </button>
          </li>

          <li>
            <button onClick={() => props.onOpenArticle('portfolio')}>
              Portfolio
            </button>
          </li>
          <li>
            <button onClick={() => props.onOpenArticle('work')}>
              Experience
            </button>
          </li>
          <li>
            <button onClick={() => props.onOpenArticle('contact')}>
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
