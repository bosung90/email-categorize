// @flow
import React, { Component } from 'react'
import { api, images } from '../../common'
import IconLabel from './IconLabel'

export default class SideNav extends Component {
  render() {
    return (
      <div style={styles.container}>
        <span style={{ height: 31 }}>Messages</span>
        <IconLabel image={images.inbox} label="Inbox" />
        <IconLabel image={images.star} label="Starred" />
        <IconLabel image={images.document} label="Drafts" />
        <IconLabel image={images.direction} label="Sent" />

      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F9F9F9',
    paddingLeft: 19,
    paddingTop: 14,
  },
}
