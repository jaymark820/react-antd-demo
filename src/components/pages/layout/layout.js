/*
 * Author: Jay Mark
 * Email: admin@majie.co
 * Website: http://majie.co
 */

'use strict';
import React from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
const { SubMenu } = Menu
const { Header, Content, Sider } = Layout

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
      <Layout className="layout">
        <Header className="header">
          <div className="logo" />
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}>
              <SubMenu key="sub1" title={
                  <span><Icon type="user" />subnav 1</span>
              }>
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content style={{ background: '#fff', padding: 24, margin: "12px 0", minHeight: 280 }}>
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}
