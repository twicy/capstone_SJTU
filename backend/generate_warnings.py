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

connection = None
warnings_total = 0
url_str = "http://localhost:8080/api/generate_warnings"
logging.basicConfig(filename="generate_warnings.log", 
					format='%(asctime)s %(message)s', 
					filemode='w')
logger=logging.getLogger() 
logger.setLevel(logging.DEBUG)


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
            dict = {}
            dict["time"] = time()
            dict["warning_id"] = rand
            dict["value"] = 0
            r = requests.post(url = url_str, data = json.dumps(dict))
            print(json.dumps(dict))
            logger.debug("receiving the following results from api server:")
            logger.debug(r.text)

    except Error as e:
        print("Error while connecting to MySQL", e)
    finally:
        if connection and connection.is_connected():
            cursor.close()
            connection.close()
            logger.debug("MySQL connection is closed\n")


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
        warnings_total = results
        logger.debug("Number of queries in database testdb:" + str(results))

except Error as e:
    print("Error while connecting to MySQL", e)
finally:
    if connection and connection.is_connected():
        cursor.close()
        connection.close()
        logger.debug("MySQL connection is closed")

def generate():
  threading.Timer(0.5, generate).start()
  rand = randint(1, warnings_total - 1)
  repeater(rand)

generate()