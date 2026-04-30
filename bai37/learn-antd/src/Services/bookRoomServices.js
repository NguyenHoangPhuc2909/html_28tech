import { get, post } from "../utils/request";

export const getBookRoom = async () => {
    const result = await get(`book-room`);
    return result;
};

export const postBookRoom = async (options) => {
    const result = await post(`book-room`, options);
    return result;
};

