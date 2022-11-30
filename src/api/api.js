import axios from "axios";

export const Get_Categories = async () => {
    const response = await axios.get(`https://api.thecatapi.com/v1/categories`)
    if (response.status === 200) return response.data

};

export const Get_Data_Cats = async (categoryId = 1) => {
    const response = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&page=0&category_ids=${categoryId}`)
    if (response.status === 200) return response.data
};




