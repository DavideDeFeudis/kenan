const baseUrl = process.env.REACT_APP_BACKEND_HOST;

export const deleteWorkshop = (_id) => {
  return fetch(`${baseUrl}/admin/workshop/${_id}`, {
    method: "delete",
  })
    .then((response) => {
      response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createWorkshop = (formData) => {
  fetch(`${baseUrl}/admin/workshop`, {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log("json:", json);
    })
    .catch((err) => {
      console.log(err);
    });
};
