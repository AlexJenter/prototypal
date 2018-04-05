import React from 'react';
import Link from 'gatsby-link'

export default ({ items }) => {
  return (
    <nav>
      {Object
        .entries(items)
        .map(([ slug, x ]) => (
          <li key={slug}>
            <Link to={`/proto/${slug}`}>{x.title}</Link>
          </li>
        ))
      }
    </nav>
  )
}
