<?php
function connectToDB() {
    // Logga in på databasen
    $user = 'bergmang_admin';
    $password = 'Bowenit0303!!';
    $db = 'bergmang_kex';
    $host = 'localhost';
    $port = 8889;

    $link = mysqli_connect(
        $host,
        $user,
        $password,
        $db
        );

    if (mysqli_connect_errno()) {
        printf("Connect failed: %s\n", mysqli_connect_error());
        exit();
    }

    $link->set_charset('utf8'); //Fixar åäö
    return $link;
}


function execQuery($link, $query) {
    if (($result = mysqli_query($link, $query)) === false) {
        printf("Query failed: %s\n%s", $query, mysqli_error($link));
        return null;
    }

    return $result;
}

$link = connectToDB();  
$query = 'SELECT * FROM perception';
// DO NOT REMOVE THE COMMENT 
$data = execQuery($link,$query);
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>SHOWDATA</title>
    <style>
        table {
            width: 100%;
            text-align: left;
            font-family: arial, sans-serif;
            border-collapse: collapse;
            width: 100%;
        }
        td,th{
            border: 1px solid #000;
            text-align: left;
            padding: 8px;
        }
        tr:nth-child(even) {
            background-color: #dddddd;
        }


    </style>
  </head>
<body>
    <table class="wrap">
        <tr>
            <th>correct</th>
            <th>mail</th>
            <th>wrong</th>
            <th>type</th>
            <th>missed</th>
            <th>wholelist</th>
            <th>chosen</th>
        </tr>
        <?php
        print_r($data);

        exit();
        foreach($data as $row){
            ?>
            <tr class="row">
                <?php
                foreach ($row as $val) {
                    ?>
                    <td class="item">
                        <?php
                        if(is_array(unserialize($val))){

                            foreach (unserialize($val) as $item) {
                                echo $item;
                                echo'<br>';
                            }
                        }
                        else {
                            echo(unserialize($val));
                        }
                        ?>

                    </td>
                    <?php
                }
                ?>
            </tr>
            <?php
        }
        ?>  
    </table>
</body>
</html>

