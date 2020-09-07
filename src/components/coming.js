import React from "react"
import logo from "../images/logo.svg"
import styles from "./coming.module.scss"
import { Typography } from "antd"

const { Paragraph } = Typography

const ComingSoon = () => (
  <div className={styles.container}>
    {" "}
    <img className={styles.logo} src={logo} alt="" />
    <Paragraph className={styles.text} level={2} strong={true}>
      We are under construction, coming soon...
    </Paragraph>
  </div>
)

export default ComingSoon
