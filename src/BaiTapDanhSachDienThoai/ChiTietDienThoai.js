import React, { Component } from "react";

export default class ChiTietDienThoai extends Component {
    render() {
        let {
            hinhAnh,
            heDieuHanh,
            tenSP,
            giaBan,
            manHinh,
            cameraSau,
            cameraTruoc,
            ram,
            rom,
        } = this.props.data;
        return (
            <div className="row container pt-4">
                <img
                    className="col-5"
                    style={{
                        width: "300px",
                        height: "400px",
                        objectFit: "cover",
                    }}
                    src={hinhAnh}
                />
                <div className="col-7">
                    <p>Tên Sản Phẩm: {tenSP}</p>
                    <p>Màn Hình: {manHinh}</p>

                    <p>Hệ Điều Hảnh: {heDieuHanh}</p>
                    <p>Cam Sau: {cameraSau}</p>
                    <p>Cam Trước: {cameraTruoc}</p>
                    <p>Ram: {ram}</p>
                    <p>Rom: {rom}</p>
                    <p>Giá Bán: {giaBan}</p>
                </div>
            </div>
        );
    }
}
