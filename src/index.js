import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import { Router } from 'react-router'
import createHashHistory from 'history/createHashHistory'
import { syncHistoryWithStore } from 'mobx-react-router'

const hashHistory = createHashHistory()

import stores from './stores'
import App from './containers'

const history = syncHistoryWithStore(hashHistory, stores.routingStore)

ReactDOM.render(
  <Provider {...stores}>
    <Router history={history}>
      <App/>
    </Router>
  </Provider>
  , document.getElementById('45118caa-2c77-49d9-a293-4ce25d37c43c'))
