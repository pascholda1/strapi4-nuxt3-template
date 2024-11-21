#!/bin/bash

cd "$(dirname "$0")"

echo "install nuxt frontend packages"
npm install

echo "build nuxt frontend"
npm run build

echo "run nuxt frontend"
NITRO_PORT=3010 node ./.output/server/index.mjs
