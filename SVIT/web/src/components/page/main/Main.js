import React, { useEffect, useState } from "react";
import "./Main.css";
import { Link, useHistory } from "react-router-dom";
import { DeleteStudent, GetStudents } from "../../API";
import { useDispatch } from "react-redux";
import { storeListSV } from "../../../store";
import * as moment from 'moment';

const Main = () => {
  const [listProduct, setListProduct] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();
  

  useEffect(() => {
    async function LoadData() {
      const res = await GetStudents();
      setListProduct(res.data);
      console.log(res.data);

      dispatch(storeListSV.listproductHandle(res.data));
    }
    LoadData();
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
                        <td>{qlsv.GioiTinh === 1 ?"Nam" : "Nữ"}</td>
                        <td>{moment(new Date(qlsv.Ngaysinh)).format('DD-MM-YYYY')}</td>
                        <td>{qlsv.sdt}</td>
                        <td>{qlsv.email}</td>
                        <td>{qlsv.DiaChi}</td>
                        <td className="text-center">
                        <Link to={`/page/update/${qlsv.id}`}>
                          <button type="button" className="btn btn-warning">
                            
                              <span className="fa fa-pencil mr-5"></span>Sửa
                            
                          </button>
                          </Link>
                          &nbsp;
                          <button
                            className="btn btn-danger"
                            onClick={() => {
                              if (
                                window.confirm(
                                  "Bạn chắc muốn xóa sinh viên này chứ!"
                                )
                              ) {
                                DeleteStudent(qlsv.id);
                                history.replace("/page");
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
