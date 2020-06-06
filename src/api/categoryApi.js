import { handleResponse, handleError } from "./apiUtils";
const BASE_URL = "http://localhost:4000/api/categories/";

export function getCategories() {
  return fetch(BASE_URL).then(handleResponse).catch(handleError);
}

export function saveCategory(category) {
  return fetch(BASE_URL, {
    method: "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      ...category,
    }),
  })
    .then(handleResponse)
    .catch(handleError);
}
export function deleteCategoryApi(id) {
  return fetch(BASE_URL + id, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
