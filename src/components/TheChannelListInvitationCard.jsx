import React from 'react'

import channelInvitationImage from '@assets/channel-invitation.svg'

const TheChannelListInvitationCard = () => {
  return (
    <div className="flex flex-col items-center text-center text-gray-300 text-sm">
      <img
        className="py-4"
        src={channelInvitationImage}
        alt="Vamos convidar alguns amigos"
      />
      <p>Uma aventura começa.</p>
      <p>Vamos adicionar alguns amigos</p>
      <button className="mt-4 py-2 px-4 bg-indigo-600 text-white rounded text-sm hover:brightness-90">
        Convidar pessoas
      </button>
    </div>
  )
}

export default TheChannelListInvitationCard
