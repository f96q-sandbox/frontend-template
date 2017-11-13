import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions'
import { getFeeds } from '../reducers'

import SideMenu from '../components/SideMenu'
import MainContent from '../components/MainContent'


const App = () => (
  <div className="App">
    <SideMenu />
    <MainContent />
  </div>
)

const mapStateToProps = (state) => {
  return {
    feeds: getFeeds(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(Actions, dispatch) }
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default connector(App)
