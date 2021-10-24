import React from 'react'
import TheChannelListHeadingInfo from './TheChannelListHeadingInfo'
import TheChannelListInvitationCard from './TheChannelListInvitationCard'
import TheChannelListChannelsSection from './TheChannelListChannelsSection'

const TheChannelList = () => {
  const info = {
    id: 1,
    name: 'AbstractSingletonProxyFactoryBean',
    channels: [
      {
        id: 1,
        label: 'Main',
        textChannels: [
          {
            id: 1,
            name: 'geral',
          },
          {
            id: 2,
            name: 'bash',
          },
          {
            id: 3,
            name: 'avisos',
          },
          {
            id: 4,
            name: 'code-drops',
          },
        ],
        audioChannels: [],
      },
      {
        id: 2,
        label: 'Desenvolvimento',
        textChannels: [
          {
            id: 1,
            name: 'Projetos-1',
          },
          {
            id: 2,
            name: 'projetos-2',
          },
        ],
        audioChannels: [
          {
            id: 3,
            name: 'Projetos 1',
          },
          {
            id: 4,
            name: 'Projetos 2',
          },
        ],
      },
    ],
  }

  return (
    <section className=" bg-discord-secondary w-64">
      <TheChannelListHeadingInfo serverName={info.name} />
      <hr className="border-discord-tertiary" />
      <TheChannelListInvitationCard />
      <hr className="mt-4 border-discord-accent" />
      <TheChannelListChannelsSection channels={info.channels} />
    </section>
  )
}

export default TheChannelList
