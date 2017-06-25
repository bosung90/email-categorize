// @flow
import React, { Component } from 'react'
import { api, images } from '../../common'

export default class Search extends Component {
  render() {
    return (
      <div style={styles.container}>
        <img src={images.search} />
        <input />
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
}
