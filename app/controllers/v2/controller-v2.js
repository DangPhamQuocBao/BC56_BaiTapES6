const MON_CHAY = true;
const CON_MON = false;

export let renderFoodList = (list) => {
  let contentHTML = "";
  list
    .reverse()
    .forEach(({ ma, ten, loai, gia, khuyenMai, tinhTrang, moTa, hinhAnh }) => {
      let trString = `<tr>
                        <td>${ma}</td>
                        <td>${ten}</td>
                        <td>${
                          loai == MON_CHAY
                            ? "<span class=text-warning>Chay</span>"
                            : "<span class=text-success>Mặn</span>"
                        }</td>
                        <td>${gia}</td>
                        <td>${khuyenMai}</td>
                        <td>0</td>
                        <td>${tinhTrang == CON_MON ? "Còn" : "Hết"}</td>
                        <td>
                        <button class=' btn btn-warning' onclick="deleteFood(${ma})">Xóa</button>
                        <button class=' btn btn-success' onclick="editFood(${ma})">Sửa</button>
                        </td>
                    </tr>`;
      contentHTML += trString;
    });
  document.getElementById("tbodyFood").innerHTML = contentHTML;
};

export let showThongTinLenForm = () => {};
export let onSuccess = (message) => {
  Swal.fire(message, "", "success");
};
