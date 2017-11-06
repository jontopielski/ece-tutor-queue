// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
//
// export default App;

import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from 'containers'
import About from 'containers'
import Tutor from 'containers'
import './App.css'

const App = () => (
  <div>
    <header>
      <Link to='/'>Home</Link>
      <Link to='/about-us'>About</Link>
      <Link to='/tutor'>Tutor Panel</Link>
    </header>

    <main>
      <Route exact={true} path='/' component={Home} />
      <Route exact={true} path='/about-us' component={About} />
      <Route exact={true} path='/tutor' component={Tutor} />
    </main>
  </div>
)

export default App
