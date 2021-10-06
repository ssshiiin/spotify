<?php
require 'vendor/autoload.php';

$session = new SpotifyWebAPI\Session(
    '098c333c3bff4931ae86ae6db551d00b',
    '4b0e1deb5da240e3bce0e965b5859a94',
    'http://localhost:8000'
);

$api = new SpotifyWebAPI\SpotifyWebAPI();

if (isset($_GET['code'])) {
    $session->requestAccessToken($_GET['code']);
    $api->setAccessToken($session->getAccessToken());

    print_r($api->me());
} else {
    $options = [
        'scope' => [
            'user-read-email',
        ],
    ];

    header('Location: ' . $session->getAuthorizeUrl($options));
    die();
}