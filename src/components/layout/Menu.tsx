import React, { useEffect, useRef, useState, useContext } from 'react'
import type { MenuProps } from 'antd'
import { Layout, Menu } from 'antd'
import styled from 'styled-components'
import Progress from '@/components/atoms/Progress'
import { useTurn } from '@/store/turn'

const { Sider } = Layout

const LayoutStyled: typeof Layout = styled(Layout)`
  min-height: 20vw;
  background: transparent;

  > aside {
    border-radius: 0 2rem 2rem 0;
  }

  .ant-layout-sider-children {
    display: flex;
    flex-direction: column;
    justify-content: center;

    > ul > li {
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #94e1ff20;
    }
  }
`
const StyledMenu: typeof Menu = styled(Menu)``

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

const MenuStats: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true)
  const turn = useTurn()

  const handleEndTurn = () => {
    turn.next()
  }

  const items: MenuItem[] = [
    getItem(
      '',
      '1',
      <Progress handleEndTurn={handleEndTurn} actionPoints={3} total={100} />
    ),
  ]

  const handleCollapse = (e) => {
    // setCollapsed(false)
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
        <StyledMenu
          theme='dark'
          defaultSelectedKeys={['1']}
          mode='inline'
          items={items}
        />
      </Sider>
    </LayoutStyled>
  )
}

export default MenuStats
