const axios = require('axios')

exports.createPages = async ({actions: {createPage}}) => {
    try {
        const respDatetime = await axios.get(`http://worldtimeapi.org/api/timezone/America/Vancouver`)
        createPage({
            path: `/`,
            component: require.resolve("./src/templates/index.js"),
            context: { allApps: [], lastUpdatedAt: new Date(respDatetime.data.datetime) }, 
        })
    } catch (error) {
        console.error(error)
    }
}