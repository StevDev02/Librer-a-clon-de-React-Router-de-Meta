
import { Query } from "../../components/pages/Query"
import { AboutPage } from '../../components/pages/About'

export const EVENTS = {

    PUSHSTATE : 'pushstate',
    POPSTATE : 'popstate',

}

export const routes = [
    {
        path : '/search/:query',
        Component : Query
      }, {
        path : '/about',
        Component : AboutPage
      }
  ]

