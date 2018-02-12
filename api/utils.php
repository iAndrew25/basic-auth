<?php
	require_once('db.php');

	function userExists($username) {
		global $con;
		$username = sanitize($username);

		return mysqli_num_rows(mysqli_query($con, "SELECT * FROM users WHERE email = '$username' OR username = '$username'")) == 1 ? true : false;
	}

	function login($username, $password) {
		global $con;
		$username = sanitize($username);
		$userID = userIDFromUsername($username);
		$password = $password;//md5(sanitize($password));

		return mysqli_num_rows(mysqli_query($con, "SELECT * FROM users WHERE (email = '$username' OR username = '$username') AND password = '$password'")) == 1 ? $userID : false;
	}

	function userIDFromUsername($username) {
		global $con;
		$username = sanitize($username);

		return mysqli_fetch_array(mysqli_query($con, "SELECT id FROM users WHERE email = '$username' OR username = '$username'"), MYSQLI_ASSOC)['id'];
	}
	
	function userData($userID){
		global $con;
		$userID = (int)$userID;

		return mysqli_fetch_array(mysqli_query($con, "SELECT username, email, name, token FROM users WHERE id = $userID"), MYSQLI_ASSOC);
	}

	function sanitize($data) {
		global $con;
		return mysqli_real_escape_string($con, $data);	
	}

	function setResult($success, $message, $payload) {
		$result = new stdClass();
		$result->success = $success;
		$result->message = $message;
		$result->payload = $payload;
		return $result;
	}

?>