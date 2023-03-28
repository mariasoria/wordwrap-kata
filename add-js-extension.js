const replace = require('replace-in-file')
const options = {
    files: ['build/src/app.js',
        'build/src/init.js',
        'build/src/controller.js',
        'build/src/Wrapper.js'],
    from: ['controller";', 'app";', 'Wrapper";', 'ColumnWidth";', 'Text";'],
    to:   ['controller.js";', 'app.js";', 'Wrapper.js";', 'ColumnWidth.js";', 'Text.js";']
}
replace.sync(options)