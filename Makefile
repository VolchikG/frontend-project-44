install:
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	--dry-run

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix