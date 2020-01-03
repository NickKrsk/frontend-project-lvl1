install:
	npm install
start:
	npx babel-node src/bin/brain-games.js
start2:
	npx babel-node src/games/brain-even.js
start3:
	npx babel-node src/games/brain-calc.js
start4:
	npx babel-node src/games/brain-gcd.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
link:
	npm link