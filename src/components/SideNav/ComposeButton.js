// @flow
import React, { Component } from 'react'
import { api, images } from '../../common'

export default class ComposeButton extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div
          style={{
            display: 'flex',
            minWidth: 30,
            alignItems: 'center',
          }}
        >
          <img src={images.mail} style={{ height: 13 }} />
        </div>
        <span style={styles.label}>Compose</span>
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    width: 150,
    height: 35,
    borderRadius: 3,
    backgroundColor: '#BFBFBF',
    alignItems: 'center',
    cursor: 'pointer',
    paddingLeft: 15,
  },
  label: {
    color: 'white',
    fontSize: 14,
    fontWeight: 300,
  },
}
