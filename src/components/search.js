import React from "react"
import * as JsSearch from "js-search"

import "../main.scss"

class Search extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      engine: null,
      searchResults: [],
      searchQuery: "",
      mainCount: 0,
      extraCount: 0,
      mainFullList: this.bucketFilter(props.apps, "main"),
      extraFullList: this.bucketFilter(props.apps, "extra"),
    }
  }

  componentDidMount() {
    this.initSearchEngine()
  }

  bucketFilter = (apps, bucket) => {
    return apps.filter(app => app.bucket === bucket)
  }

  initSearchEngine = () => {
    const engine = new JsSearch.Search("name")
    engine.indexStrategy = new JsSearch.AllSubstringsIndexStrategy()
    engine.addIndex("name")
    engine.addDocuments(this.props.apps)
    this.setState({ engine: engine })
  }

  searchApps = e => {
    const { engine } = this.state
    const queryResults = engine.search(e.target.value)
    this.setState({
      searchQuery: e.target.value,
      searchResults: queryResults,
      mainCount: this.bucketFilter(queryResults, "main").length,
      extraCount: this.bucketFilter(queryResults, "extra").length,
    })
  }

  handleSubmit = e => {
    e.preventDefault()
  }

  randomPicks = () => {
    const mainPick = this.state.mainFullList[
      Math.floor(Math.random() * this.state.mainFullList.length)
    ]
    const extraPick = this.state.extraFullList[
      Math.floor(Math.random() * this.state.extraFullList.length)
    ]
    return [mainPick, extraPick]
  }

  render() {
    const { searchResults, searchQuery } = this.state
    const queryResults = searchQuery === "" ? this.randomPicks() : searchResults
    return (
      <React.Fragment>
        <div className="has-text-centered" style={{ marginTop: "3rem" }}>
          <form onSubmit={this.handleSubmit}>
            <div style={{ margin: "0 auto" }}>
              <input
                className="input is-info is-medium"
                type="text"
                id="search"
                value={searchQuery}
                onChange={this.searchApps}
                style={{ margin: "0 auto", width: "480px" }}
              />
            </div>
          </form>
        </div>
        <div
          className="container"
          style={{ marginTop: "5px", maxWidth: "480px" }}
        >
          <div className="level">
            <div className="level-item has-text-centered">
              {searchQuery === "" ? `Random Picks` : `Search Result`}
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Main</p>
                <p className="title">
                  {searchQuery === "" ? 1 : this.state.mainCount}
                </p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Extra</p>
                <p className="title">
                  {searchQuery === "" ? 1 : this.state.extraCount}
                </p>
              </div>
            </div>
          </div>
        </div>

        {queryResults.map(app => {
          return (
            <div className="box">
              <div className="level">
                <div className="level-left">
                  <div className="level-item has-text-left">{app.name}</div>
                </div>
                <div className="level-right">
                  <div className="level-item">
                    <a className="button is-link is-outlined" href={app.url}>
                      Check bucket
                    </a>
                  </div>
                  <div className="level-item">
                    {app.bucket === "main" ? (
                      <span className="tag is-primary is-medium">
                        <span className="is-size-6">{app.bucket}</span>
                      </span>
                    ) : (
                      <span className="tag is-info is-medium">
                        <span className="is-size-6">{app.bucket}</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </React.Fragment>
    )
  }
}

export default Search
