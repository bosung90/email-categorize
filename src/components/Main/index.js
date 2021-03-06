// @flow
import React, { Component } from 'react'
import './Main.css'
import { api } from '../../common'
import SideNav from '../SideNav'
import Header from '../Header'
import TopNav from '../TopNav'
import Emails from '../Emails'
import { emailsObj } from '../../Emails'

export default class Main extends Component {
  inputTextarea: HTMLTextAreaElement
  state = {
    response: '',
    isFetching: false,
    responseObj: {},
  }
  componentDidMount() {
    this.setState({ isFetching: true })
    api
      .getTextAnalytics(JSON.parse(this.inputTextarea.value))
      .then(responseObj => {
        this.setState({
          response: JSON.stringify(responseObj),
          responseObj,
          isFetching: false,
        })
      })
  }
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <Header />
        </div>
        <div style={styles.body}>
          <div style={styles.sideNav}>
            <SideNav />
          </div>
          <div style={styles.emailContainer}>
            {/* <div style={styles.topNav}>
              <TopNav />
            </div> */}
            <div style={styles.emails}>
              <Emails responseObj={this.state.responseObj} />
            </div>
          </div>
        </div>
        <div>
          <textarea
            rows="10"
            cols="50"
            defaultValue={JSON.stringify(emailsObj)}
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
                  responseObj,
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
    display: 'flex',
    height: 60,
    backgroundColor: 'red',
  },
  body: { display: 'flex', flex: 1 },
  sideNav: {
    display: 'flex',
    width: 190,
  },
  emailContainer: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'red',
    flexDirection: 'column',
  },
  topNav: { display: 'flex', height: 55, backgroundColor: 'red' },
  emails: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'red',
    flexDirection: 'column',
  },
}
