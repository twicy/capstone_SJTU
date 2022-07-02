# README for Backend

## 使用说明

假设已经装好了go并且配置好了GOROOT, GOPATH

**安装所有载入的包** 

`go mod install`

**运行程序**  
`cd awesome_app`  
`go run .`

**关于sql** 
* 表名为 `warning`

## 代码说明
**生成sql** 

https://stackoverflow.com/questions/39281594/error-1698-28000-access-denied-for-user-rootlocalhost
OPTION2
    sudo service mysql start
    # create a user and grant privilege
show databases
//use mysql
//SELECT DATABASE() FROM DUAL;
CREATE USER IF NOT EXISTS 'client1'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON *.* TO 'client1'@'localhost';
//UPDATE user SET plugin='auth_socket' WHERE User='client1';
FLUSH PRIVILEGES;
exit;

sudo service mysql restart
mysql -u "client1" -p 

create database testdb;
quit;
mysql -u client1 -p testdb < dong.sql


**How to drop a user**
https://www.cyberciti.biz/faq/how-to-delete-remove-user-account-in-mysql-mariadb/
REVOKE ALL PRIVILEGES, GRANT OPTION FROM 'bloguser'@'localhost';
DROP USER 'bloguser'@'localhost';


* 使用 `mysql -uUSERNAME -pPASSWORD -hHOSTNAME USER_DATABASE < dong.sql` 直接导入 `generate_sql/dong.sql`, 然后使用其中名为`warning`的表
* 或运行 `generate_sql/write_sql.ipynb`, 记得在代码中修改自己sql的用户名， 密码和database

**操作sql**  
* 在`awersome_app/sql.go` 的 `InitSQL()` 里修改如下代码 `SQLDB, err = sql.Open("mysql", "{username}:{password}@/{databasename}")`

**增加新内容**
* 在`awersome_app/model.go`中加上新的struct
