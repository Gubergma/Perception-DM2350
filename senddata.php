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
  $data = $_POST['answers'];
  $data = explode("separator", $_POST['answers']);


  $list = array("email","type","list","chosen_objects","found_items","missed_items","wrong_answers");
  foreach ($list as $word) {
    $count = 0;
    foreach($data as $row) {
      $data[$count] = str_replace($word, '', $row);
      $count += 1;
    }
  }

  $count = 0;
  foreach($data as $wat) {
    $temp = preg_replace("/[^A-Za-z0-9]/", " ", $wat);
    $data[$count] = preg_replace('/\s\s+/', ' ', $temp);
    $count += 1;
  }


  $query ="INSERT INTO perception (mail, type, wholelist, chosen, correct, missed, wrong) VALUES ('$data[0]','$data[1]','$data[2]','$data[3]','$data[4]','$data[5]','$data[6]')";

	execQuery($link,$query);
}
// echo'success!';
?>