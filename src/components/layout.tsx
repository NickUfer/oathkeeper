import React, { ReactNode } from 'react'

// DO NOT CHANGE THE ORDER OF THESE
import 'normalize.css'
import '../styles/themes/default.css'
import '../styles/global.css'
import '../styles/grid.css'
import '../styles/typography.css'
// DO NOT CHANGE THE ORDER OF THESE

import { Menu, IconMenu } from './header'
import Header from './header'
import Announcement from './announcement'
import Footer from './footer'

const defaultMenu: Menu = [
  { title: 'Docs', href: '/docs' },
  { title: 'Blog', path: '/blog' },
  { title: 'Jobs', href: 'https://github.com/ory/jobs' },
]

const defaultIconMenu = ({
  githubLink = 'https://github.com/ory',
}): IconMenu => [
  { title: 'Chat', href: 'https://www.ory.sh/chat' },
  { title: 'Forum', href: 'https://community.ory.sh/' },
  { title: 'GitHub', href: githubLink },
]

const Layout = ({
  children,
  menu = defaultMenu,
  icons = defaultIconMenu,
  announcement,
  appendix = '',
  theme = 'default',
  githubLink,
}: {
  children: ReactNode
  menu?: Menu
  icons?: typeof defaultIconMenu
  announcement?: ReactNode
  theme?: string
  appendix?: string
  githubLink?: string
}) => (
  <div className={`theme-${theme}`}>
    {announcement ? <Announcement>{announcement}</Announcement> : null}
    <Header appendix={appendix} menu={menu} icons={icons({ githubLink })} />
    <main>{children}</main>
    <Footer />
  </div>
)

export default Layout
