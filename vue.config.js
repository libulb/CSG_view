var path = require('path');
// let proxyObj = {};
// proxyObj['/'] = {
//     ws: false,
//     target: 'http://localhost:8088',
//     changeOrigin: true,
//     pathRewrite: {
//         '^/': ''
//     }
// }

const mockServer = (req, res) => {
    const jsonPath = req.path;
    delete require.cache[
        require.resolve(
            path.join(__dirname, './mock/' + jsonPath)
        )
        ];
    res.setHeader(
        'Content-Type',
        'application/json;charset=utf-8'
    );
    res.write(
        JSON.stringify(
            require(path.join(__dirname, './mock/' + jsonPath))
        )
    );
    res.end();
};


module.exports = {
    publicPath: '/',
    devServer: {
        host: 'localhost',
        port: '8080',
        hot: true,
        // proxy:proxyObj,
        before:
            process.env.VUE_APP_MOCK === 'true'
            && function (app){
                app.get('/flow/*', mockServer);
                app.get('/networkTraffic/*', mockServer);
                app.get('/terminalStatus/*', mockServer);
                app.get('/offlineTerminal/*', mockServer);
                // app.get('/menu/*', mockServer);
            }
    },
};
