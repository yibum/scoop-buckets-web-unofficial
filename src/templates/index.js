import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

export default ({pageContext: {allApps}}) => (
  <div>
    <Header />
    <p>Placeholder for search bar</p>
    <ul>
    {/* {allApps && allApps.map(app => (
        <li>{app.datetime} {app.abbreviation}</li>
    ))} */}
    {
        <li>{allApps.datetime} {allApps.abbreviation}</li>
    }
    </ul>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    <Footer />
  </div>
)