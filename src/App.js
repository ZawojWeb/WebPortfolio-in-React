import React from 'react'
// Global Stlye
import GlobalStyle from './components/GlobalStyle'
import AboutUsPage from './pages/AboutUsPage'
import Nav from './components/Nav'


function App() {
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <Nav></Nav>
      <AboutUsPage></AboutUsPage>
    </div>
  );
}

export default App;
