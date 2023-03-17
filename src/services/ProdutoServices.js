import api from "./api";

export const getAllProducts = async () => {
    const result = await api.get(`/products`);
    return result;
};