import React from 'react'
import TheChannelList from '@components/TheChannelList'
import TheChatSection from '@components/TheChatSection'
import TheSidebar from '@components/TheSidebar'

const ChatPage = () => {
  const servers = [
    {
      id: 1,
      name: 'AbstractSingletonProxyFactoryBean',
      imageURL:
        'https://cdn.discordapp.com/icons/875871645439508591/2c4a4e4bc278baecae6a172bc7205404.png?size=96',
    },
    {
      id: 2,
      name: 'Clube dos mamaco frita ação',
      imageURL:
        'https://cdn.discordapp.com/icons/474983087562948618/c28c389c3c30f4271d599c9a72e2cac6.png?size=96',
    },
    {
      id: 3,
      name: 'APS - 4° semestre',
      imageURL:
        'https://cdn.discordapp.com/icons/755150140259434586/d3458fb6e299f0e1d0205a79d23ceb40.png?size=96',
    },
  ]

  return (
    <main className="flex max-h-screen">
      <TheSidebar servers={servers} />
      <TheChannelList />
      <TheChatSection />
    </main>
  )
}

export default ChatPage
