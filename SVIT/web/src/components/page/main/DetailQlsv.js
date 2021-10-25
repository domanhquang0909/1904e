import React  from "react";
import { useSelector } from 'react-redux';
import { Link, useParams, useHistory } from 'react-router-dom';
import './DetaiQlsv.css';
import { DeleteStudent } from '../../API';


const DetailQlsv = () => {

    const lstSv= useSelector(state=>state.token.listProduct);
    
    const idParams=useParams();
    const qlsvdata= lstSv.filter(sv=>sv.id.toString()===idParams.qlsvId.toString())[0];
    const history=useHistory();

    
    return(
        
        <div className="card">
        <div className="row">
            
            <div className="col l-7 product-detail">
                <div className="product-detail__content">
                    <ul>
                    <h3>Chi tiết sinh viên</h3>
                        <li><span>tên sinh viên:</span>{qlsvdata.Hoten}</li>
                        <li><span>Giới tính:</span>{qlsvdata.GioiTinh}</li>
                        <li><span>Ngày sinh</span>{qlsvdata.NgaySinh}</li>
                        <li><span>Số điện thoại</span>{qlsvdata.sdt}</li>
                        <li><span>Email</span>{qlsvdata.email}</li>
                        <li><span>Địa chỉ</span>{qlsvdata.DiaChi}</li>
                        <li>
                            <Link to={`/page/update/${qlsvdata.id}`}>
                            <button className='button-fix'>Sửa</button>
                            </Link>
                            <button className='button-delete' onClick={()=> {if(window.confirm("Bạn chắc muốn xóa sinh viên này chứ!")){
                                DeleteStudent(qlsvdata.id);
                                history.replace('/page/qlsv');
                                }}}>Xóa</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
);
};
export default DetailQlsv;