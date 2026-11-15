chrome.action.onClicked.addListener((tab) => {
  if (!tab.url || tab.url.startsWith("chrome://")) return;

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      document.designMode = document.designMode === "on" ? "off" : "on";
      return document.designMode;
    }
  }, (results) => {
    if (results && results[0]) {
      const estado = results[0].result;
      chrome.action.setBadgeText({
        tabId: tab.id,
        text: estado === "on" ? "ON" : ""
      });
      chrome.action.setBadgeBackgroundColor({
        tabId: tab.id,
        color: "#22c55e"
      });
    }
  });
});
