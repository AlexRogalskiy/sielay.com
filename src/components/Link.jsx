import * as React from 'react'
import { Link as GatsbyLink } from 'gatsby'

export const Link = ({ path, className, children, onClick }) =>
  path.startsWith('https://') ? (
    <a href={path} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ) : (
    <GatsbyLink to={path} key={path} className={className} onClick={onClick}>
      {children}
    </GatsbyLink>
  )
