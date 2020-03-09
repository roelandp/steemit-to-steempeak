var host = "http://steempeak.com";
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: host + details.url.match(/^https?:\/\/[^\/]+([\S\s]*)/)[1]};
    },
    {
        urls: [
            "*://steemit.com/*",
            "*://www.steemit.com/*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);
