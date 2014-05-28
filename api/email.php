<?php 
    $headers = array();
    $headers[] = "Accept: application/json";
    $headers[] = "Content-Type: application/json";
    $directories = getcwd();
    if (strpos($directories,"prototype") !== false) {
        $configPath = __DIR__."/../../../config.php";
    } else {
        $configPath = __DIR__."/../../config.php";
    }
    require_once($configPath);
    require_once("recaptchalib.php");
    if($_POST) {
        $name = trim($_POST["name"]);
        $email = trim($_POST["email"]);
        $msg = trim($_POST["message"]);
        $subject = trim($_POST["subject"]);
        $recaptcha_challenge = trim($_POST["recaptcha_challenge_field"]);
        $recaptcha_response = trim($_POST["recaptcha_response_field"]);
        $privatekey = getRecaptchaApiKey();
        $resp = recaptcha_check_answer ($privatekey,
            $_SERVER["REMOTE_ADDR"],
            $recaptcha_challenge,
            $recaptcha_response
        );

        if (!$resp->is_valid) {
            $arr = array("code" => 2, "message" => "Looks like you entered the wrong captcha");
            echo json_encode($arr);
        } else {
            //email address settings
            $my_address = "natalia@santannaLaw.com";
            $headers = "From: ".$email;
            $message = "Contact name: $name\nContact Email: $email\nContact Message: \n".$msg;
            $to = $my_address;
            
            if ( $name == "") {
                $arr = array("code" => 0, "message" => "Name field is required");
            } else if (!preg_match("/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/", $email)) {
                $arr = array("code" => 0, "message" => "Enter a valid email address");
            } else if( strlen($subject) == "") {
                $arr = array("code" => 0, "message" => "Please Write Subject");
            } else if ( strlen($msg) < 10 ) {
                $arr = array("code" => 0, "message" => "Write more than 10 characters");
            } else {
                mail($to, $subject, $message, $headers);
                $arr = array("code" => 1, "message" => "success");
            }
            echo json_encode($arr);
        }
    }
?>