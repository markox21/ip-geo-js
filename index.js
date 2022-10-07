const OPTIONS = {
  method: "GET",
  url: "https://ip-geolocation-and-threat-detection.p.rapidapi.com/54.85.132.205",
  headers: {
    "X-RapidAPI-Key": "5198686c2bmsh0e9c797af8ec8d9p19f051jsnef61552cbe4e",
    "X-RapidAPI-Host": "ip-geolocation-and-threat-detection.p.rapidapi.com",
  },
};

const fetchIpInfo = (ip) => {
  return fetch(
    `https://ip-geolocation-and-threat-detection.p.rapidapi.com/${ip}`,
    OPTIONS
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));
};
const $ = (selector) => document.querySelector(selector);

const $form = $("#form");
const $input = $("#input");
const $submit = $("#submit");
const $results = $("#results");

$form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const { value } = $input;
  if (!value) return;

  $submit.setAttribute("disabled", "");
  $submit.setAttribute("aria-busy", "true");

  const ipInfo = await fetchIpInfo(value);

  if (ipInfo) {
    $results.innerHTML = JSON.stringify(ipInfo, null, 2);
  }
  $submit.removeAtrribute("disabled");
  $submit.removeAttribute("aria-busy");
});
