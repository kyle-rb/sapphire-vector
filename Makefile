# I still don't entirely know how to write good Makefiles, but I think this should work

all: optimized/index.html

optimized/style.css: style.css optimized/svg
	mkdir -p optimized
	csso style.css -o optimized/style.css

optimized/svg: svg svg-tweak.js
	mkdir -p optimized/svg
	svgo svg/*.svg -o optimized/svg/ -p 1
	node svg-tweak.js

optimized/index.html: animation.html optimized/style.css optimized/svg
	inline-source animation.html --root optimized > optimized/index.html

clean:
	rm -rf optimized *~
