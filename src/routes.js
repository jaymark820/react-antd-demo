/*
 * Author: Jay Mark
 * Email: admin@majie.co
 * Website: http://majie.co
 */

import React, { PropTypes } from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import Layout from 'pages/layout'
import Home from 'pages/home'
import Login from 'pages/login'

const Routes = ({history}) => (
	<Router history={history}>
		<Route path="/" component={Login}/>
		<Route path="/home" component={Layout}>
			<IndexRoute component={Home} />
			<Route path="/home" component={Home}/>
		</Route>
	</Router>
)

Routes.propTypes = {
	history: PropTypes.any
}

export default Routes