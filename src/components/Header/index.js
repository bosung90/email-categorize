// @flow
import React, { Component } from 'react'
import { api, images } from '../../common'

export default class Header extends Component {
  render() {
    return (
      <div style={styles.container}>
        <img style={{ height: 23 }} src={images.logo} />
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#3B3B3B',
    paddingLeft: 51,
    alignItems: 'center',
  },
}
