import React from 'react'

const TheChannelListChannelsSectionTextChannels = ({ textChannels }) => {
  return (
    <ul>
      {textChannels.map(channel => (
        <li
          className="mb-1 flex items-center gap-2 text-gray-400"
          key={channel.id}
        >
          <span className="text-xl font-semibold">#</span>
          <span className="lowercase">{channel.name}</span>
        </li>
      ))}
    </ul>
  )
}

export default TheChannelListChannelsSectionTextChannels
