const fs = require('fs');
const path = require('path');

function bumpPadding(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            bumpPadding(fullPath);
        } else if (fullPath.endsWith('.jsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let original = content;
            
            // Bump values by 30px
            content = content.replace(/pt-\[(\d+)px\]/g, (match, p1) => {
                const num = parseInt(p1, 10);
                if (num >= 80) { // Only bump large top paddings that represent header spacing
                    return `pt-[${num + 30}px]`;
                }
                return match;
            });
            
            if (content !== original) {
                fs.writeFileSync(fullPath, content);
                console.log('Updated ' + fullPath);
            }
        } else if (fullPath.endsWith('.css')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let original = content;
            
            // For CSS files, look for padding-top: 100px; or similar
            content = content.replace(/padding-top:\s*(\d+)px/g, (match, p1) => {
                const num = parseInt(p1, 10);
                if (num >= 80) {
                    return `padding-top: ${num + 30}px`;
                }
                return match;
            });
            
            if (content !== original) {
                fs.writeFileSync(fullPath, content);
                console.log('Updated ' + fullPath);
            }
        }
    }
}

bumpPadding(path.join(__dirname, '../src/pages'));
