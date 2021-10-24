import React from 'react'

const TheSidebarIconTooltip = ({ name }) => {
  return (
    <div className="absolute p-2 ml-5 min-w-max top-4 left-16 rounded shadow-lg transition-all duration-300 bg-discord-secondary origin-left scale-0 group-hover:scale-100">
      <p className="break-all">{name}</p>
    </div>
  )
}

export default TheSidebarIconTooltip
