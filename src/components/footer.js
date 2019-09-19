import React from "react"
import "../main.scss"

export default () => (
  <footer className="footer has-background-white">
    <div className="content has-text-centered">
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
      <span className="is-size-3">&middot;</span>
      <span className="span-space-horizontal-around">
        <a href="https://ko-fi.com/J3J113VYZ" rel="noopener noreferrer" target="_blank">
          <img
            height="21"
            style={{border:"0px", height:"21px"}}
            src="https://az743702.vo.msecnd.net/cdn/kofi2.png?v=2"
            border="0"
            alt="Buy Me a Coffee at ko-fi.com"
          />
        </a>
      </span>
    </div>
  </footer>
)
