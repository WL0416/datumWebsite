import React from "react"
import SEO from "../components/seo"
import MyLayout from "../components/layout"

const Subpage = ({ pageContext }) => {
  return (
    <MyLayout>
      <SEO title="Home" />
      {pageContext.content}
    </MyLayout>
  )
}

export default Subpage
