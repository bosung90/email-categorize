// @flow
import React, { Component } from 'react'
import './Main.css'
import { api, images } from '../../common'
import SideNav from '../SideNav'

export default class Main extends Component {
  inputTextarea: HTMLTextAreaElement
  state = {
    response: '',
    isFetching: false,
  }
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.header} />
        <div style={styles.body}>
          <div style={styles.sideNav}>
            <SideNav />
          </div>
          <div style={styles.emailContainer}>
            <div style={styles.topNav} />
            <div style={styles.emails} />
          </div>
        </div>
        <div>
          <textarea
            rows="10"
            cols="50"
            defaultValue={JSON.stringify({
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

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    minHeight: 1000,
  },
  header: {
    height: 60,
    backgroundColor: '#B4B3B6',
  },
  body: { display: 'flex', flex: 1 },
  sideNav: {
    display: 'flex',
    width: 190,
  },
  emailContainer: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'grey',
    flexDirection: 'column',
  },
  topNav: { height: 55, backgroundColor: '#F4F2F2' },
  emails: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#F4F2F2',
    flexDirection: 'column',
  },
}
