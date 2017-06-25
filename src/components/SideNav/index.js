// @flow
import React, { Component } from 'react'
import { api, images } from '../../common'
import IconLabel from './IconLabel'

export default class SideNav extends Component {
  render() {
    return (
      <div style={styles.container}>
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
  },
}
