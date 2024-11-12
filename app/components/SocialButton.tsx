'use client'

import { ReactNode } from 'react'

export const SocialButton: React.FC<{
  link: string
  ariaLabel: string
  icon: ReactNode
}> = ({ link, ariaLabel, icon }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()
      e.currentTarget.classList.remove('animate-spin')
      window.open(link, '_blank')
    }}
  >
    {icon}
  </a>
)
