import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PropTypes from 'prop-types'

function DefaultLayout({ children }) {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="px-10 py-5 flex">
        {children}
      </div>
      <Footer />
    </div>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default DefaultLayout
