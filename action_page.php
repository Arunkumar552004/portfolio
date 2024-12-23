<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstname = $_POST['firstname'];
    $email = $_POST['email'];
    $address = $_POST['address'];
    $city = $_POST['city'];
    $state = $_POST['state'];
    $zip = $_POST['zip'];
    $cardname = $_POST['cardname'];
    $cardnumber = $_POST['cardnumber'];
    $expmonth = $_POST['expmonth'];
    $expyear = $_POST['expyear'];
    $cvv = $_POST['cvv'];

    // Process the data here, like saving it to a database
    // For now, just echo it back
    echo "Received data: ";
    echo "Full Name: $firstname, Email: $email, Address: $address, City: $city, State: $state, Zip: $zip, Card Name: $cardname, Card Number: $cardnumber, Expiration: $expmonth/$expyear, CVV: $cvv";
}
?>
