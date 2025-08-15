javascript
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ startTime: null });
});
 
