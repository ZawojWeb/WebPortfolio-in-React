import React from 'react'
// Global Stlye
import GlobalStyle from './components/GlobalStyle'
import Nav from './components/Nav'
// Pages
import AboutUsPage from './pages/AboutUsPage'
import ContactUs from './pages/ContactUs'
import OurWork from './pages/OurWork'
// Router
import {Switch,Route, useLocation} from 'react-router-dom'
import MovieDetali from './pages/MovieDetali'
// Animation
import {AnimatePresence} from 'framer-motion'
import styled from 'styled-components'


function App() {
  const location = useLocation();
  return (
    <main>
      <SDivApp className="App" >
        <GlobalStyle></GlobalStyle>
        <Nav></Nav>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname} >
            <Route path="/" exact>
              <AboutUsPage></AboutUsPage>
            </Route>
            <Route path="/work" exact>
              <OurWork></OurWork>
            </Route>
            <Route path="/work/:id">
              <MovieDetali></MovieDetali>
            </Route>
            <Route path="/contact" exact>
            <ContactUs></ContactUs>
            </Route>
          </Switch>
        </AnimatePresence>
      </SDivApp>
    </main>
  );
}
const SDivApp = styled.div`
  overflow: hidden;
`
export default App;
