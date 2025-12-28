#!/usr/bin/env bash

set -euo pipefail

npm i
npm run build
pm2 restart all


