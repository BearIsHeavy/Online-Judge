# Online Judge

## Module One Login Or Register

### 🔥 DataBase Struct

<table>
    <tr>
        <th>id</th>
        <th>email</th>
        <th>name</th>
        <th>password</th>
        <th>token</th>
        <th>Login_laster_time</th>
    </tr>
    <tr>
        <td>1</td>
        <td>123456@qq.com</td>
        <td>bear</td>
        <td>123456</td>
        <td>hash_A</td>
        <td>Last login Time</td>
    </tr>
</table>

> `id` is primary key <br>
> `email` and `password` used by to verify account and password <br>
> `email` will be used froeign key to connect other databases

#### User Question Database
<table>
    <tr>
        <th>email</th>
        <th>question_serial_number</th>
        <th>question_name</th>
        <th>question_max_score</th>
    </tr>
</table>


### Question Information Databases
<table>
    <tr>
        <th>question_id</th>
        <th>question_name</th>
        <th>question_difficulty</th>
        <th>question_types</th>
    </tr>
    <tr>
        <td>1</td>
        <td>x plus y</td>
        <td>easy</td>
        <td>math</td>
    </tr>
</table>

