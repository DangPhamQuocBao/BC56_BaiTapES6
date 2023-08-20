import { layThongTin, showThongTin } from "./controler-v1.js";
import MonAn from "../../models/v1/model-v1.js";

let themMon = () => {
  // lấy thông tin từ forrm
  let data = layThongTin();
  let { ma, ten, loai, gia, khuyenMai, tinhTrang, hinhMon, moTa } = data;
  let monAn = new MonAn(
    ma,
    ten,
    loai,
    gia,
    khuyenMai,
    tinhTrang,
    hinhMon,
    moTa
  );
  console.log(monAn);
  showThongTin(monAn);
};

window.addFood = themMon;
