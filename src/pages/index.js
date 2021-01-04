import React, { useState, useEffect } from 'react'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import Layout from '../components/layout'

import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

function IndexPage(props) {
  const wrapperRef = React.useRef(null)
  const setWrapperRef = node => (wrapperRef.current = node) // set current ref value

  const [isArticleVisible, setIsArticleVisible] = useState(false)
  const [timeout, setTimeout] = useState(false)
  const [articleTimeout, setArticleTimeout] = useState(false)
  const [article, setArticle] = useState('')
  const [loading, setLoading] = useState('is-loading')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading('')
    }, 100)

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      clearTimeout(timeoutId)
      document.removeEventListener('mousedown', handleClickOutside)
    }
    // Effect triggered on component mount only
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleOpenArticle = article => {
    setIsArticleVisible(isArticleVisible => !isArticleVisible)
    setArticle(article)
    setTimeout(() => setTimeout(timeout => !timeout), 325)
    setTimeout(() => setArticleTimeout(articleTimeout => !articleTimeout), 350)
  }

  const handleCloseArticle = article => {
    setArticleTimeout(articleTimeout => !articleTimeout)
    // setTimeout(() => setTimeout(timeout => !timeout), 325)
    setTimeout(() => {
      setIsArticleVisible(isArticleVisible => !isArticleVisible)
      setArticle('')
    }, 350)
  }

  const handleClickOutside = event => {
    if (!wrapperRef.current.contains(event.target)) {
      // access current ref value
      if (isArticleVisible) {
        handleCloseArticle()
      }
    }
  }

  return (
    <PayPalScriptProvider options={{ 'client-id': 'sb' }}>
      <Layout location={props.location}>
        <div
          className={`body ${loading} ${
            isArticleVisible ? 'is-article-visible' : ''
          }`}
        >
          <div id="wrapper">
            <Header onOpenArticle={handleOpenArticle} timeout={timeout} />
            <Main
              isArticleVisible={isArticleVisible}
              timeout={timeout}
              articleTimeout={articleTimeout}
              article={article}
              onCloseArticle={handleCloseArticle}
              setWrapperRef={setWrapperRef}
            />
            <Footer timeout={timeout} />
          </div>
          <div id="bg"></div>
        </div>
      </Layout>
    </PayPalScriptProvider>
  )
}

export default IndexPage
