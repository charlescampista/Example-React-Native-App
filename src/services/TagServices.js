import api from "./api";


export const getAllTags = async () => {
    const result = await api.get(`/products/categories`);
    return result;
}