// SVG TWEAK: edits SVGs to make them suitable for inlining in the HTML file

let fs = require('fs');

fs.readdirSync('./optimized/svg').forEach(function(file) {
    if (file.slice(-4) === '.svg') { // if SVG file
        let name = file.slice(0, -4); // get name excluding the '.svg'
        let data = fs.readFileSync('./optimized/svg/' + file, { encoding: 'utf8' });
        fs.writeFileSync('./optimized/svg/' + file, modifyFile(name, data));
    }
});

function modifyFile(fileName, fileData) {
    // SVGs don't work well inlined (for me at least) if their widths and heights are explicitly
    //   declared on the elements themselves:
    fileData = fileData.replace(/^<svg(.*) height="[0-9\.]*(?:mm)?" width="[0-9\.]*(?:mm)?"(.*)>/, '<svg $1$2>');
    // [ reads svg opening tag containing height and width with decimal values with or without mm
    //     units, and replaces with original tag minus height and width ]

    // remove this attribute which screws with my matching and is apparently deprecated anyway:
    fileData = fileData.replace(/enable-background="(\w)" /g, '');

    // because we're inlining all the SVG images, id must be unique across all files, so we need to
    //   prefix each id with the name of the file that it was originally in:
    fileData = fileData.replace(/id="(\w)"/g, 'id="' + fileName + '-$1"'); // id declarations
    fileData = fileData.replace(/href="#(\w)"/g, 'href="#' + fileName + '-$1"'); // <use> instances
    fileData = fileData.replace(/url\(#(\w)\)/g, 'url(#' + fileName + '-$1)'); // gradient fills
    // not sure if there are other cases where id is used, or if any other things must be unique

    return fileData;
}
