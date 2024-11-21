#!/bin/bash

cd "$(dirname "$0")"

echo "install strapi backend packages"
npm install

echo "start strapi backend"
npm run start
