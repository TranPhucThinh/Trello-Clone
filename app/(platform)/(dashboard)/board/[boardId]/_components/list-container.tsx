'use client'

import { ListWithCards } from '@/types'

import ListForm from './list-form'

interface ListContainerProps {
  data: ListWithCards[]
  boardId: string
}

const ListContainer = ({ data, boardId }: ListContainerProps) => {
  return (
    <ol>
      <ListForm />
    </ol>
  )
}

export default ListContainer
