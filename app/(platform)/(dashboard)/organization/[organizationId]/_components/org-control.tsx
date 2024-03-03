'use client'

import { useOrganizationList } from '@clerk/nextjs'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'

interface OrgControlProps {}

export const OrgControl: React.FC<OrgControlProps> = () => {
  const params = useParams()
  const { setActive } = useOrganizationList()

  useEffect(() => {
    if (!setActive) return

    setActive({
      organization: params.organizationId as string,
    })
  }, [setActive, params.organizationId])

  return null
}
