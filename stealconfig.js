
'use strict';

var absolutePath = System.baseURL.replace(/\/$/, '');


System.config({

    defaultJSExtensions: true,

    paths: {
        can: absolutePath + '/node_modules/can/dist/amd/*.js',
        jquery: absolutePath + '/node_modules/jquery/dist/jquery.js',
        'stmodal/*': absolutePath + '/node_modules/stmodal/src/*.js',
        'stform/*': absolutePath + '/node_modules/stform/*.js',
        stloader: absolutePath + '/node_modules/stloader/src/js/index.js',
        'can/*': absolutePath + '/node_modules/can/dist/amd/can/*.js',
        'lodash/*': absolutePath + '/node_modules/lodash/*.js',
        'can/view/*': absolutePath + '/node_modules/can/dist/amd/can/view/*.js',
        'bootstrap-js/*': absolutePath + '/node_modules/bootstrap/js/*.js'
    },

    lessOptions: {
        paths: [
            '/node_modules/bootstrap/less/'
        ]
    },
    packageConfigPaths: ['./node_modules/*/package.json']
    //bundlesPath: absolutePath + '/public/dist'
});


