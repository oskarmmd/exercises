const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];
const tbodyPointer = document.querySelector("tbody");
showTheseVehicles(vehicles);

function showTheseVehicles(arr) {
  tbodyPointer.innerHTML = "";

  arr.forEach((each) => {
    const type = each.type ?? "";
    const fuel = each.fuel ?? "";
    const passengers = (each.passengers ?? "") === 0 ? 0 : each.passengers ?? "";
    const stops = Array.isArray(each.stops) ? each.stops.join(", ") : "";
    const ownedBy = each.ownedBy ?? "";
    const isElectric = each.isElectric ? "Ja" : "";
    const isTandem = each.isTandem ? "Ja" : "";

    tbodyPointer.innerHTML += `
      <tr>
        <td>${type}</td>
        <td>${fuel}</td>
        <td>${passengers}</td>
        <td>${stops}</td>
        <td>${ownedBy}</td>
        <td>${isElectric}</td>
        <td>${isTandem}</td>
      </tr>`;
  });
}

const breadcrumb = document.getElementById("breadcrumbs");

function filterElectric() {
  const result = vehicles.filter((v) => v.isElectric);
  showTheseVehicles(result);
  breadcrumb.textContent = "Alle køretøjer > El-drevne";
}

function filterMoreSeats() {
  const result = vehicles.filter((v) => v.passengers > 2);
  showTheseVehicles(result);
  breadcrumb.textContent = "Alle køretøjer > Mere end 2 sæder";
}

function filterJonasEl() {
  const result = vehicles.filter((v) => v.isElectric && v.ownedBy === "Jonas");
  showTheseVehicles(result);
  breadcrumb.textContent = "Alle køretøjer > Jonas' el-drevne";
}

function filterRugbroed() {
  const result = vehicles.filter((v) => v.fuel === "Rugbrød" && v.passengers > 1);
  showTheseVehicles(result);
  breadcrumb.textContent = "Alle køretøjer > Rugbrøds-drevne";
}

function showAll() {
  showTheseVehicles(vehicles);
  breadcrumb.textContent = "Alle køretøjer";
}

document.getElementById("btn-electric").addEventListener("click", filterElectric);
document.getElementById("btn-seats").addEventListener("click", filterMoreSeats);
document.getElementById("btn-jonas").addEventListener("click", filterJonasEl);
document.getElementById("btn-rugbroed").addEventListener("click", filterRugbroed);
document.getElementById("btn-all").addEventListener("click", () => {
  showTheseVehicles(vehicles);
});
