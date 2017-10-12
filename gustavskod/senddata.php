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


	$query = "INSERT INTO answers (mail, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29, img30, img31) VALUES ('.$data[0].','.$data[1].','.$data[2].','.$data[3].','.$data[4].','.$data[5].','.$data[6].','.$data[7].','.$data[8].','.$data[9].','.$data[10].','.$data[11].','.$data[12].','.$data[13].','.$data[14].','.$data[15].','.$data[16].','.$data[17].','.$data[18].','.$data[19].','.$data[20].','.$data[21].','.$data[22].','.$data[23].','.$data[24].','.$data[25].','.$data[26].','.$data[27].','.$data[28].','.$data[29].','.$data[30].','.$data[31].')";
	execQuery($link,$query);
}
// echo'success!';
?>