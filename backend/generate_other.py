from mysql.connector import Error
import mysql.connector
from random import randint
import sys

total_production = 0
total_consumption = 0


def initialization():
    try:
        connection = mysql.connector.connect(host='localhost',
                                            database='testdb',
                                            user='client1',
                                            password='password')
        if connection.is_connected():
            cursor = connection.cursor()
            cursor.execute("SELECT COUNT(*) FROM production;")
            global total_production
            total_production = cursor.fetchall()[0][0]
            cursor.execute("SELECT COUNT(*) FROM consumption;")
            global total_consumption
            total_consumption = cursor.fetchall()[0][0]

    except Error as e:
        print("Error while connecting to MySQL", e)
    finally:
        if connection and connection.is_connected():
            cursor.close()
            connection.close()


def generate(week):
    try:
        connection = mysql.connector.connect(host='localhost',
                                            database='testdb',
                                            user='client1',
                                            password='password')
        if connection.is_connected():
            cursor = connection.cursor()
            global total_production, total_consumption
            shift = str(randint(1, 3))
            production_id = str(randint(0, total_production))
            production = str(randint(0, 100))
            add_production = ("INSERT INTO production_history "
                            "(week, shift, production_id, production) "
                            "VALUES (%(week)s, %(shift)s, %(production_id)s, %(production)s)")
            data_production = {
                'week': week,
                'shift': shift,
                'production_id': production_id,
                'production': production,
            }
            cursor.execute(add_production, data_production)
            connection.commit()
            shift = str(randint(1, 3))
            consumption_id = str(randint(0, total_consumption))
            consumption = str(randint(0, 100))
            add_consumption = ("INSERT INTO consumption_history "
                            "(week, shift, consumption_id, consumption) "
                            "VALUES (%(week)s, %(shift)s, %(consumption_id)s, %(consumption)s)")
            data_consumption = {
                'week': week,
                'shift': shift,
                'consumption_id': consumption_id,
                'consumption': consumption,
            }
            cursor.execute(add_consumption, data_consumption)
            connection.commit()
            

    except Error as e:
        print("Error while connecting to MySQL", e)
    finally:
        if connection and connection.is_connected():
            cursor.close()
            connection.close()


def main():
    initialization()
    args = sys.argv[1:]
    if len(args) == 1:
        n = int(args[0])
        for i in range(n):
            generate(str(i + 1))
    else:
        print("Wrong usage")


if __name__ == "__main__":
   main()