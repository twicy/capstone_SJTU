#!/bin/bash
set -Eeuo pipefail


mysql -u client1 -p -e "truncate testdb.history;"
mysql -u client1 -p -e "truncate testdb.history_compare;"
redis-cli flushall 