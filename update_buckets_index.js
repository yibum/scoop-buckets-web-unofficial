import fetch from 'node-fetch';
import fs from 'fs';

const appTransformer = (app, bucketType) => {
    return {
        name: app.name.split(".")[0],
        url: app.html_url,
        bucket: bucketType,
        objectID: [app.name.split(".")[0], '-', bucketType].join('')
    };
}

async function fetchData() {
    const respMainBucket = await fetch('https://api.github.com/repos/ScoopInstaller/Main/contents/bucket');
    const respMainApps = await respMainBucket.json();
    const mainApps = await respMainApps.map(app => appTransformer(app, 'main'));

    const respExtraBucket = await fetch('https://api.github.com/repos/lukesampson/scoop-extras/contents/bucket');
    const respExtraApps = await respExtraBucket.json();
    const extraApps = await respExtraApps.map(app => appTransformer(app, 'extra'));

    return mainApps.concat(extraApps);
}

fetchData()
    .then(res => {
        fs.writeFile('./public/scoop_search_index.json', JSON.stringify(res, null, 2), (err) => {
            if (err) throw err;
            console.log('Data written to file');
        })
    });
