var obj = JSON.parse($response.body); 
obj['show_ads'] = false;
obj['premium_calling'] = true;
$done({body: JSON.stringify(obj)});



/*
#textnow去广告
^https:\/\/api\.textnow\.me\/api2.0\/users\/.* url script-response-body QuantumultX/textnow.js
*/
