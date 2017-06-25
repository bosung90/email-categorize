// @flow
import React, { Component } from 'react'
import { api, images } from '../../common'
import IconLabel from './IconLabel'
import HorizontalLine from './HorizontalLine'
import CategoryLabel from './CategoryLabel'

export default class SideNav extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.paddingL}>
          <span style={{ height: 31 }}>Messages</span>
          <IconLabel image={images.inbox} label="Inbox" />
          <IconLabel image={images.star} label="Starred" />
          <IconLabel image={images.document} label="Drafts" />
          <IconLabel image={images.direction} label="Sent" />
        </div>
        <HorizontalLine />
        <div style={styles.paddingL}>
          <CategoryLabel />
          <span style={{ height: 31 }}>Category</span>
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
    backgroundColor: '#F9F9F9',
    paddingTop: 14,
  },
  paddingL: {
    paddingLeft: 19,
  },
}
