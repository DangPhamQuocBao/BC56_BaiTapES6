const BASE_URL = "https://64ddb297825d19d9bfb164a3.mockapi.io/food";
let getList = () => {
  return axios({
    url: BASE_URL,
    method: "GET",
  });
};
let deleteFood = (id) => {
  return axios({
    url: `${BASE_URL}/${id}`,
    method: "DELETE",
  });
};
let addFood = (food) => {
  return axios({
    url: BASE_URL,
    method: "POST",
    data: food,
  });
};
let foodServ = {
  getList,
  deleteFood,
  addFood,
};
export default foodServ;
