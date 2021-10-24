import React from 'react'
import TheSidebarIcon from './TheSidebarIcon'

const TheSidebar = ({ servers }) => {
  return (
    <nav className="flex flex-col w-[4.5rem] h-screen bg-discord-tertiary text-white">
      {servers.map(server => (
        <TheSidebarIcon server={server} key={server.id} />
      ))}
    </nav>
  )
}

export default TheSidebar
