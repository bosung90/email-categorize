// @flow
import React, { Component } from 'react'
import { api, images } from '../../common'
import EmailLine from './EmailLine'
import { emailsObj } from '../../Emails'

type Props = {
  responseObj: api.TextAnalyticsResponse,
}

export default class Emails extends Component {
  props: Props
  state = {
    selectedId: '0',
    selectedContent: '',
  }
  render() {
    const keyPhrases =
      this.props.responseObj &&
      this.props.responseObj[this.state.selectedId] &&
      this.props.responseObj[this.state.selectedId].keyPhrases.slice(0, 5)
    return (
      <div style={styles.container}>
        <div style={styles.emailList}>
          {emailsObj.documents.map((document, index) => {
            return (
              <EmailLine
                id={document.id}
                tags={
                  this.props.responseObj &&
                  this.props.responseObj[document.id] &&
                  this.props.responseObj[document.id].keyPhrases
                }
                bgColor={index % 2 === 0}
                content={document.text}
                onClick={({ id, content }) =>
                  this.setState({ selectedId: id, selectedContent: content })}
              />
            )
          })}
        </div>

        <div style={styles.selectedEmailContent}>
          <div
            style={{
              height: 56,
              paddingRight: 18,
              display: 'flex',
              backgroundColor: '#544FB6',
              alignItems: 'center',
            }}
          >
            <img
              style={{
                marginLeft: 63,
                marginRight: 11,
                height: 31,
                cursor: 'pointer',
              }}
              src={images.folderButton}
            />
            <img
              style={{ height: 31, cursor: 'pointer' }}
              src={images.deleteButton}
            />
            <div style={{ flex: 1, display: 'flex' }} />
            <img
              style={{ height: 31, cursor: 'pointer' }}
              src={images.arrowButtons}
            />
          </div>
          <div
            style={{
              alignItems: 'center',
              paddingLeft: 57,
              height: 117,
              display: 'flex',
              backgroundColor: '#817DD0',
              justifyContent: 'space-between',
              paddingRight: 57,
            }}
          >
            <span style={{ fontSize: 25, color: 'white' }}>
              {this.state.selectedContent.substr(0, 50) + '...'}
            </span>
            <img style={{ cursor: 'pointer' }} src={images.star} />
          </div>
          <div style={{ padding: 56 }}>
            <span style={styles.contentStyle}>
              {this.state.selectedContent}
            </span>
            <div style={{ marginTop: 30 }}>
              {keyPhrases &&
                keyPhrases.map(keyPhrase => {
                  return (
                    <span
                      style={{
                        padding: 10,
                        backgroundColor: 'pink',
                        marginRight: 12,
                      }}
                    >
                      {keyPhrase}
                    </span>
                  )
                })}
            </div>

          </div>
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#F4F2F2',
  },
  emailList: {
    display: 'flex',
    flexDirection: 'column',
    width: 400,
  },
  selectedEmailContent: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  contentStyle: {
    color: 'black',
  },
}
