import React from 'react'

const TheChannelListHeadingInfo = ({ serverName }) => {
  return (
    <h1 className="py-2 px-4 font-bold text-lg text-white truncate">
      {serverName}
    </h1>
  )
}

export default TheChannelListHeadingInfo
