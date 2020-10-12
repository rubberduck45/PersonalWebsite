<?php
$servername = "sql106.byetcluster.com";
$username = "b13_25344894";
$password = "rohil123";
$dbname = "b13_25344894_email";

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$msg = $_POST['msg'];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO website (Name, Email, Subject, Message)
VALUES ('$name', '$email', '$subject', '$msg' )";

if ($conn->query($sql) === TRUE) {
  include 'contact.html';
}
else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
