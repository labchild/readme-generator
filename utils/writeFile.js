const fs = require('fs');

function writeFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            // error sends function to catch
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'Markdown created! Check /dist for your file.'
            });
        });
    });
};

module.exports = writeFile;