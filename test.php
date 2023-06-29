<?php
    $password_hash = password_hash("admin", PASSWORD_BCRYPT);
    echo $password_hash;
?>