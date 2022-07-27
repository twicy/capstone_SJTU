#!/bin/bash
set -Eeuo pipefail

echo "This is from testdb.history:"
mysql -u client1 -p -e "select * from testdb.history;"
echo "This is from testdb.history_compare:"
mysql -u client1 -p -e "select * from testdb.history_compare;"
echo "This is from Redis cache:"
redis-cli KEYS "*" 