import React from 'react'

import { Card } from '@prisma/client'
import { Draggable } from '@hello-pangea/dnd'
import { useCardModal } from '@/hooks/use-card-modal'

type CardItemProps = {
  data: Card
  index: number
}

const CardItem = ({ data, index }: CardItemProps) => {
  const onOpen = useCardModal((state) => state.onOpen)

  return (
    <Draggable draggableId={data.id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          onClick={() => onOpen(data.id)}
          ref={provided.innerRef}
          role="button"
          className="truncate border-2 border-transparent hover:border-black py-2 px-3 text-sm bg-white rounded-md shadow-sm"
        >
          {data.title}
        </div>
      )}
    </Draggable>
  )
}

export default CardItem
