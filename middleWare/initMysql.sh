#!/bin/bash

initMysql()
{
    allMysqlTables=$(mysql -ubear -p123 -DLoginInfo -e "show tables;") 
    for file in $allMysqlTables
    do
        if [[ $file == "Tables_in_LoginInfo" ]];then
            continue
        fi
    done
}

initMysql