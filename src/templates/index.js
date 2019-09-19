import React from "react"
import Moment from "react-moment"

import "../main.scss"

import Header from "../components/header"
import Footer from "../components/footer"
import Search from "../components/search"

export default ({
  pageContext: { allApps, mainCount, extraCount, lastUpdatedAt },
}) => (
  <div style={{ margin: `3rem auto`, maxWidth: 640 }}>
    <Header />
    <h1 className="has-text-centered has-text-weight-bold is-family-primary is-size-2">
      Scoop Buckets Search
    </h1>
    <p className="has-text-centered is-size-5">
      Is this app in{" "}
      <a href="https://scoop.sh/" target="_blank" rel="noopener noreferrer">
        Scoop
      </a>{" "}
      buckets? <br />A simple web tool to <strike>search</strike> filter out
      apps in Scoop buckets.
    </p>
    <div className="container" style={{ marginTop: "1rem" }}>
      <div className="columns">
        <div className="column has-text-right">
          <a href="https://github.com/ScoopInstaller/Main">
            <span className="icon">
              <i className="fab fa-github"></i>
            </span>
            Main Bucket
          </a>
          <span className="tag is-primary is-rounded has-text-weight-bold span-space-horizontal-around">
            <span className="is-size-6">{mainCount}</span>
          </span>
        </div>
        <div className="column has-text-left">
          <a href="https://github.com/lukesampson/scoop-extras">
            <span className="icon">
              <i className="fab fa-github"></i>
            </span>
            Extra Bucket
          </a>
          <span className="tag is-info is-rounded has-text-weight-bold span-space-horizontal-around">
            <span className="is-size-6">{extraCount}</span>
          </span>
        </div>
      </div>
      <div className="has-text-centered" style={{ marginTop: "-1.5rem" }}>
        <strong>Last updated at:</strong>{" "}
        <Moment format="MMMM Do YYYY, HH:mm">{lastUpdatedAt}</Moment>
        {" | "}
        <Moment fromNow>{lastUpdatedAt}</Moment>
      </div>
    </div>
    <Search apps={allApps} />
    <Footer />
  </div>
)
