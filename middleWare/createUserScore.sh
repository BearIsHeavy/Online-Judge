#!/bin/bash

userScore="
CREATE TABLE userScore
(
    email varchar(50) not null unique,
    question_id int not null unique,
    question_name varchar(25) not null unique,
    question_max_score tinyint not null,
    FOREIGN KEY (email)
    REFERENCES UserInfo (email)
);
"

mysql -u bear -p123 -DLoginInfo -e "$userScore"
