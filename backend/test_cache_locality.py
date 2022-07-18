from subprocess import Popen, PIPE, call
import time
import requests
import logging
from tqdm import tqdm
import pandas as pd


n = 1000
my_url= "http://localhost:8080/api/warnings/new"
res_redis = []
res_sql = []
logging.basicConfig(filename="generate_warnings.log", 
					format='%(asctime)s %(message)s', 
					filemode='w')
logger=logging.getLogger() 
logger.setLevel(logging.DEBUG)


def test1():
    ## This part tests for cache/no cache difference ###
    # Clearly the size of the cache influences the performance #
    call ("./bin/clearall")
    ### TEST 1###
    # This part: after inserting 1000 pieces of warnings, get_new #
    # Cache: 1000 queries, history_compare: 1000 queries#
    # Anticipation: the cache is not going to work properly #
    logger.debug("##### TEST 1 #####")
    # This is test_mode=cache #

    # inserted 10 new warnings into history and cache
    call("python3 generate_warnings.py random cache 100", shell=True)
    url_str_cache= "http://localhost:8080/warnings/new"
    test1_cache_start = time.time()
    r = requests.get(url_str_cache)
    test1_cache_end = time.time()
    test1_cache_time = test1_cache_end - test1_cache_start
    logger.debug("Time used for cache + database: " + str(test1_cache_time))

    # inserted 10 new warnings into history_compare and cache
    call("python3 generate_warnings.py random nocache 100", shell=True)
    url_str_cache= "http://localhost:8080/compare/warnings/new"
    test1_nocache_start = time.time()
    r = requests.get(url_str_cache)
    test1_nocache_end = time.time()
    test1_nocache_time = test1_nocache_end - test1_nocache_start
    logger.debug("Time used for database only: " + str(test1_nocache_time))
    logger.debug("##### END OF TEST 1 #####\n")
    return test1_cache_time, test1_nocache_time


def test2():
    ### TEST 2###
    # This part: after inserting 1000 pieces of warnings, get_new, insert 10 pieces of warnings, get_new #
    # Cache: 10 queries, history_compare: 1010 queries#
    # Anticipation: the cache is going to work properly #
    call ("./bin/clearall")
    logger.debug("##### TEST 2 #####")
    # inserted 100 new warnings into history and cache
    call("python3 generate_warnings.py random cache 100", shell=True)
    requests.get("http://localhost:8080/warnings/new")
    # test the time needed to get another 10 new warnings
    call("python3 generate_warnings.py random cache 10", shell=True)
    test2_cache_start = time.time()
    requests.get("http://localhost:8080/warnings/new")
    test2_cache_end = time.time()
    test2_cache_time = test2_cache_end - test2_cache_start
    logger.debug("Time used for cache + database: " + str(test2_cache_time))


    call("python3 generate_warnings.py random nocache 100", shell=True)
    requests.get("http://localhost:8080/compare/warnings/new")
    call("python3 generate_warnings.py random nocache 10", shell=True)
    test2_nocache_start = time.time()
    requests.get("http://localhost:8080/compare/warnings/new")
    test2_nocache_end = time.time()
    test2_nocache_time = test2_nocache_end - test2_nocache_start
    logger.debug("Time used for database only: " + str(test2_nocache_time))

    logger.debug("##### END OF TEST 2 #####\n")
    return test2_cache_time, test2_nocache_time


def test3():
    ### TEST 3###
    # This part: compare between inserting 1000 pieces of random warnings and naive locality #
    # Anticipation: the cache is not going to work properly #
    logger.debug("##### TEST 3 #####")
    # This is test_mode=nocache #
    # clear all memories, including mysql databases and redis cache
    call("./bin/clearall")

    call("python3 generate_warnings.py random nocache 100", shell=True)
    test3_random_start = time.time()
    r = requests.get("http://localhost:8080/compare/warnings/new")
    test3_random_end = time.time()
    test3_random_time = test3_random_end - test3_random_start
    logger.debug("Time used for random: " + str(test3_random_time))

    call("python3 generate_warnings.py locality nocache 100", shell=True)
    test3_locality_start = time.time()
    r = requests.get("http://localhost:8080/compare/warnings/new")
    test3_locality_end = time.time()
    test3_locality_time = test3_locality_end - test3_locality_start
    logger.debug("Time used for locality: " + str(test3_locality_time))

    logger.debug("##### END OF TEST 3 #####\n")
    return test3_random_time, test3_locality_time


def stats_helper(test_id, test_results, col1, col2):
    print("### RESULTS FOR TEST " + str(test_id) + " ###")
    print("mean:")
    print(col1 + ": " + str(test_results[col1].mean()))
    print(col2 + ": " + str(test_results[col2].mean()))
    print("max:")
    print(col1 + ": " + str(test_results[col1].max()))
    print(col2 + ": " + str(test_results[col2].max()))
    print("min:")
    print(col1 + ": " + str(test_results[col1].min()))
    print(col2 + ": " + str(test_results[col2].min()))


def result_collector(testid, func, col1, col2):
    res1 = []
    res2 = []
    for _ in tqdm(range(100)):
        temp1, temp2 = func()
        res1.append(temp1)
        res2.append(temp2)
    data = {col1: res1, col2: res2}
    test1_results = pd.DataFrame(data,columns = [col1, col2])
    result_str = "experiment_results/test" + str(testid) + "_detail.csv"
    test1_results.to_csv(result_str)
    stats_helper(testid, test1_results, col1, col2)

def main():
    result_collector(1, test1, "with cache", "no cache")
    result_collector(2, test2, "with cache", "no cache")
    result_collector(3, test3, "random", "locality")


if __name__ == "__main__":
   main()