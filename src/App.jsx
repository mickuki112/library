import React from 'react'
import './App.css'
import Home from './containers/Home/Home'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import library from './store/reducers/library'

const rootReducer = combineReducers({
	library,
})

export const store = createStore(rootReducer, applyMiddleware())

function App() {
	return (
		<div className='App'>
			<Provider store={store}>
				<Home />
			</Provider>
		</div>
	)
}

export default App
