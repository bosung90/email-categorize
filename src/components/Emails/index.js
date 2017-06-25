// @flow
import React, { Component } from 'react'
import { api, images } from '../../common'
import EmailLine from './EmailLine'

export default class Emails extends Component {
  render() {
    return (
      <div style={styles.container}>
        <EmailLine />
        <EmailLine />
        <EmailLine />
        <EmailLine />
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F4F2F2',
    width: 400,
  },
}
