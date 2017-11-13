import React from 'react'
import Feeds from './Feed'

const Feeds = ({ feeds }) => {
  return (
    <div className="Feeds">
      {feeds.map(feed => {
        return (
          <Feed feed={feed} />
        )
      })}
    </div>
  )
}

export default Feeds
