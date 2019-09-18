import React from "react"
import Moment from 'react-moment'
// import { css } from "@emotion/core"
import styled from "@emotion/styled"

import Header from "../components/header"
import Footer from "../components/footer"

const Span = styled.span`
    margin-left: 5px;
    margin-right: 5px;
`

export default ({pageContext: {allApps, lastUpdatedAt}}) => (
  <div>
    <Header />
    <div>
        Last updated at:
        <Span></Span>
        <Moment format="MMMM Do YYYY, HH:mm">{lastUpdatedAt}</Moment>
        <Span></Span>
        <Moment fromNow>{lastUpdatedAt}</Moment>
    </div>
    <p>Placeholder for search bar</p>
    <ul>
    {allApps && allApps.map(app => (
        <li>{app}</li>
    ))}
    </ul>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    <Footer />
  </div>
)