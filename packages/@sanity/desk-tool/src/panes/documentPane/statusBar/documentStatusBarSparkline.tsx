import React from 'react'
import Badge from 'part:@sanity/components/badges/default'
import {RenderBadgeCollectionState} from 'part:@sanity/base/actions/utils'
import SyncIcon from 'part:@sanity/base/sync-icon'
import {useSyncState} from '@sanity/react-hooks'
import TimeAgo from '../../../components/TimeAgo'
import {useDocumentPane} from '../hooks'

import styles from './documentStatusBarSparkline.css'

// TODO create icon
const BadgeIcon = () => {
  const strokeStyle = {
    stroke: 'currentColor',
    strokeWidth: 1
  }

  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.5 3.5L3.5 3.5L3.5 8.5L9 14L14 9L8.5 3.5Z" style={strokeStyle} />
      <circle cx="7" cy="7" r="1" style={strokeStyle} />
    </svg>
  )
}

export interface Badge {
  label: string
  title: string
  color: 'success' | 'failure' | 'warning'
  icon?: any
}

interface Props {
  states: Badge[]
  disabled: boolean
  lastUpdated: string | undefined | null
}

function DocumentStatusBarSparklineInner({states, disabled, lastUpdated}: Props) {
  const {documentId} = useDocumentPane()
  const lastState = states[states.length - 1]
  const syncState = useSyncState(documentId)

  if (states.length === 0) {
    return null
  }

  return (
    <div className={styles.root} data-disabled={disabled}>
      <div className={styles.statusBadges}>
        {states.map((badge, badgeIndex, arr) => {
          const showSyncIndicator = badgeIndex === arr.length - 1 && syncState.isSyncing
          const Icon = showSyncIndicator ? SyncIcon : badge.icon
          return (
            <div
              key={String(badgeIndex)}
              className={styles.badge}
              data-color={badge.color}
              title={badge.title}
            >
              <span className={`${styles.icon} ${showSyncIndicator ? styles.isSyncing : ''}`}>
                {Icon ? <Icon /> : <BadgeIcon />}
              </span>
            </div>
          )
        })}
        <span className={styles.sparkline} />
      </div>
      <div className={styles.statusDetails}>
        <div className={styles.label}>{lastState.label}</div>
        {lastUpdated && <TimeAgo time={lastUpdated} />}
      </div>
    </div>
  )
}

export function DocumentStatusBarSparkline(props: {
  badges: Badge[]
  editState: any
  disabled: boolean
  lastUpdated: string | undefined | null
}) {
  return props.badges ? (
    <RenderBadgeCollectionState
      component={DocumentStatusBarSparklineInner}
      badges={props.badges}
      badgeProps={props.editState}
      disabled={props.disabled}
      lastUpdated={props.lastUpdated}
    />
  ) : null
}
