/*
 * Author: Jay Mark
 * Email: admin@majie.co
 * Website: http://majie.co
 */

'use strict';
import React from 'react'
import Basic from 'common/basic'
import './demo.less'

export default class Component extends Basic {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.eventEmitter('emit', 'msgFromDemo', "Hello main!")
    }, 3000)
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  render () {
    return (
      <div className="demo">
        This is the demo page.
      </div>
    )
  }
}
