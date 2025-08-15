
let isTracking = false;
let startTime = null;

document.getElementById("start").addEventListener("click", () => {
  isTracking = true;
  startTime = Date.now();
  chrome.storage.local.set({ startTime });
  document.getElementById("status").innerText = "Status: Tracking";
});
document.getElementById("stop").addEventListener("click", () => {
  isTracking = false;
  chrome.storage.local.get("startTime", (data) => {
    const elapsed = Math.round((Date.now() - data.startTime) / 60000);
    document.getElementById("time").innerText = `Tracked Time: ${elapsed} mins`;
  });
  document.getElementById("status").innerText = "Status: Stopped";
});
 cloud
