import { objectEquals } from './objects'

export const getLastItem = source => source[source.length - 1]

export const groupMessages = messages => {
  return messages.reduce((accumulator, item) => {
    const current = getLastItem(accumulator)

    if (current && objectEquals(current.user, item.user)) {
      const messages = current.messages || []
      messages.push({
        id: item.id,
        text: item.text,
      })

      current.messages = messages

      return accumulator
    }

    return [
      ...accumulator,
      {
        user: item.user,
        messages: [
          {
            id: item.id,
            text: item.text,
            createdAt: item.createdAt,
          },
        ],
      },
    ]
  }, [])
}
