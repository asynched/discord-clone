import React from 'react'
import TheChannelListChannelsSectionAudioChannels from './TheChannelListChannelsSectionAudioChannels'
import TheChannelListChannelsSectionTextChannels from './TheChannelListChannelsSectionTextChannels'

const TheChannelListChannelsSection = ({ channels }) => {
  return (
    <div>
      {channels.map(channel => (
        <div className="py-2 px-4" key={channel.id}>
          <div>
            <h1 className="uppercase font-bold text-gray-300">
              {channel.label}
            </h1>
          </div>
          <TheChannelListChannelsSectionTextChannels
            textChannels={channel.textChannels}
          />
          <TheChannelListChannelsSectionAudioChannels
            audioChannels={channel.audioChannels}
          />
        </div>
      ))}
    </div>
  )
}

export default TheChannelListChannelsSection
