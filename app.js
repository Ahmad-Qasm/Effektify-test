const metricsContainer = document.querySelector(".metric-container");

function visualiseMetric(metrics) {
  return metrics
    .map((metric) => {
      return `<article class="metric">
          <h3>${metric.key}</h3>
          <h5>${metric.env}</h5>
          <p class="description">description: ${metric.description}</p>
          <p class="values">value: ${metric.values.value}</p>
        </article>`;
    })
    .join("\n");
}

const url = "https://platform-staging.effektify.com/api/v1/inhouse/statistics";
const authKey = "4313BAD127DEB8C8C2494181BA547";
const metrecis = fetch(url, {
  method: "GET",
  headers: {
    Authorization: `Bearer ${authKey}`,
  },
})
  .then((res) => res.json())
  .then((data) => {
    const metrics = data["metrics"];
    const str = visualiseMetric(metrics);
    metricsContainer.innerHTML = str;
  })
  .catch((error) => {
    console.error("Error:", error);
  });
