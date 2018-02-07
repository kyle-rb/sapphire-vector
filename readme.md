# Pokemon Sapphire Opening Vectorized
This is an animation I made of the opening to Pokemon Sapphire. I traced individual parts in Inkscape, then put them together in HTML and animated them in CSS.

See the final product [here](http://nin.ten.dog/sapphire-vector).

## Build
The Makefile does the following:
- CSS is minified with `csso`
- SVGs are optimized with `svgo`
- a NodeJS script I wrote modifies the SVGs to make them suitable for inlining
- the CSS and the SVGs are inlined into the HTML file

All this is output into the `optimized` folder, with the final product going into `index.html`, which is all that is needed to be deployed.

## Browser Support
Hypothetically this should work in any modern browser supporting CSS 2D transforms, assuming the device it's being run on can handle all the elements. Unfortunately there are some weird issues.

Works best in Chrome.

Firefox is good except for some performance issues on one or two elements.

Edge is pretty good as well, similar to Firefox. (Haven't tested in IE.)

Safari is not great; it seems to calculate the basis for some transforms on initial load, so some transforms are weird when the window is resized after the page is loaded. I haven't tested on Safari on iOS, but I'd imagine it has similar issues (as would Chrome on iOS).

Also Safari mangles the grass-patch continuous roll thing (I think due to timing issues), so I'm forced to make it overlap a bit for compatibility's sake.
