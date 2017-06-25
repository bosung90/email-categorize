// @flow
import React, { Component } from 'react'
import { api, images } from '../../common'

type Props = {
  content: string,
  onClick: Function,
  tags: [string],
  id: string,
  bgColor: boolean,
}

export default class EmailLine extends Component {
  props: Props
  state = {
    isStarred: false,
  }
  render() {
    return (
      <div
        style={this.props.bgColor ? styles.containerWhite : styles.container}
      >
        <input type="checkbox" />
        <div style={styles.content}>
          <span
            onClick={() =>
              this.props.onClick({
                id: this.props.id,
                content: this.props.content,
              })}
            style={{ cursor: 'pointer', color: '#8E8E8E' }}
          >
            {this.props.content.substring(0, 150)}
          </span>
        </div>
        <span style={{ paddingTop: 5, paddingRight: 13, color: '#8E8E8E' }}>
          Aug, 4
        </span>
        <span style={{ minWidth: 33 }}>
          <img
            onClick={() => this.setState({ isStarred: !this.state.isStarred })}
            src={this.state.isStarred ? images.starSelected : images.star}
            style={{
              cursor: 'pointer',
              height: 16,
              paddingRight: 16,
              paddingTop: 4,
            }}
          />
        </span>

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
  containerWhite: {
    display: 'flex',
    flexDirection: 'row',
    height: 90,
    paddingTop: 15,
    paddingLeft: 15,
    marginBottom: 5,
    backgroundColor: 'white',
  },
  content: {
    display: 'flex',
    flex: 1,
    paddingTop: 4,
    paddingLeft: 13,
    paddingRight: 4,
  },
}
