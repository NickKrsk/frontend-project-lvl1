install:
	npm install
start2:
	npx babel-node src/bin/games/brain-even.js
start3:
	npx babel-node src/bin/games/brain-calc.js
start4:
	npx babel-node src/bin/games/brain-gcd.js
start5:
	npx babel-node src/bin/games/brain-progression.js
start6:
	npx babel-node src/bin/games/brain-prime.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
link:
	npm link