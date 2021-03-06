<?php
    if (strpos(getcwd(),"prototype") !== false) {
        $prototype = true;
    } else {
        $prototype = false;
    }
?>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>Santanna Law Office | Immigration Law</title>
    <meta name="description" content="At Santanna Law Offices, we represent detained and non-detained individuals in diverse immigration matters. Contact us for a legal consultation.">
    <meta name="keywords" content="immigration, law, santanna, natalia, office, citizenship, appeals, attorney">
    <meta name="google-translate-customization" content="97780874fc735aab-80397fadca97d164-ge3cd0643912ea04b-13"></meta>   
    <link rel="author" href="humans.txt" /> 
    <link rel="apple-touch-icon-precomposed" sizes="152x152" href="apple-touch-icon-152x152-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="apple-touch-icon-144x144-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="120x120" href="apple-touch-icon-120x120-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="apple-touch-icon-114x114-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="76x76" href="apple-touch-icon-76x76-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="apple-touch-icon-72x72-precomposed.png">
    <link rel="apple-touch-icon-precomposed" href="apple-touch-icon-precomposed.png">

    <link rel="icon" href="favicon.ico" sizes="16x16 32x32 48x48 64x64" type="image/vnd.microsoft.icon">

    <meta name="viewport" content="width=device-width">
    <link href='http://fonts.googleapis.com/css?family=Rosario:400,400italic,700,700italic' rel='stylesheet' type='text/css'>

    <?php
        if ($prototype === true) {
            echo '<link rel="stylesheet" href="css/main.css">';
        } else {
            echo '<link rel="stylesheet" href="css/main.min.css">';
        }
    ?>

    <script src="js/vendor/modernizr-2.6.2.mv2sa.custom.min.js"></script>
    <script src='js/vendor/picturefill.min.js' async></script>
    <!--[if lt IE 9]>
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.0.min.js"><\/script>')</script>
    <![endif]-->
    <!--[if gte IE 9]><!-->
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-2.1.0.min.js"><\/script>')</script>
    <!--<![endif]-->
    <?php
        if ($prototype === true) {
            echo '<script src="js/main.js"></script>';
        } else {
            echo '<script src="js/main.min.js"></script>';
        }
    ?>
    
    <?php
        if ($page == 'contactUs') {
            echo '<script src="js/vendor/jquery.validate.min.js"></script>';
            if ($prototype === true) {
                echo '<script src="js/contactUs.js"></script>';
            } else {
                echo '<script src="js/contactUs.min.js"></script>';
            }
            echo '<script src="http://www.google.com/recaptcha/api/js/recaptcha_ajax.js"></script>';
        }
    ?>

</head>