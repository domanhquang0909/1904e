import React, { useEffect, useState } from "react";
import "./Main.css";
import { Link, useHistory } from "react-router-dom";
import { deleteQlsvToAPI, getPostFromAPI } from "../../API";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { storeListSV } from "../../../store";

const Main = () => {
  const [listProduct, setListProduct] = useState([]);
  const listData = useSelector((state) => state.token.listProduct);
  const dispatch = useDispatch();
  const history = useHistory();
  const searchHandle = (e) => {
    if (e.target.value.length > 1) {
      setListProduct(e.target.value.trim());
      setListProduct([]);
      listProduct.filter((data) => {
        if (
          data.title
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/đ/g, "d")
            .replace(/Đ/g, "D")
            .includes(
              e.target.value
                .toLowerCase()
                .trim()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/đ/g, "d")
                .replace(/Đ/g, "D")
            )
        ) {
          setListProduct((onSearch) => [...onSearch, data]);
        }
        return [];
      });
    } else {
      setListProduct(listData);
    }
  };

  useEffect(() => {
    async function getPostFromAPIF() {
      const res = await getPostFromAPI();
      setListProduct(res.data);
      console.log(res.data);

      dispatch(storeListSV.listproductHandle(res.data));
    }
    getPostFromAPIF();
  }, [dispatch]);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Danh Sách Sinh Viên</h3>
              </div>
              <div className="panel-body">
                
                  <table
                    className="table table-bordered table-hover">
                    
                  
                    <thead>
                      <tr>
                        <th>STT</th>
                        <th>Họ tên</th>
                        <th>Giới tính</th>
                        <th>Ngày sinh</th>
                        <th>Số điện thoại</th>
                        <th>Email</th>
                        <th>Địa chỉ</th>
                        <th>Hành động</th>
                      </tr>
                    </thead>

                    <tbody>
                    {listProduct.map((qlsv) => (
                      <tr key={qlsv.id}>
                        <td>{qlsv.id}</td>
                        <td>{qlsv.Hoten}</td>
                        <td>{qlsv.GioiTinh}</td>
                        <td>{qlsv.NgaySinh}</td>
                        <td>{qlsv.sdt}</td>
                        <td>{qlsv.email}</td>
                        <td>{qlsv.DiaChi}</td>
                        <td className="text-center">
                          <button type="button" className="btn btn-warning">
                            <Link to={`/page/update/${qlsv.id}`}>
                              <span className="fa fa-pencil mr-5"></span>Sửa
                            </Link>
                          </button>
                          &nbsp;
                          <button
                            className="btn btn-danger"
                            onClick={() => {
                              if (
                                window.confirm(
                                  "Bạn chắc muốn xóa sinh viên này chứ!"
                                )
                              ) {
                                deleteQlsvToAPI(qlsv.id);
                                history.replace("/page/qlsv");
                              }
                            }}
                          >
                            Xóa
                          </button>
                        </td>
                      </tr>))};
                    </tbody>
                  </table>
                
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
