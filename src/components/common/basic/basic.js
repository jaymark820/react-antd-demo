/*
 * Author: Jay Mark
 * Email: admin@majie.co
 * Website: http://majie.co
 */

'use strict';
import React from 'react'
import autoBind from 'react-autobind'

const reactMixin = require('react-mixin')
const EventEmitterMixin = require('react-event-emitter-mixin')

export default class Component extends React.Component {
  constructor(props) {
    super(props)
    autoBind(this)
  }
}

reactMixin(Component.prototype, EventEmitterMixin)
