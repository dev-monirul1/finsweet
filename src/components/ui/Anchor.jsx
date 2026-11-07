import React from 'react'

const Anchor = ({ href, children, className }) => {
  return (
    <a href={href} className={className}>
        {children}
    </a>
  )
}

export default Anchor