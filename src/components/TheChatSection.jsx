import React from 'react'
import { groupMessages } from '@utils/arrays'

import defaultAvatar from '@assets/default-avatar.png'

const TheChatSection = () => {
  const messages = [
    {
      id: 1,
      text: 'E ai galera!',
      createdAt: '27/08/2021',
      user: {
        id: 1,
        name: 'Eder Lima',
        status: '10010111',
        imageURL:
          'https://cdn.discordapp.com/avatars/484713335980294145/8dc40810b588b536a245fcb482ce5756.png?size=80',
      },
    },
    {
      id: 2,
      text: 'Clonezinho do Discord no ar',
      createdAt: '27/08/2021',
      user: {
        id: 1,
        name: 'Eder Lima',
        status: '10010111',
        imageURL:
          'https://cdn.discordapp.com/avatars/484713335980294145/8dc40810b588b536a245fcb482ce5756.png?size=80',
      },
    },
    {
      id: 3,
      text: 'Bah meu!',
      createdAt: '27/08/2021',
      user: {
        id: 2,
        name: 'Matheus A.',
        status: '.aiai',
        imageURL:
          'https://cdn.discordapp.com/avatars/334464322619179031/156d3d99e6feb82186a47876bd3c9748.png?size=80',
      },
    },
    {
      id: 4,
      text: 'Massinha né',
      createdAt: '28/08/2021',
      user: {
        id: 1,
        name: 'Eder Lima',
        status: '10010111',
        imageURL:
          'https://cdn.discordapp.com/avatars/484713335980294145/8dc40810b588b536a245fcb482ce5756.png?size=80',
      },
    },
    {
      id: 5,
      text: 'Eai meu',
      createdAt: '28/08/2021',
      user: {
        id: 3,
        name: 'lucazpinheiro',
        status: "Just chillin'",
        imageURL:
          'https://cdn.discordapp.com/avatars/571831426861760522/54c19796462e67d3f47a2f6e373c2126.png?size=80',
      },
    },
    {
      id: 6,
      text: 'Salve galera',
      createdAt: '28/08/2021',
      user: {
        id: 4,
        name: 'Psiu',
        status: 'Little sogra 😎',
        imageURL:
          'https://cdn.discordapp.com/avatars/494674791320518666/f4bed4dc9260f8cbb9806ffd881a2d2e.png?size=80',
      },
    },
    {
      id: 7,
      text: 'Como vocês estão?',
      createdAt: '28/08/2021',
      user: {
        id: 5,
        name: 'matheusLopes',
        status: 'Bah mine',
        imageURL: defaultAvatar,
      },
    },
    {
      id: 8,
      text: 'Tá um frio aqui em PORTO né meu',
      createdAt: '28/08/2021',
      user: {
        id: 5,
        name: 'matheusLopes',
        status: 'Bah mine',
        imageURL: defaultAvatar,
      },
    },
  ]

  const users = messages
    .map(message => message.user)
    .reduce(
      (acc, item) =>
        acc.map(e => e.id).includes(item.id) ? acc : [...acc, item],
      []
    )

  const groupedMessages = groupMessages([...messages])

  return (
    <section className="bg-discord-primary flex-1">
      {/* Heading info */}
      <div className="px-4 h-11 flex items-center text-white text font-bold">
        <span className="text-2xl text-gray-400">#</span>
        <span className="ml-2">geral</span>
      </div>
      <hr className="border-discord-tertiary" />
      {/* Chat messages */}
      <div className="flex">
        {/* Messages list */}
        <div className="h-[calc(100vh-2.9rem)] flex-1">
          <div className="relative pb-10 h-full overflow-auto">
            {groupedMessages.map((message, index) => (
              <div
                className="py-4 px-4 flex gap-4 text-white"
                key={message.messages[0].id}
              >
                <img
                  className="w-12 h-12 rounded-full "
                  src={message.user.imageURL}
                  alt={message.user.name}
                />
                <div>
                  <p className="font-semibold">
                    {message.user.name}{' '}
                    <span className="text-xs text-gray-500">
                      {message.messages[0].createdAt}
                    </span>
                  </p>
                  {message.messages.map(message => (
                    <p key={message.id}>{message.text}</p>
                  ))}
                </div>
              </div>
            ))}
            <div className="fixed bottom-0 left-[20.5rem] right-60 p-2 m-2 bg-discord-accent rounded">
              <input
                type="text"
                className="bg-discord-accent text-gray-400 w-full outline-none"
                placeholder="Conversar em geral"
              />
            </div>
          </div>
        </div>
        <div className="p-4 w-60 bg-discord-secondary">
          <h1 className="mb-4 text-gray-400 text-sm font-semibold uppercase">
            Disponível — {users.length}
          </h1>
          <ul>
            {users.map(user => (
              <li key={user.id} className="mb-4 flex items-start gap-2">
                <div className="relative">
                  <img
                    className="w-8 h-8 rounded-full"
                    src={user.imageURL}
                    alt={user.name}
                  />
                  <div className="w-3 h-3 border-2 border-discord-secondary bg-green-500 rounded-full absolute right-0 bottom-0"></div>
                </div>
                <div className="text-gray-400">
                  <p className="leading-none">{user.name}</p>
                  <p className="text-xs">{user.status}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default TheChatSection
