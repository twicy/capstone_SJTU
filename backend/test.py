from subprocess import Popen, PIPE, call
import time
import requests


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
print("##### TEST 1 #####")
# This is test_mode=cache #

# inserted 10 new warnings into history and cache
call("python3 generate_warnings.py random cache 1000", shell=True)
url_str_cache= "http://localhost:8080/warnings/new"
test1_cache_start = time.time()
r = requests.get(url_str_cache)
test1_cache_end = time.time()
test1_cache_time = test1_cache_end - test1_cache_start
print("Time used for cache + database: " + str(test1_cache_time))

# inserted 10 new warnings into history_compare and cache
call("python3 generate_warnings.py random nocache 1000", shell=True)
url_str_cache= "http://localhost:8080/compare/warnings/new"
test1_nocache_start = time.time()
r = requests.get(url_str_cache)
test1_nocache_end = time.time()
test1_nocache_time = test1_nocache_end - test1_nocache_start
print("Time used for database only: " + str(test1_nocache_time))

print("##### END OF TEST 1 #####\n")
### TEST 2###
# This part: after inserting 1000 pieces of warnings, get_new, insert 10 pieces of warnings, get_new #
# Cache: 10 queries, history_compare: 1010 queries#
# Anticipation: the cache is going to work properly #
print("##### TEST 2 #####")
# This is test_mode=cache #

# inserted 10 new warnings into history and cache
call("python3 generate_warnings.py random cache 10", shell=True)
url_str_cache= "http://localhost:8080/warnings/new"
test1_cache_start = time.time()
r = requests.get(url_str_cache)
test1_cache_end = time.time()
test1_cache_time = test1_cache_end - test1_cache_start
print("Time used for cache + database: " + str(test1_cache_time))

# inserted 10 new warnings into history_compare and cache
call("python3 generate_warnings.py random nocache 10", shell=True)
url_str_cache= "http://localhost:8080/compare/warnings/new"
test1_nocache_start = time.time()
r = requests.get(url_str_cache)
test1_nocache_end = time.time()
test1_nocache_time = test1_nocache_end - test1_nocache_start
print("Time used for database only: " + str(test1_nocache_time))

print("##### END OF TEST 2 #####\n")

### TEST 3###
# This part: compare between inserting 1000 pieces of random warnings and naive locality #
# Anticipation: the cache is not going to work properly #
print("##### TEST 3 #####")
# This is test_mode=cache #
# clear all memories, including mysql databases and redis cache
call ("./bin/clearall")

call("python3 generate_warnings.py random cache 1000", shell=True)
url_str_cache= "http://localhost:8080/warnings/new"
test2_cache_start = time.time()
r = requests.get(url_str_cache)
test2_cache_end = time.time()
test2_cache_time = test2_cache_end - test2_cache_start
print("Time used for random: " + str(test2_cache_time))

call("python3 generate_warnings.py locality cache 1000", shell=True)
url_str_cache= "http://localhost:8080/compare/warnings/new"
test2_cache_start = time.time()
r = requests.get(url_str_cache)
test2_cache_end = time.time()
test2_cache_time = test2_cache_end - test2_cache_start
print("Time used for locality: " + str(test2_cache_time))

print("##### END OF TEST 3 #####\n")