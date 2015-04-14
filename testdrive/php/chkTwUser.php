<?php

session_start();
if (isset($_SESSION['twiterlogin'])) {
    echo 'done';
}