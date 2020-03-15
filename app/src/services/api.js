const url = "http://localhost:3000/api/v1";

function* get(route) {
  return yield fetch(`${url}${route}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
}

function* post(route, params) {
  return yield fetch(`${url}${route}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ params })
  }).then(res => res.json());
}

export const Api = {
  get,
  post
};
