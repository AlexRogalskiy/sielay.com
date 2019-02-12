/** @jsx jsx */
import * as React from 'react'
import '../store'
import { jsx, css } from '@emotion/core'
import { Link } from './Link'
import { scale, rhythm } from '../utils/typography'

const STYLE = `
  position: absolute;
  top: 5rem;
  height: calc(100% - 5rem);
  width: 200px;
  background: white;
  transition: transform .5s;
  box-shadow: 1px 1px 1px 0px rgba(0,0,0,0.25);
  z-index: 1000;
  & > ul {
    font-family: Montserrat, sans-serif;
    list-style: none;
    margin: 0px;
    padding: 0px;
  }
  & > ul > li {
    display: block;
    margin-bottom: 0px;
  }
  & > ul > li > a {
    display: block;
    padding: 1em 1em 0;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;
  }
  & > ul > li > a > * {
    order: 0;
    flex: 0 1 auto;
    align-self: auto;
    margin-right: .5rem;
  }
  & > ul > li > a > span {
    flex: 1 1 auto;
  }
`

export const SidebarMenu = ({ items, visible }) => {
  return (
    <nav
      className="mobile-only"
      css={css(STYLE)}
      style={{
        transform: `translate3d(${visible ? 0 : '-100%'}, 0, 0)`,
        ...scale(0.7),
      }}
    >
      <ul>
        {items.map(({ path, active, name, Icon }, key) => {
          return (
            <li key={key}>
              <Link path={path} key={path} className={active ? 'active' : ''}>
                <Icon />
                <span>{name}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
