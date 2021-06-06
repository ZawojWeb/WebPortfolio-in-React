import React from 'react'
// Global Stlye
import GlobalStyle from './components/GlobalStyle'
import Nav from './components/Nav'
// Pages
import AboutUsPage from './pages/AboutUsPage'
import ContactUs from './pages/ContactUs'
import OurWork from './pages/OurWork'
// Router
import {Switch,Route} from 'react-router-dom'



function App() {
  return (
    <main>
      <div className="App">
        <GlobalStyle></GlobalStyle>
        <Nav></Nav>
        <Switch>
          <Route path="/" exact>
            <AboutUsPage></AboutUsPage>
          </Route>
          <Route path="/work" exact>
            <OurWork></OurWork>
          </Route>
          <Route path="/contact" exact>
          <ContactUs></ContactUs>
          </Route>
        </Switch>
      </div>
    </main>
  );
}

export default App;
