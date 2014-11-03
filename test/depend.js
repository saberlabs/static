var fs  = require('fs');
var child_process = require('child_process');
var packageInfo = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));
var dependencies = Object.keys(packageInfo.dependencies || {});

var URL_PREFIX = 'https://github.com/ecomfe/';

var DIR = 'test/dep';

function install(i) {
    var name = dependencies[i];
    if (!name) {
        console.log('Finish');
        return;
    }
    var version = packageInfo.dependencies[name];
    
    if (isNaN(parseInt(version.charAt(0), 10))) {
        version = version.substring(1);
    }

    var dist = DIR + '/' + name + '/' + version;
    
    if (fs.existsSync(dist)) {
        console.log(name + '@' + version + ' is existed');
        install(++i);
    }
    else {
        console.log('Install ' + name + '@' + version + ' ...');
        child_process.exec(
            'git clone ' + URL_PREFIX + name + ' ' + dist,
            function () {
                child_process.exec('cd ' + dist + ';git checkout ' + version + ';cd ../../../../', function () {
                    console.log('Install ' + name + '@' + version + ' finish');
                    install(++i);
                });
            }
        );
    }
}

function checkDir() {
    var dirs = DIR.split('/');
    var path = '.';

    for (var i = 0, name; name = dirs[i]; i++) {
        path += '/' + name;
        if (!fs.existsSync(path)) {
            fs.mkdirSync(path);
        }
    }
}

if (process.argv[2]) {
    DIR = process.argv[2];
}

console.log('Install dependencies to ' + DIR);
checkDir();
install(0);
