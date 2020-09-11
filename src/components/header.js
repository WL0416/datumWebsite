import React from "react"
import PropTypes from "prop-types"
import { Link, graphql, useStaticQuery } from "gatsby"

import styles from "./header.module.scss"
import { Layout, Menu } from "antd"
import logo from "../images/logo.svg"

const { Header } = Layout
const { SubMenu } = Menu

const MyHeader = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulMenu {
        nodes {
          content {
            menu {
              text
              slug
              children {
                text
                slug
              }
            }
          }
        }
      }
    }
  `)

  const menuData = data.allContentfulMenu.nodes[0].content.menu

  return (
    <>
      <div className={styles.logo}>
        <img src={logo} alt={siteTitle} />
      </div>
      <Header className={styles.headerBar}>
        <Menu
          className={styles.navs}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={menuData[0].slug}
        >
          {menuData.map(menuItem => {
            if (menuItem.children.length === 0) {
              return (
                <Menu.Item key={menuItem.slug}>
                  <Link to={menuItem.slug}></Link>
                  {menuItem.text}
                </Menu.Item>
              )
            } else {
              return (
                <SubMenu title={menuItem.text} popupClassName={styles.pops}>
                  {menuItem.children.map(child => {
                    return (
                      <Menu.Item key={child.slug}>
                        <Link to={child.slug}></Link>
                        {child.text}
                      </Menu.Item>
                    )
                  })}
                </SubMenu>
              )
            }
          })}
        </Menu>
      </Header>
    </>
  )
}

MyHeader.propTypes = {
  siteTitle: PropTypes.string,
}

MyHeader.defaultProps = {
  siteTitle: `Datum College`,
}

export default MyHeader
