import React from 'react'
import { Provider } from 'react-redux'
import store from './store'

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>EDmanager</h1>
        <Players />
        <SelectedTeam />
      </div>
    </Provider>
  )
}

export default App