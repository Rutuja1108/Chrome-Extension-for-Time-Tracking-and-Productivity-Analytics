javascript
let isTracking = false;
let startTime = null;

document.getElementById("start").addEventListener("click", () => {
  isTracking = true;
  startTime = Date.now();
  chrome.storage.local.set({ startTime });
  document.getElementById("status").innerText = "Status: Tracking";
});
