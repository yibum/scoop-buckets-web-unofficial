import React from "react"
import Moment from "react-moment"
// import { css } from "@emotion/core"
import styled from "@emotion/styled"

import Header from "../components/header"
import Footer from "../components/footer"
import Search from "../components/search"

const Span = styled.span`
  margin-left: 5px;
  margin-right: 5px;
`

export default ({ pageContext: { allApps, mainCount, extraCount, lastUpdatedAt } }) => (
  <div style={{ margin: `3rem auto`, maxWidth: 640 }}>
    <Header />
    <h1 style={{textAlign: `center`}}>Scoop Buckets Search</h1>
    <div><a href="https://github.com/ScoopInstaller/Main">Main Bucket</a>{mainCount}</div>
    <div><a href="https://github.com/lukesampson/scoop-extras">Extra Bucket</a>{extraCount}</div>
    <div>
      Last updated at:
      <Span></Span>
      <Moment format="MMMM Do YYYY, HH:mm">{lastUpdatedAt}</Moment>
      <Span></Span>
      <Moment fromNow>{lastUpdatedAt}</Moment>
    </div>
    <div>
      <Search apps={allApps} />
    </div>
    <Footer />
  </div>
)
