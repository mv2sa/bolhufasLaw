<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <?php $page = $_GET['page']; ?>
    <?php include('includes/headIncludes.php'); ?>
    <body>
        <?php include('includes/header.php'); ?>
        <div id="globalBackToTop">
            <a href="#backToTop">
            </a>
        </div>
        <main>
        <?php
            if (file_exists('content/'.$page.'.html')) {
                include('content/'.$page.'.html');
            } elseif (!file_exists('content/'.$page.'.html')) {
                include('content/404.html');
            } else {
                include('content/home.html');
            }
        ?>
        </main>
        <?php include('includes/footer.php'); ?>
    </body>
</html>
