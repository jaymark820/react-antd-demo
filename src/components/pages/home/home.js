/*
 * Author: Jay Mark
 * Email: admin@majie.co
 * Website: http://majie.co
 */

'use strict';
import React from 'react'
import Basic from 'common/basic'
import './home.less'

import Demo from 'common/demo'

export default class Component extends Basic {
  constructor(props) {
    super(props)

    this.state = {
      msg: ''
    }
  }

  _bindEvts () {
    this.eventEmitter('on', 'msgFromDemo', (msg) => {
      this.setState({ msg })
    })
  }

  componentDidMount() {
    this._bindEvts()
  }

  componentWillUnmount() {
    
  }

  render () {
    return (
      <div className="home">
        <Demo />
        {this.state.msg}
      </div>
    )
  }
}
