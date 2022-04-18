export const getCatsFacts = () =>
  fetch("https://catfact.ninja/facts?limit=20").then(res => res.json());
