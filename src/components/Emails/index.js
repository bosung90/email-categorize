// @flow
import React, { Component } from 'react'
import { api, images } from '../../common'
import EmailLine from './EmailLine'
import { emailsObj } from '../../Emails'

export default class Emails extends Component {
  render() {
    return (
      <div style={styles.container}>
        {emailsObj.documents.map(document => {
          return <EmailLine content={document.text} />
        })}
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F4F2F2',
    width: 400,
  },
}
