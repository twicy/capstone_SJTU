"""Randomly generate warnings"""
import requests
import mysql.connector
from mysql.connector import Error
import logging
from random import random, seed
from random import randint, randrange
import threading
import time

connection = None
warnings_total = 0
url = "http://localhost:8080/api/generate_warnings"
logging.basicConfig(filename="generate_warnings.log", 
					format='%(asctime)s %(message)s', 
					filemode='w')
logger=logging.getLogger() 
logger.setLevel(logging.DEBUG)


def repeater(rand):
    try:
        connection = mysql.connector.connect(host='localhost',
                                            database='testdb',
                                            user='client1',
                                            password='password')
        if connection.is_connected():
            db_Info = connection.get_server_info()
            logger.debug("Connected to MySQL Server version " + str(db_Info))
            cursor = connection.cursor()
            cursor.execute("SELECT * FROM warning WHERE id = %s;", [rand])
            result = cursor.fetchall()
            print(result)

    except Error as e:
        print("Error while connecting to MySQL", e)
    finally:
        if connection and connection.is_connected():
            cursor.close()
            connection.close()
            logging.debug("MySQL connection is closed")


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
        logging.debug("MySQL connection is closed")

def generate():
  threading.Timer(5.0, generate).start()
  rand = randint(1, warnings_total - 1)
  repeater(rand)

generate()