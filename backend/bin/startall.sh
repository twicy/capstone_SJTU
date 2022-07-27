#!/bin/bash
set -Eeuo pipefail


sudo service mysql start
sudo service redis-server start
(cd awesome_app; go mod tidy)
(cd awesome_app; go run .)
