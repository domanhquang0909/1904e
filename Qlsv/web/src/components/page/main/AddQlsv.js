import React,  {useRef} from "react";
import { postQlsvToAPI } from '../../API';

const AddQlsv = () =>{
    const Hoten = useRef();
    const id = useRef();
    const GioiTinh = useRef();
    const NgaySinh = useRef();
    const sdt = useRef();
    const email = useRef();
    const DiaChi = useRef();


    const submit= async (e) =>{
        e.preventDefault();
        let data ={
            "Hoten": Hoten.current.value,
            "Ngaysinh": new Date(NgaySinh.current.value).toISOString(),
            "GioiTinh": parseInt(GioiTinh.current.value),
            "DiaChi": DiaChi.current.value,
            "sdt": sdt.current.value,
            "email": email.current.value,
            
        }

        let status = await postQlsvToAPI( data);
        if(status.statusText=== "OK"){
            alert('Thêm thông tin sinh viên thành công!');

        }else{
            alert('Thêm thông tin sinh viên không thành công');
        }
    }

    return (
        <div className="card" onSubmit={submit}>
            <div className="main-update">

                <form className='update-product'>
                    <ul>
                        <h2>Thêm sinh viên</h2>
                        <li>
                            <span>Tên sinh viên:</span>
                            <input ref={Hoten} type="text" placeholder='Nhập tên sinh viên ' />
                        </li>
                        <li>
                            <span>Mã sinh viên</span>
                            <input ref={id} type="text" placeholder='Nhập mã sinh viên ' />
                        </li>
                        <li>
                            <span>Giới tính</span>
                            <input ref={GioiTinh} type="radio" value="1" />Nam
                            <input rel={GioiTinh} type="radio" value="2"/>Nữ

                        </li>
                        <li>
                            <span>Ngày sinh</span>
                            <input ref={NgaySinh} type="date" placeholder='Nhập ngày sinh ' />
                        </li>
                        <li>
                            <span>Số điện thoại</span>
                            <input ref={sdt} type="text" placeholder='Nhập số điện thoại '  />
                        </li>
                        <li>
                            <span>Email</span>
                            <input ref={email} type="email" placeholder='Nhập email ' />
                        </li>
                        <li>
                            <span>địa chỉ</span>
                            <input ref={DiaChi} type="text" placeholder='Nhập địa chỉ ' />
                        </li>
                        
                        <button className='btn-add' type="submit">Thêm sinh viên</button>
                    </ul>
                </form>
            </div>
        </div>
    );
};
export default AddQlsv;