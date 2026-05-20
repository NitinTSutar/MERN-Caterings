import api from "../api/axios";

export const getCaterers = async () => {
  const response = await api.get("/caterers");
  return response.data;
};

export const getCatererById = async(id) =>{
  const response = await api.get(`/caterers/${id}`)
  return response.data;
}

export const createCaterer = async (data) => {
  const response = await api.post("/caterers", data);
  return response.data;
};