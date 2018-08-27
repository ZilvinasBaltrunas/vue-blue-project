import Home from '@/pages/home'
import About from './pages/about'
import Contacts from './pages/contacts'
import Page404 from './pages/404Page'
import Education from './pages/education'
import Career from './pages/career'
import Knowledge from './pages/knowledge'

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
    component: About,
    children: [
      {
        name: 'Education',
        path: 'education',
        component: Education
      },
      {
        name: 'Career',
        path: 'career',
        component: Career
      },
      {
        name: 'Knowledge',
        path: 'knowledge',
        component: Knowledge
      }
    ]
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
