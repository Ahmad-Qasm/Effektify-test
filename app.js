const root= document.querySelector(".root")

function visualiseMetric(metrics){
    console.log("here we go", metrics);
    let toBeVisualised = metrics.map(metric => {
        return `<h3>${metric["key"]}</h3>`
    })
    console.log(toBeVisualised);
    return toBeVisualised.join("\n")
}
const metrecis = fetch('https://platform-staging.effektify.com/api/v1/inhouse/statistics', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer 4313BAD127DEB8C8C2494181BA547`
    }}).then(res => res.json()).then(data => {
        console.log(data);
        const str = visualiseMetric(data["metrics"])
        root.innerHTML = str
        console.log("elems ---->",str);
    })
console.log(metrecis);


window.addEventListener("DOMContentLoaded", ()=>{
    root.innerHTML = `<h4>sdfdsfdsgdh<h4/>`
    console.log("hello it is me");
})