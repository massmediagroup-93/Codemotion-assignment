import React from 'react'
import classnames from 'classnames'
import { getRandomKey } from 'helpers/get-random-key'
import styles from './loader.module.scss'

const Loader = ({ isCentered = false }) => (
  <div className={classnames(styles.loader, { [styles.loader_centered]: isCentered })}>
    {Array(12).fill(null).map((el, i) => (
      <div key={getRandomKey()} className={classnames(styles.loader__child, styles[`loader__circle-${i + 1}`])} />
    ))}
  </div>
)

export default Loader
