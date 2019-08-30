var path = require('path');
const { spawn } = require('child_process');
var nodeExternals = require('webpack-node-externals');

function OnFirstBuildDonePlugin() {
    let isInitialBuild = true;
    return {
        apply: compiler => {
            compiler.hooks.done.tap('OnFirstBuildDonePlugin', compilation => {
                if (isInitialBuild) {
                    isInitialBuild = false;
                    spawn('nodemon ./dist/bundle.js', {
                        stdio: 'inherit',
                        shell: true,
                    });
                }
            });
        },
    };
}

module.exports = {
    mode: 'development',
    target: 'node',
    watch: true,
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        OnFirstBuildDonePlugin(),
    ],
    externals: [nodeExternals()],
};
