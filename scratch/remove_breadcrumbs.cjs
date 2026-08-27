const fs = require('fs');
const path = require('path');

function processDir(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.jsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let original = content;
            
            // Remove <nav ...> ... </nav> block, plus any leading/trailing whitespace around it that might leave empty lines
            content = content.replace(/\s*<nav[^>]*>[\s\S]*?<\/nav>/g, '');
            
            if (content !== original) {
                fs.writeFileSync(fullPath, content);
                console.log('Removed breadcrumbs from ' + fullPath);
            }
        }
    }
}

const folders = [
    path.join(__dirname, '../src/pages/coaching'),
    path.join(__dirname, '../src/pages/country'),
    path.join(__dirname, '../src/pages/services')
];

for (const folder of folders) {
    processDir(folder);
}
