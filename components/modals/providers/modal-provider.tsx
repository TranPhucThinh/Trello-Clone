'use client'

import { useEffect, useState } from 'react'

import { CardModal } from '../card-modal'

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false)

  // Ensures component is and everything inside is only render on the client
  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return
  }

  return <CardModal />
}
