#!/usr/bin/env sh

pnpm --filter "@hs/*" run build
git add .
git commit -m "m"
lerna publish