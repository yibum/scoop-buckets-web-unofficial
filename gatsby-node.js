const axios = require("axios")

const appTransformer = (app, bucketType) => {
  return {
    name: app.name.split(".")[0],
    url: app.html_url,
    bucket: bucketType,
  }
}

exports.createPages = async ({ actions: { createPage } }) => {
  try {
    const respDatetime = await axios.get(
      `http://worldtimeapi.org/api/timezone/America/Vancouver`
    )
    const respMainBucket = await axios.get(
      `https://api.github.com/repos/ScoopInstaller/Main/contents/bucket`
    )
    const mainApps = respMainBucket.data.map(app => appTransformer(app, "main"))
    const respExtraBucket = await axios.get(
      `https://api.github.com/repos/lukesampson/scoop-extras/contents/bucket`
    )
    const extraApps = respExtraBucket.data.map(app => appTransformer(app, "extra"))

    createPage({
      path: `/`,
      component: require.resolve("./src/templates/index.js"),
      context: {
        allApps: mainApps.concat(extraApps),
        mainCount: mainApps.length,
        extraCount: extraApps.length,
        lastUpdatedAt: new Date(respDatetime.data.datetime),
      },
    })
  } catch (error) {
    console.error(error)
  }
}
