import React from 'react'
import { VolumeUpIcon } from '@heroicons/react/solid'

const TheChannelListChannelsSectionAudioChannels = ({ audioChannels }) => {
  return (
    <ul>
      {audioChannels.map(channel => (
        <li
          className="mb-2 flex items-center gap-2 text-gray-400"
          key={channel.id}
        >
          <VolumeUpIcon className="mt-1 w-4 h-4" />
          <span className="lowercase">{channel.name}</span>
        </li>
      ))}
    </ul>
  )
}

export default TheChannelListChannelsSectionAudioChannels
