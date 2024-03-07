import React, { ReactNode } from 'react'

type ListWrapperProps = {
  children: ReactNode
}

const ListWrapper = ({ children }: ListWrapperProps) => {
  return <li className="shrink-0 h-full w-[272px] select-none">{children}</li>
}

export default ListWrapper
