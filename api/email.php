<?php 
    $headers = array();
    $headers[] = 'Accept: application/json';
    $headers[] = 'Content-Type: application/json';

    if($_POST) {
        $name = trim($_POST['name']);
        $email = trim($_POST['email']);
        $msg = trim($_POST['message']);
        $subject = trim($_POST['subject']);
        //email address settings
        $my_address = "natalia@santannaLaw.com";
        $headers = "From: ".$email;
        $message = "Contact name: $name\nContact Email: $email\nContact Message: $msg";
        $to = $my_address;
        
        if ( $name == "") {
            $arr = array('code' => 0, 'message' => 'Name field is required');
        } else if (!preg_match("/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/", $email)) {
            $arr = array('code' => 0, 'message' => 'Enter a valid email address');
        } else if( strlen($subject) == "") {
            $arr = array('code' => 0, 'message' => 'Please Write Subject');
        } else if ( strlen($msg) < 10 ) {
            $arr = array('code' => 0, 'message' => 'Write more than 10 characters');
        } else {
            mail($to, $subject, $message, $headers);
            $arr = array('code' => 1, 'message' => 'success');
        }
        echo json_encode($arr);
    }
?>