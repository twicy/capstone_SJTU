from subprocess import Popen, PIPE, call


n = 1000
my_url= "http://localhost:8080/api/warnings/new"
res_redis = []
res_sql = []

## This part tests for cache/no cache difference ###
# Clearly the size of the cache influences the performance #

### TEST 1###
# This part: after inserting 1000 pieces of warnings, get_new #
# Cache: 1000 queries, history_compare: 1000 queries#
# Anticipation: the cache is not going to work properly #
# This is test_mode=cache #

call("python3 generate_warnings.py random cache 10", shell=True)


### TEST 2###
# This part: after inserting 1000 pieces of warnings, get_new, insert 10 pieces of warnings, get_new #
# Cache: 10 queries, history_compare: 1010 queries#
# Anticipation: the cache is going to work properly #