import Home from '@/pages/home'
import About from './pages/about'
import Contacts from './pages/contacts'
import Page404 from './pages/404Page'

export default [
  {
    name: 'Home',
    path: '/',
    alias: '/home',
    component: Home
  },
  {
    name: 'About',
    path: '/about',
    component: About
  },
  {
    name: 'Contacts',
    path: '/contacts',
    component: Contacts
  },
  {
    path: '*',
    component: Page404
  }
]
