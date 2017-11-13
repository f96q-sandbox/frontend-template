import '../stylesheets/components/App.scss'
import '../stylesheets/components/MainContents.scss'
import '../stylesheets/components/SideMenu.scss'
import '../stylesheets/components/Feed.scss'
import '../stylesheets/components/Feeds.scss'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import App from './containers/App'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const store = createStore(
  reducer
)

render((
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>
), document.getElementsByClassName('js-app')[0])
