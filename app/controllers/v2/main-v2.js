import { onSuccess, renderFoodList } from "./controller-v2.js";
import foodServ from "../../service/service.js";
import { layThongTin } from "../v1/controler-v1.js";

// render food list

let fetchFoodList = () => {
  foodServ
    .getList()
    .then((res) => {
      console.log(res);
      renderFoodList(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
fetchFoodList();

let deleteFood = (id) => {
  foodServ
    .deleteFood(id)
    .then((res) => {
      onSuccess("Xóa thành công");
      fetchFoodList();
    })
    .catch((err) => {
      console.log(err);
    });
};

window.deleteFood = deleteFood;

window.addFood = () => {
  console.log("first");
  let data = layThongTin();
  foodServ
    .addFood(data)
    .then((res) => {
      $("#myModal").modal("hide");
      onSuccess("Thêm thành công");

      console.log(res);
      fetchFoodList();
    })
    .catch((err) => {
      console.log(err);
    });
};

window.editFood = () => {
  $("#myModal").modal("show");
};
