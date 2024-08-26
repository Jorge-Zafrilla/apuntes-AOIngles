#!/bin/bash

set -e

# Build the site
npm run build

# Navigate into the build output directory
cd build

# If you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'Deploy to GitHub Pages'

# If you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:Jorge-Zafrilla/apuntes-AOIngles.git main:gh-pages

cd -
