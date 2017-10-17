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



if (isset($_POST['answers'])) {
	$data = explode("ans", $_POST['answers']);
  natsort($data);
  $mail = array_pop($data);
  array_unshift($data, $mail);


  // $query ="INSERT INTO perception (answer) VALUES ('.$data[0].')";

	execQuery($link,$query);
}
// echo'success!';
?>