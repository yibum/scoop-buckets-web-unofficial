## Scoop Buckets Web (Unofficial)

[![Netlify Status](https://api.netlify.com/api/v1/badges/965df306-a386-4e0b-9351-ee2bdb712857/deploy-status)](https://scoop.airbrain.app)

Is that app in [Scoop](https://scoop.sh) buckets? 
A simple web tool to ~~search~~ filter out apps in Scoop buckets (Main + Extra).

### More Info?
Typically one can search an app in Scoop by `scoop search <app-name>`, but it is sometimes slow on my local machine.

This website syncs all available apps from "well known" buckets,  Main and Exta, every hour and pushes it to Netlify.

Thanks
* [Scoop](https://scoop.sh)
* [Netlify](https://https://www.netlify.com/)
* [GatsbyJS](https://www.gatsbyjs.org/)
* Github Action (on schedule hook with Netlify)
* [JS Search](https://github.com/bvaughn/js-search)

There are other buckets available: [Scoop wiki](https://github.com/lukesampson/scoop/wiki/Buckets). I may make other buckets available on the website in the future.

### Local Dev
`yarn install`

and

`gatsby develop`