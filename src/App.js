import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import { getTextAnalytics } from './api'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome hello eric</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          onClick={() => {
            getTextAnalytics({
              documents: [
                {
                  language: 'en',
                  id: '123',
                  text: 'a brown fox jumps over the fence',
                },
                {
                  language: 'en',
                  id: '124',
                  text:
                    'a second email from eric. hello I am trying to fire you',
                },
              ],
            }).then(responseObj => {
              console.log(responseObj)
            })
          }}
        >
          click here to fetch
        </button>
      </div>
    )
  }
}

export default App
