import React from "react"
import "antd/dist/antd.css"

import MyLayout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
// import ComingSoon from "../components/coming"

import { Card, Row, Col, Typography } from "antd"
import styles from "./index.module.scss"
import block1 from "../images/blockpic1.gif"
import block2 from "../images/blockpic2.gif"
import block3 from "../images/blockpic3.gif"
import block4 from "../images/blockpic4.gif"
import block5 from "../images/blockpic5.gif"
import block6 from "../images/blockpic6.gif"

const { Title } = Typography

const IndexPage = () => (
  // <div>
  //   <ComingSoon></ComingSoon>
  // </div>
  <MyLayout>
    <SEO title="Home" />
    <div className={styles.cards}>
      <Row justify="center" gutter={[0, 36]} className={styles.siteWelcome}>
        <Title underline={true}>Welcome to DATUM College!</Title>
      </Row>
      <Row justify="center" gutter={[24, 24]}>
        <Col md={7} sm={10} xs={20}>
          <Card
            hoverable
            title={<strong>Welcome from CEO</strong>}
            cover={<img alt="datum" src={block1}></img>}
            align="center"
          ></Card>
        </Col>
        <Col md={7} sm={10} xs={20}>
          <Card
            hoverable
            title={<strong>Find a Course</strong>}
            cover={<img alt="datum" src={block2}></img>}
            align="center"
          ></Card>
        </Col>
        <Col md={7} sm={10} xs={20}>
          <Card
            hoverable
            title={<strong>Apply to Datum</strong>}
            cover={<img alt="datum" src={block3}></img>}
            align="center"
          ></Card>
        </Col>
        {/* </Row>
      <Row justify="center" gutter={[24, 24]}> */}
        <Col md={7} sm={10} xs={20}>
          <Card
            hoverable
            title={<strong>Application Form</strong>}
            cover={<img alt="datum" src={block4}></img>}
            align="center"
          ></Card>
        </Col>
        <Col md={7} sm={10} xs={20}>
          <Card
            hoverable
            title={<strong>Complain & Appeal</strong>}
            cover={<img alt="datum" src={block5}></img>}
            align="center"
          ></Card>
        </Col>
        <Col md={7} sm={10} xs={20}>
          <Card
            hoverable
            title={<strong>Why Datum?</strong>}
            cover={<img alt="datum" src={block6}></img>}
            align="center"
          ></Card>
        </Col>
      </Row>
    </div>
  </MyLayout>
)

export default IndexPage
