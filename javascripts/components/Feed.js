import React from 'react'

const Feed = ({ feed }) => {
  return (
    <div className="Feed">
     <div className="Feed-title">{feed.title}</div>
     <div className="Feed-description">{feed.description}</div>
    </div>
  )
}

export default Feed
