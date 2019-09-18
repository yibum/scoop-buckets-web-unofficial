const axios = require('axios')

exports.createPages = async ({actions: {createPage}}) => {
    try {
        const resp = await axios.get(`http://worldtimeapi.org/api/timezone/America/Vancouver`)
        createPage({
            path: `/`,
            component: require.resolve("./src/templates/index.js"),
            context: { allApps: resp.data }, 
        })
    } catch (error) {
        console.error(error)
    }
}