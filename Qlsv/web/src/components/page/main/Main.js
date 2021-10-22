import React, {useEffect, useState} from 'react';
import './Main.css';
import {Link} from 'react-router-dom';
import { getPostFromAPI } from '../../API';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { storeListSV } from '../../../store';

const Main = () => {
    const [listProduct, setListProduct] = useState([]);
    const listData = useSelector(state=>state.token.listProduct);
    const dispatch = useDispatch();

    const searchHandle = e => {
        if(e.target.value.length > 1) {
            setListProduct(e.target.value.trim())
            setListProduct([]);
            listProduct.filter(data => {
                if(data.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').includes((e.target.value).toLowerCase().trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D'))) {
                    setListProduct(onSearch=>[...onSearch, data])
                }
                return [];
            })
        } else {
            setListProduct(listData);
        }
    }

    useEffect(() => {
        async function getPostFromAPIF() {
            const res = await getPostFromAPI()
            setListProduct(res.data);
            console.log(res.data);
            
            dispatch(storeListSV.listproductHandle(res.data));
        }
        getPostFromAPIF();
    }, [dispatch]);


    return (
            
            <div class="container">
                
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        
                        <div class="panel panel-primary">
                              <div class="panel-heading">
                                    <h3 class="panel-title">Danh sách sinh viên</h3>
                              </div>
                              <div>
                              {listProduct.map((qlsv) => 
                              <div class="panel-body" key={qlsv.id}>
                                   <Link to={`/page/qlsv/${qlsv.id}`}>
                                   <table class="table table-bordered table-hover">
                                      
                                       <thead>
                                           <tr>
                                               <th>Mã Sinh Viên</th>
                                               <th>Tên Sinh Viên</th>
                                               <th>Giới tính</th>
                                               <th>Ngày sinh</th>
                                               <th>Số điện thoại</th>
                                               <th>Email</th>
                                               <th>Địa chỉ</th>
                                               
                                           </tr>
                                       </thead>
                                       <tbody>
                                           <tr>
                                               <td>{qlsv.id}</td>
                                               <td>{qlsv.Hoten}</td>
                                               <td>{qlsv.GioiTinh}</td>
                                               <td>{qlsv.NgaySinh}</td>
                                               <td>{qlsv.sdt}</td>
                                               <td>{qlsv.email}</td>
                                               <td>{qlsv.DiaChi}</td>

                                           </tr>
                                       </tbody>
                                       
                                   </table>
                                   </Link>
                                   </div>)}
                                   
                              </div>
                        </div>
                        
                    </div>
                </div>
                
            </div>
    )
                              
                              }


export default Main;