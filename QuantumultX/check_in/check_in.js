*/

let Cookie = $prefs.valueForKey("check_inCookie");

let Req = {
  url: "https://renzhecloud.com/user/checkin",
  method: "POST",
  headers: {
    Cookie: Cookie,
    Origin: "https://renzhecloud.com",
    Referer: "https://renzhecloud.com/user",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36"
  }
};

$task.fetch(Req).then(response => {
  try {
    let doc = JSON.parse(response.body);
    if (doc["ret"] == 1) {
      $notify(
        "check_in",
        "成功",
        `${doc["msg"]}\n已使用流量${doc["trafficInfo"]["lastUsedTraffic"]}\n剩余流量${doc["trafficInfo"]["unUsedTraffic"]}`
      );
    } else {
      $notify("check_in", "成功", doc["msg"]);
    }
  } catch (error) {
    $notify("check_in", "失败", error);
  }
});
