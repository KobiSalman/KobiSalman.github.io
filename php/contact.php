<?php

	$firstname = $_POST['firstname'];
	$lastname = $_POST['lastname'];
	$subject = $_POST['subject'];
	$content = $_POST['content'];
	
	$mailTo = "salmankobi@gmail.com";
	$subject = "Contact Us";
	$body = "Answer";

	mail ($mailTo, $subject, $body);
	
	echo "Sent!";

?>