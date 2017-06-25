// @flow
import React, { Component } from 'react'
import { api, images } from '../../common'

export default class TopNav extends Component {
  render() {
    return <div style={styles.container} />
  }
}

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#F4F2F2',
  },
}
