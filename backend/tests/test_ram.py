import guppy
from guppy import hpy
import numpy as np
from subprocess import Popen, PIPE, call
import requests


heap = hpy()

print("Heap Status At Starting : ")
heap_status1 = heap.heap()
print("Heap Size : ", heap_status1.size, " bytes\n")
print(heap_status1)


heap.setref()

print("\nHeap Status After Setting Reference Point : ")
heap_status2 = heap.heap()
print("Heap Size : ", heap_status2.size, " bytes\n")
print(heap_status2)


call("go run .", cwd="awesome_app/")
call("python3 generate_warnings.py random cache 10", shell=True)
requests.get("http://localhost:8080/warnings/new")


print("\nHeap Status After Creating Few Objects : ")
heap_status3 = heap.heap()
print("Heap Size : ", heap_status3.size, " bytes\n")
print(heap_status3)

print("\nMemory Usage After Creation Of Objects : ", heap_status3.size - heap_status2.size, " bytes")