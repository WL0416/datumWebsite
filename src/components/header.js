import React from "react"
import PropTypes from "prop-types"
// import { Link } from "gatsby"

import styles from "./header.module.scss"
import { Layout, Menu } from "antd"
import logo from "../images/logo.svg"

const { Header } = Layout
const { SubMenu } = Menu

const MyHeader = ({ siteTitle }) => (
  <>
    <div className={styles.logo}>
      <img src={logo} alt={siteTitle} />
    </div>
    <Header className={styles.headerBar}>
      <Menu
        className={styles.navs}
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
      >
        <Menu.Item key="home">Home</Menu.Item>
        <SubMenu title="About Datum" popupClassName={styles.pops}>
          <Menu.Item key="welcome">Welcome from CEO</Menu.Item>
          <Menu.Item key="welcome2">Welcome from CEO</Menu.Item>
          <Menu.Item key="welcome3">Welcome from CEO</Menu.Item>
          <Menu.Item key="welcome4">Welcome from CEO</Menu.Item>
          <Menu.Item key="welcome5">Welcome from CEO</Menu.Item>
        </SubMenu>
        <Menu.Item key="3">Courses</Menu.Item>
        <Menu.Item key="4">Admission</Menu.Item>
        <Menu.Item key="5">Student Life</Menu.Item>
        <Menu.Item key="6">Services</Menu.Item>
        <Menu.Item key="7">My Datum</Menu.Item>
        <Menu.Item key="8">Agent</Menu.Item>
        <Menu.Item key="9">Contact us</Menu.Item>
      </Menu>
    </Header>
  </>
)

MyHeader.propTypes = {
  siteTitle: PropTypes.string,
}

MyHeader.defaultProps = {
  siteTitle: `Datum College`,
}

export default MyHeader
