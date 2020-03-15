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

function* post(data) {
  const response = yield fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: data
    })
  });
  console.log(response);
  return yield response.status === 201;
}

export const Api = {
  get,
  post
};
