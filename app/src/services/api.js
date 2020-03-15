const url = "https://localhost:3000/api/v1/";

function* get() {
  const response = yield fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: ""
  });
  const data = yield response.status === 200 ? JSON.parse(response) : [];
  return data;
}

export const Api = {
  get
};
