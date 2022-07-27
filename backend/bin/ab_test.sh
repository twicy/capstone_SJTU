#!/bin/bash
set -Eeuo pipefail

ab -n 1000 -c 10 http://localhost:8080/warnings/1 > experiment_results/ab_test_result1.txt