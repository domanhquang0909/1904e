import React, { useRef } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { UpdateStudent } from '../../API';
import './UpdateQlsv.css';

const UpdateQlsv = () => {
    const listSV = useSelector(state=>state.svStore.listProduct);
    const idParams = useParams();
    const data = listSV.filter(sv=>sv.id.toString() === idParams.updateId.toString())[0];
    const Hoten = useRef();
    const id = useRef();
    const GioiTinh = useRef();
    const NgaySinh = useRef();
    const sdt = useRef();
    const email = useRef();
    const DiaChi = useRef();
    

    const submitHandle = async e => {
        e.preventDefault();
        console.log(parseInt(GioiTinh.current.value));
        const result = await UpdateStudent(data.id, {
            "id":data.id,
            "Hoten": Hoten.current.value,
            "GioiTinh": parseInt(GioiTinh.current.value),
            "Ngaysinh":  new Date(NgaySinh.current.value).toISOString(),
            "sdt": sdt.current.value,
            "email": email.current.value,
            "DiaChi": DiaChi.current.value,
            
        })

        if(result.status === 204) {
            alert('Sửa thành công!')
        } else {
            alert('Thất bại!')
        }
    }
    return (
        <div className="card">
            <div className="main-update">
                <form className='update-product' onSubmit={submitHandle}>
                    <ul>
                        <h2>Thay đổi thông tin sinh viên {idParams.updateId}</h2>
                        <li>
                            <span>Họ và tên</span>
                            <input ref={Hoten} type="text" defaultValue={data.Hoten} />
                        </li>
                        <li>
                            <span>Mã sinh viên</span>
                            <input ref={id} type="text" defaultValue={data.id} />
                        </li>
                        <li>
                            <span>Giới tính</span>
                            <input ref={GioiTinh} type="radio" id="rdoNam" name="GioiTinh" defaultValue="1" checked={data.GioiTinh === 1 ? "checked" : ""}/>Nam
                            <input ref={GioiTinh} type="radio" id="rdoNu" name="GioiTinh" defaultValue="2"  />Nữ
                        </li>
                        <li>
                            <span>Ngày sinh:</span>
                            <input ref={NgaySinh} type="date" defaultValue={data.NgaySinh} />
                        </li>
                        <li>
                            <span>Số điện thoại</span>
                            <input ref={sdt} type="text"  defaultValue={data.sdt} />
                        </li>
                        <li>
                            <span>Email</span>
                            <input ref={email} type="email" defaultValue={data.email} />
                        </li>
                        <li>
                            <span>Địa chỉ</span>
                            <input ref={DiaChi} type="text" defaultValue={data.DiaChi} />
                        </li>
                    
                        <button className='button-fix' type="submit">Sửa</button>
                    </ul>
                </form>
            </div>
        </div>
    );
};

export default UpdateQlsv;