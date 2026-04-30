export const API_DOMAIN = `http://localhost:3002/`;

export const get = async (path) => {
    const res = await fetch(API_DOMAIN + path);
    const result = await res.json();
    return result;
};

export const post = async (path, options) => {
  const res = await fetch(API_DOMAIN + path, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json"
    },
    body: JSON.stringify(options)
  });
  const result = await res.json();
  return result;
}