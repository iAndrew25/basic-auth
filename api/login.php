<?php
	require_once('db.php');
	require_once('utils.php');

	$request_body = file_get_contents('php://input');
	if(isset($request_body)) {
		$data = json_decode($request_body);
		if(userExists($data->email)) {
			$userId = login($data->email, $data->password);
			if($userId) {
				echo json_encode(setResult(true, 'Success!', userData($userId)));
			} else {
				echo json_encode(setResult(false, 'Incorrect password.', null));
			}
		} else {
			echo json_encode(setResult(false, 'The e-mail you entered does not exist in our database.', null));
		}
	}
?>