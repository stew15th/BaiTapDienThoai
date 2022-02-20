import React, { Component } from "react";
import ItemDienThoai from "./ItemDienThoai";

export default class DanhSachDienThoai extends Component {
    renderDSDT = () => {
        return this.props.dsdt.map((item, index) => {
            return (
                <ItemDienThoai
                    handleOnClick={this.props.handleSanPhamChiTiet}
                    key={index}
                    data={item}
                    handleTHemGioHang={this.props.handleTHemGioHang}
                />
            );
        });
    };
    render() {
        return (
            <div className="container d-flex justify-content-around">
                {this.renderDSDT()}
            </div>
        );
    }
}
