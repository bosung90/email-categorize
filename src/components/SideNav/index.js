// @flow
import React, { Component } from 'react'
import { api, images } from '../../common'
import IconLabel from './IconLabel'
import ComposeButton from './ComposeButton'
import HorizontalLine from './HorizontalLine'

export default class SideNav extends Component {
  render() {
    return (
      <div style={styles.container}>
        <ComposeButton />
        <div style={styles.paddingL}>
          <div style={{ marginBottom: 15 }}>
            <span style={{ height: 31, color: 'white' }}>Messages</span>

          </div>
          <IconLabel image={images.inbox} label="Inbox" />
          <IconLabel image={images.star} label="Starred" />
          <IconLabel image={images.document} label="Drafts" />
          <IconLabel image={images.direction} label="Sent" />
        </div>
        <HorizontalLine />
        <div style={styles.paddingL}>
          <div style={{ marginTop: 15, marginBottom: 15 }}>

            <span style={{ height: 31, color: 'white' }}>Category</span>
          </div>
          <IconLabel image={images.categoryIcons[0]} label="Category 1" />
          <IconLabel image={images.categoryIcons[1]} label="Category 2" />
          <IconLabel image={images.categoryIcons[2]} label="Category 3" />
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
    backgroundColor: '#4A47A2',
    paddingTop: 14,
  },
  paddingL: {
    paddingLeft: 19,
  },
}
