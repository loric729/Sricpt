hostname = api*.tiktokv.com, api*.musical.ly, api*.amemv.com, aweme*.snssdk.com, *tiktokcdn.com

#TikTok 美区解锁
(.*video_id=\w{32})(.*watermark=)(.*) url 302 $1
(?<=(carrier|account|sys)_region=)CN url 307 JP
(?<=version_code=)\d{1,}.\d{1}\.\d{1} url 307 14.0.0
(?<=(carrier|account|sys|sim)_region=)cn url 307 in
^https://aweme-eagle(.*)\.snssdk\.com\/aweme/.+/(feed|aweme/post|follow/feed)/ url script-response-body Aweme.js
^https?:\/\/.+\.(amemv|musical|snssdk|tiktokv)\.(com|ly)\/(api|motor)\/ad\/ url reject-img
