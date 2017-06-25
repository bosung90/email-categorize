// @flow
import React from 'react'

type Props = {
  image: string,
  label: string,
}

export default (props: Props) => {
  return (
    <div style={styles.container}>
      <div style={styles.iconContainer}>
        <img style={styles.iconImage} src={props.image} />
      </div>
      <span style={{ color: 'white', fontWeight: 300 }}>{props.label}</span>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    height: 31,
    cursor: 'pointer',
  },
  iconContainer: {
    minWidth: 30,
  },
  iconImage: {
    height: 13,
  },
}
