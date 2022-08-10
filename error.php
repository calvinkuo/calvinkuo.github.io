<?php

switch(getenv("REDIRECT_STATUS"))
{
	case 400:
	$error_code = "400 Bad Request";
	break;

	case 401:
	$error_code = "401 Unauthorized";
	break;

	case 403:
	$error_code = "403 Forbidden";
	break;

	case 404:
	$error_code = "404 Not Found";
	break;

	case 500:
	$error_code = "500 Internal Server Error";
	break;

	case 502:
	$error_code = "502 Bad Gateway";
	break;

	case 504:
	$error_code = "504 Gateway Timeout";
	break;
	
	default:
	$error_code = "Unknown Error";
	break;
}
?>

<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<title><?php print ($error_code); ?></title>
		<link rel="stylesheet" type="text/css" href="/style.css" media="screen" />
		<link rel="stylesheet" type="text/css" href="/print.css" media="print" />
		<link rel="shortcut icon" href="/favicons/favicon.ico" type="image/x-icon" />
	</head>
	<body>
		<header>
			<h1><?php print ($error_code); ?></h1>
		</header>
		<div class="content">
			<p>Whoops! Looks like there's been an error.</p>
			<a href="#" onclick="window.history.back();return false;">Go Back</a>
		</div>
		<footer>
			<ul class="hl">
				<li><a href="/">Home</a></li>
				<li><a href="/sitemap.html">Site Map</a></li>
			</ul>
		</footer>
		
		<script type="text/javascript" src="/scga.js"></script>
		<noscript>
			<div class="statcounter">
				<a title="web analytics" href="http://statcounter.com/" target="_blank">
					<img class="statcounter" src="http://c.statcounter.com/10093404/0/ad17771f/1/" alt="web analytics" />
				</a>
			</div>
		</noscript>
	</body>
</html>