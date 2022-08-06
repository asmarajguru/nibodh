<?php

$servername="localhost";
$username="root";
$password="";
$display ="You are connected to database";
$database_name="database17";

$conn = mysqli_connect($servername,$username,$password,$database_name);
if(!$conn)
{
	die("Connection failed:".mysqli_connect_error());
}

if(isset($_POST['submit']))
{
	$Name = $_POST['Name'];
	$Phone_no =$_POST['Phone_no'];
	$Email_id = $_POST['Email_id'];
	$User_id = $_POST['User_id'];
	$Password = $_POST['Password'];

	$sql_query = "INSERT INTO  entry_details(name,phone_number,email_id,user_id,password)
	Values('$Name','$Phone_no','$Email_id','$User_id','$Password')";

	if(mysqli_query($conn, $sql_query))
	{
		print "Thank You for connecting with us. You can enjoy our Online services.";
	}
	else
	{
		print "Error: " . $sql . "" . mysqli_error($conn);
	}
	mysqli_close($conn);
}
?>