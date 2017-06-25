// @flow
import React from 'react'

type Props = {
  image: string,
  label: string,
}

export default (props: Props) => {
  return (
    <div>
      <img style={styles.iconImage} src={props.image} />
      <span>{props.label}</span>
    </div>
  )
}

const styles = {
  iconImage: {
    height: 13,
  },
}
