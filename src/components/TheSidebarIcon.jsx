import React from 'react'
import TheSidebarIconTooltip from './TheSidebarIconTooltip'

const TheSidebarIcon = ({ server }) => {
  return (
    <div className="relative group">
      <img
        className="flex items-center justify-center h-12 w-12 my-2 mx-auto shadow-lg bg-discord-secondary rounded-3xl hover:rounded-xl group transition-all ease-linear"
        src={server.imageURL}
        alt={server.name}
      />
      <TheSidebarIconTooltip name={server.name} />
    </div>
  )
}

export default TheSidebarIcon
