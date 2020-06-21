const baseUrl = process.env.REACT_APP_BACKEND_HOST;

export const deleteWorkshop = (secondaryID) => {
  return fetch(`${baseUrl}/admin/workshop/${secondaryID}`, {
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
