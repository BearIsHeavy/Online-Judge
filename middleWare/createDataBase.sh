#!/bin/bash

DataBase="LoginInfo"

creatTable_UserInfo="CREATE TABLE UserInfo (
    id int not null auto_increment primary key,
    email varchar(50) not null unique,
    name varchar(20) not null,
    password varchar(20) not null,
    login_laster_time TIMESTAMP
)"

mysql -ubear -p123 -D${DataBase} -e "$creatTable_UserInfo; "

