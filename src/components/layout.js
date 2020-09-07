import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import MyHeader from "./header"
import styles from "./layout.module.scss"
import { Layout } from "antd"

const { Content, Footer } = Layout

const MyLayout = ({ children }) => {
  return (
    <>
      <MyHeader />
      <Content className={styles.content}>{children}</Content>
      <Footer className={styles.footer}>
        © {new Date().getFullYear()} Datum College
      </Footer>
    </>
  )
}

MyLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MyLayout
