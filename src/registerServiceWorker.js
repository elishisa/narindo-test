import { Workbox } from "workbox-window";

let wb;

if ("serviceWorker" in navigator) {
  wb = new Workbox(`${process.env.BASE_URL}service-worker.js`);

  wb.addEventListener("controlling", () => {
    window.location.reload();
  });

  wb.register();
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  wb = null;
  console.log(`Boo! Workbox didn't load 😬`);
}

export default wb;