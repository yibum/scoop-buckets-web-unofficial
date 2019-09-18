import React from "react"
import Moment from "react-moment"
// import { css } from "@emotion/core"
import styled from "@emotion/styled"

import Header from "../components/header"
import Footer from "../components/footer"

const Span = styled.span`
  margin-left: 5px;
  margin-right: 5px;
`

export default ({ pageContext: { allApps, mainCount, extraCount, lastUpdatedAt } }) => (
  <div>
    <Header />
    <div><a href="https://github.com/ScoopInstaller/Main">Main Bucket</a></div>
    <div><a href="https://github.com/lukesampson/scoop-extras">Extra Bucket</a></div>
    <div>
      Last updated at:
      <Span></Span>
      <Moment format="MMMM Do YYYY, HH:mm">{lastUpdatedAt}</Moment>
      <Span></Span>
      <Moment fromNow>{lastUpdatedAt}</Moment>
    </div>
    <p>Placeholder for search bar</p>
    <div>{allApps && <div>Main Bucket: {mainCount}</div>}</div>
    <div>{allApps && <div>Extra Bucket: {extraCount}</div>}</div>
    <Footer />
  </div>
)
