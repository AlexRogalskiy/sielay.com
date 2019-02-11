/** @jsx jsx */
import * as React from 'react'
import { toggleSidebar } from '../store'
import { jsx, css } from '@emotion/core'
import { FaBars } from 'react-icons/fa'
import { scale } from '../utils/typography'
import { Link } from './Link'

const HEADER_LIST = `
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: stretch;
  align-items: stretch;
  list-style: none;
  font-family: Montserrat, sans-serif;
  padding: 1rem;
  margin: 0px;
  border-bottom: 1px solid black;

  & > li {
    margin-bottom: 0px;
  }
  & > li > a {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    align-items: stretch;
    padding: .5rem 1rem;
    height: 3rem;
  }
  & > li > a.active {
    color: black;
  }
  & > li > a > * {
    order: 0;
    flex: 0 1 auto;
    align-self: auto;
  }
`

export class HeaderMenu extends React.Component {
  constructor(props) {
    super(props)
    this.onSidebar = this.onSidebar.bind(this)
  }

  onSidebar() {
    const { dispatch } = this.props
    dispatch(toggleSidebar())
  }

  render() {
    const { items, pathname, theme } = this.props
    return (
      <header>
        <ul css={css(HEADER_LIST)} style={{ borderBottomColor: theme.shade, ...scale(0.5) }}>
          <li className="mobile-only">
            <a onClick={this.onSidebar}>
              <FaBars />
            </a>
          </li>
          <li>
            <a name="top" className="active">
              SIELAY
            </a>
          </li>
          {items.map(({ path, exact, iconOnly, Icon, name }, key) => {
            const active = exact ? pathname === path : pathname.startsWith(path)
            return (
              <li key={key} className="desktop-only">
                <Link path={path} key={path} className={active ? 'active' : ''}>
                  {iconOnly ? <Icon /> : name}
                </Link>
              </li>
            )
          })}
        </ul>
      </header>
    )
  }
}
