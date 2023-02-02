import React, { useEffect, useRef, useState } from 'react'
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Layout, Menu } from 'antd'
import styled from 'styled-components'

const { Sider } = Layout

const LayoutStyled: typeof Layout = styled(Layout)`
  min-height: 80vh;
`

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem
}

const items: MenuItem[] = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [
    getItem('Team 1', '6'),
    getItem('Team 2', '8'),
  ]),
  getItem('Files', '9', <FileOutlined />),
]

const MenuStats: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true)

  const handleCollapse = (e) => {
    setCollapsed(false)
  }

  const ref = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setCollapsed(true)
      }
    }
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [])

  return (
    <LayoutStyled ref={ref} onClick={handleCollapse}>
      {/* <Comp /> */}
      <Sider
        collapsedWidth={'45px'}
        collapsible
        trigger={null}
        collapsed={collapsed}
      >
        <Menu
          theme='dark'
          defaultSelectedKeys={['1']}
          mode='inline'
          items={items}
        />
      </Sider>
    </LayoutStyled>
  )
}

const Comp = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: '#ff36bf50',
      }}
    ></div>
  )
}

export default MenuStats
