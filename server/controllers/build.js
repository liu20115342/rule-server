const { spawn } = require('child_process')
const { artifacts } =require('../../surgio.conf')
const ip = require('ip')
const { port, domain } = require('../config/env')
function _formatList(item) {
    let fileName = item.name
    let host = domain || `http://${ip.address()}:${port}`
    return {
        url: `${host}/${fileName}`,
        name: fileName
    }
}
function build() {
    return new Promise((resolve, reject) => {
        const sh = spawn('npm', ['run', 'update'])
        sh.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`);
        });
        
        sh.stderr.on('data', (data) => {
            console.error(`stderr: ${data}`);
        });
        
        sh.on('close', (code) => {
            console.log('构建成功')
            console.log(`child process exited with code ${code}`);
            let list = artifacts.map(_formatList)
            resolve({
                success: true,
                data: list
            })
        });
    })
}

module.exports = {
    build
}