/*
 * Author: Jay Mark
 * Email: admin@majie.co
 * Website: http://majie.co
 */

'use strict';
import React from 'react'
import Basic from 'common/basic'
import './layout.less'

export default class Component extends Basic {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    
  }

  componentWillUnmount() {
    
  }

  render () {
    return (
      <div className="layout">
        This is layout menu
        {this.props.children}
      </div>
    )
  }
}
