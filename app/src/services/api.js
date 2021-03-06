const url = "http://localhost:3000/api/v1";

function get(route) {
  return fetch(`${url}${route}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
}

function post(route, params = {}) {
  return fetch(`${url}${route}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ params })
  }).then(res => res.json());
}

function deleteApi(route, params = {}) {
  return fetch(`${url}${route}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ params })
  }).then(res => res.json());
}

export const Api = {
  get,
  post,
  deleteApi
};
