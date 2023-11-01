#!/bin/bash

createQuestionTable="
CREATE TABLE questionInfo 
(
    question_id int auto_increment primary key,
    question_name varchar(30) not null,
    question_difficulty ENUM('Easy', 'Medium', 'Hard', 'Hell'),
    question_type varchar(50)
)
"
mysql -ubear -DLoginInfo -p123 -e "$createQuestionTable; "