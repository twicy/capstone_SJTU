"""Randomly generate warnings"""
from urllib import request
import requests
import mysql.connector
from mysql.connector import Error
import logging
from random import random, seed
from random import randint, randrange
import threading
import json
from datetime import datetime
from time import time
import sys


connection = None
warnings_total = 0
url_str = "http://localhost:8080/api/generate_warnings"
logging.basicConfig(filename="generate_warnings.log", 
					format='%(asctime)s %(message)s', 
					filemode='w')
logger=logging.getLogger() 
logger.setLevel(logging.DEBUG)
id_set = set()
id = 0

def getNewestID(cursor):
    cursor.execute("SELECT id FROM history ORDER BY id DESC LIMIT 1")
    myresult = cursor.fetchone()
    if not myresult:
        return 1
    else:
        return myresult[0] + 1

def getNewestIDCompare(cursor):
    cursor.execute("SELECT id FROM history_compare ORDER BY id DESC LIMIT 1")
    myresult = cursor.fetchone()
    if not myresult:
        return 1
    else:
        return myresult[0] + 1


def repeater(rand):
    logger.debug("Using randome number: " + str(rand))
    try:
        connection = mysql.connector.connect(host='localhost',
                                            database='testdb',
                                            user='client1',
                                            password='password')
        if connection.is_connected():
            db_Info = connection.get_server_info()
            logger.debug("Connected to MySQL Server version " + str(db_Info))
            cursor = connection.cursor()
            # id = getNewestID(cursor)
            id = getNewestIDCompare(cursor)
            temp_str = url_str + "/" + str(rand)
            r = requests.post(url=temp_str, data=json.dumps({"id":id, "warning_id":rand}))
            logger.debug("receiving the following results from api server:")
            logger.debug(r.text)

    except Error as e:
        print("Error while connecting to MySQL", e)
    finally:
        if connection and connection.is_connected():
            cursor.close()
            connection.close()
            logger.debug("MySQL connection is closed\n")


def generate_random():
    rand = randint(0, warnings_total - 1)
    repeater(rand)
    threading.Timer(0.5, generate_random).start()


def generate_locality(num, locality_factor=1):
    while True:
        num = randint(num - 2 * locality_factor, num + 2 * locality_factor)
        if num >= 0 and num <= warnings_total - 1:
            break
    repeater(num)
    threading.Timer(0.5, generate_locality, [num, locality_factor]).start()


def main():
    try:
        connection = mysql.connector.connect(host='localhost',
                                            database='testdb',
                                            user='client1',
                                            password='password')
        if connection.is_connected():
            db_Info = connection.get_server_info()
            logger.debug("Connected to MySQL Server version " + str(db_Info))
            cursor = connection.cursor()
            cursor.execute("SELECT COUNT(*) FROM warning;")
            results = cursor.fetchall()[0][0]
            global warnings_total
            warnings_total = results
            logger.debug("Number of queries in database testdb:" + str(results))

    except Error as e:
        print("Error while connecting to MySQL", e)
    finally:
        if connection and connection.is_connected():
            cursor.close()
            connection.close()
            logger.debug("MySQL connection is closed")
    #print("warnings_total: " + str(warnings_total))
    args = sys.argv[1:]
    if len(args) == 1 and args[0] == "locality":
        generate_locality(randint(0, warnings_total - 1), int(warnings_total/10))
    elif len(args) == 1 and args[0] == "random":
        generate_random()
    else:
        print("Wrong Usage!")


if __name__ == "__main__":
   main()