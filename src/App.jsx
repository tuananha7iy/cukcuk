import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DefaultLayout from './layouts'
import { publicRoutes } from './Routes'
import GlobalStyles from './components/GlobalStyles'

function App() {
  return (
    <Router>
      <GlobalStyles>
        <Routes>
          {publicRoutes.map((route, index) => {
            let Page = route.component
            let Layout = DefaultLayout

            if (route.layout) {
              Layout = route.layout
            } else if (route.layout === null) {
              Layout = React.Fragment
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                } />
            )
          })}
        </Routes>
      </GlobalStyles>
    </Router >
  )
}

export default App
