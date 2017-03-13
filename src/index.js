/*
 * Author: Jay Mark
 * Email: admin@majie.co
 * Website: http://majie.co
 */

import React from 'react'
import ReactDOM, { render } from 'react-dom'
import { browserHistory } from 'react-router'

import Routes from './routes'
import './resources/css/index.less'

const contentDiv = document.createElement("div")
document.body.appendChild(contentDiv)

ReactDOM.render(<Routes history={browserHistory} />, contentDiv)
