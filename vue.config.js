var path = require('path');
const JSON5 = require('json5')

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

    devServer: {
        public: 'localhost:8080',
        hot: true,
        disableHostCheck: true,
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
