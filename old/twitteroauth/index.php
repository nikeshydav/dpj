<?php

/**
 * @file
 * User has successfully authenticated with Twitter. Access tokens saved to session and DB.
 */
/* Load required lib files. */
session_start();
require_once('twitteroauth/twitteroauth.php');
require_once('config.php');

/* If access tokens are not available redirect to connect page. */
if (empty($_SESSION['access_token']) || empty($_SESSION['access_token']['oauth_token']) || empty($_SESSION['access_token']['oauth_token_secret'])) {
    header('Location: ./clearsessions.php');
}
/* Get user access tokens out of the session. */
$access_token = $_SESSION['access_token'];

/* Create a TwitterOauth object with consumer/user tokens. */
$connection = new TwitterOAuth(CONSUMER_KEY, CONSUMER_SECRET, $access_token['oauth_token'], $access_token['oauth_token_secret']);

/* If method is set change API call made. Test is called by default. */
$content = $connection->get('account/verify_credentials');

if ($content->id != "") {
    #echo '"name":"' . $content->name . '","id":"' . $content->id . '", "img": "' . $content->profile_image_url . '"';
    #setcookie("twitters", '"name":"' . $content->name . '","id":"' . $content->id . '", "img": "' . $content->profile_image_url . '"', time() + 3600);
    require_once '../php/db.php';
    $sql = "INSERT INTO user_tw (twid,name, img) VALUES ('" . $content->id . "', '" . $content->name . "', '" . $content->profile_image_url . "');";
    mysql_query($sql);
    $_SESSION['twiterid'] = mysql_insert_id();
    $_SESSION['twiterlogin'] = 'yes';
    echo '<script>window.close();</script>';
    die();
}
/* Some example calls */
//$connection->get('users/show', array('screen_name' => 'abraham'));
//$connection->post('statuses/update', array('status' => date(DATE_RFC822)));
//$connection->post('statuses/destroy', array('id' => 5437877770));
//$connection->post('friendships/create', array('id' => 9436992));
//$connection->post('friendships/destroy', array('id' => 9436992));

/* Include HTML to display on the page */
include('html.inc');
