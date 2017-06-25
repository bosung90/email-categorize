// @flow
import React, { Component } from 'react'
import { api, images } from '../../common'

export default class EmailLine extends Component {
  render() {
    return (
      <div style={styles.container}>
        <input type="checkbox" />
        <div style={styles.content}>
          <span style={{ color: '#8E8E8E' }}>
            We are opening up ProtonMail to everybody!{' '}
          </span>
        </div>
        <span style={{ paddingTop: 5, paddingRight: 13, color: '#8E8E8E' }}>
          Aug, 4
        </span>
        <img
          src={images.star}
          style={{ height: 16, paddingRight: 16, paddingTop: 4 }}
        />
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: 90,
    paddingTop: 15,
    paddingLeft: 15,
    marginBottom: 5,
  },
  content: {
    display: 'flex',
    flex: 1,
    paddingTop: 4,
    paddingLeft: 13,
    paddingRight: 4,
  },
}
