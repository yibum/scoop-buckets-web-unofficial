import React from "react"
import "../main.scss"

export default () => (
  <footer className="footer has-background-white">
    <div className="content has-text-centered">
      {/* <div
    style={{
      textAlign: "center",
      color: "#8c8c8c",
      position: "fixed",
      left: 0,
      width: "100%",
      bottom: 20,
    }}
  > */}
      <span className="span-space-horizontal-around span-text-vertical-adjust">
        Made with
      </span>
      <span className="icon has-text-danger">
        <i className="fas fa-heart"></i>
      </span>
      <span className="is-size-3">&middot;</span>
      <a
        href="https://github.com/demoslam/scoop-buckets-web-netlify"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="span-space-horizontal-around span-text-vertical-adjust">
          Source
        </span>
        <span className="icon is-size-5 has-text-grey-dark">
          <i className="fab fa-github-alt"></i>
        </span>
      </a>
      <span className="is-size-3">&middot;</span>
      <span className="span-space-horizontal-around">
        <img
          alt="Netlify Status"
          src="https://api.netlify.com/api/v1/badges/965df306-a386-4e0b-9351-ee2bdb712857/deploy-status"
        ></img>
      </span>
    </div>
  </footer>
)
