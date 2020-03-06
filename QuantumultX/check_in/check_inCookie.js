*/

let headerCookie = $request.headers["Cookie"];

if (headerCookie) {
  if ($prefs.valueForKey("check_inCookie") != undefined) {
    if ($prefs.valueForKey("check_inCookie") != headerCookie) {
      var cookie = $prefs.setValueForKey(headerCookie, "check_inCookie");
      if (!cookie) {
        $notify("获取Cookie失败！", "", "");
      } else {
        $notify("获取Cookie成功！", "", "");
      }
    }
  } else {
    let cookie = $prefs.setValueForKey(headerCookie, "check_inCookie");
    if (!cookie) {
      $notify("首次写入Cookie失败！", "", "");
    } else {
      $notify("首次写入Cookie成功！", "", "");
    }
  }
}
$done({});
