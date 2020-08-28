import React from 'react'
import {
  DiffComponent,
  NumberDiff,
  DiffAnnotationTooltip,
  useDiffAnnotationColor
} from '@sanity/field/diff'
import styles from '../shared/BlockSegmentStyles.css'
import {DiffLayout} from '../shared'

export const NumberFieldDiff: DiffComponent<NumberDiff> = ({diff}) => {
  const {fromValue, toValue} = diff
  const color = useDiffAnnotationColor(diff, [])
  const style = color ? {background: color.background, color: color.text} : {}

  return (
    <DiffAnnotationTooltip className={styles.root} diff={diff}>
      <DiffLayout
        renderFrom={
          fromValue && (
            <del className={`${styles.segment} ${styles.add}`} style={style}>
              {fromValue}
            </del>
          )
        }
        renderTo={
          toValue && (
            <ins className={`${styles.segment} ${styles.remove}`} style={style}>
              {toValue}
            </ins>
          )
        }
      />
    </DiffAnnotationTooltip>
  )
}
