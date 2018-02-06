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
