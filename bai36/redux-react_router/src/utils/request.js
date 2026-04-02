export const API_DOMAIN = `http://localhost:5000/`;

export const get = async (path) => {
    const res = await fetch(API_DOMAIN + path);
    const result = await res.json();
    return result
};

