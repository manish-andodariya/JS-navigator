window.addEventListener("load", () => {
  let isonline = document.querySelector(".isonline");
  isonline.innerText = window.navigator.onLine
    ? "🙌 You are Online."
    : "👎 You are Offline.";
  isonline.classList = window.navigator.onLine ? "online" : "offline";

  let res = window.navigator.getBattery().then((x) => {
    document.querySelector(".ischarging").innerText = x.charging
      ? "Charger Detected"
      : "No Charger Detected";

    document.querySelector(".lastcharge").innerText =
      x.dischargingTime &&
      "Last Charged " + Math.round(x.dischargingTime / 60, 2) + " Minutes Ago";

    document.querySelector(".batterylevel").innerText =
      x.level && "Battery Level Is " + Math.round(x.level * 100) + " %";
  });
});
