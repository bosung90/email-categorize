// @flow
import React, { Component } from 'react'
import logo from './logo.svg'
import './Main.css'

import { api } from '../../common'

export default class Main extends Component {
  inputTextarea: HTMLTextAreaElement
  state = {
    response: '',
    isFetching: false,
  }
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
        <div>
          <textarea
            rows="10"
            cols="50"
            value={JSON.stringify({
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
            })}
            ref={textarea => (this.inputTextarea = textarea)}
          />
        </div>

        <button
          disabled={this.state.isFetching}
          onClick={() => {
            this.setState({ isFetching: true })
            api
              .getTextAnalytics(JSON.parse(this.inputTextarea.value))
              .then(responseObj => {
                this.setState({
                  response: JSON.stringify(responseObj),
                  isFetching: false,
                })
              })
          }}
        >
          {this.state.isFetching ? 'fetching...' : 'click here to fetch'}
        </button>
        <div>
          <textarea rows="10" cols="50" value={this.state.response} />
        </div>

      </div>
    )
  }
}
