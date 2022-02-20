import React, { Component } from "react";

export default class ItemDienThoai extends Component {
    render() {
        let { tenSP, hinhAnh } = this.props.data;
        let { handleOnClick, handleTHemGioHang } = this.props;

        return (
            <div className="card" style={{ width: "25%" }}>
                <img
                    className="card-img-top"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                    src={hinhAnh}
                />
                <h5 className="card-title pl-3 text-center">{tenSP}</h5>
                <div className="card-body row">
                    <button
                        onClick={() => {
                            handleOnClick(this.props.data);
                        }}
                        className="btn btn-primary mr-2">
                        Xem Chi Tiết
                    </button>
                    <button
                        className="col-6"
                        className="btn btn-danger"
                        onClick={() => {
                            handleTHemGioHang(this.props.data);
                        }}>
                        Thêm Giỏ Hàng
                    </button>
                </div>
            </div>
        );
    }
}
