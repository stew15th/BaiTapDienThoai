import React, { Component } from "react";
import ChiTietDienThoai from "./ChiTietDienThoai";
import DanhSachDienThoai from "./DanhSachDienThoai";
import { danhSachDienThoai } from "./DataDienThoai";
import ItemDienThoai from "./ItemDienThoai";
import ModalGioHang from "./ModalGioHang";
export default class BaiTapDanhSachDienThoai extends Component {
    state = {
        sanPhamChiTiet: {
            maSP: 1,
            tenSP: "VinSmart Live",
            manHinh: "AMOLED, 6.2, Full HD+",
            heDieuHanh: "Android 9.0 (Pie)",
            cameraTruoc: "20 MP",
            cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
            ram: "4 GB",
            rom: "64 GB",
            giaBan: 5700000,
            hinhAnh: "./img/vsphone.jpg",
        },
        gioHang: [],
    };
    handleThemSanPham = (sanPham) => {
        let cloneGioHang = [...this.state.gioHang];
        let indexSanPham = this.state.gioHang.findIndex((item) => {
            return item.maSP === sanPham.maSP;
        });
        if (indexSanPham === -1) {
            sanPham.soLuong = 1;
            cloneGioHang.push(sanPham);
        } else {
            cloneGioHang[indexSanPham].soLuong++;
        }
        this.setState({
            gioHang: cloneGioHang,
        });
    };

    handleSanPhamChiTiet = (sanPham) => {
        this.setState({ sanPhamChiTiet: sanPham });
    };
    handleThayDoiSoLuong = (id, type) => {
        let cloneGioHang = [...this.state.gioHang];
        let indexSanPham = this.state.gioHang.findIndex(
            (item) => item.maSP === id
        );
        if (indexSanPham !== -1 && type == 1) {
            cloneGioHang[indexSanPham].soLuong++;
        }
        if (indexSanPham !== -1 && type == -1) {
            if (cloneGioHang[indexSanPham].soLuong === 1) {
                cloneGioHang.splice(indexSanPham, 1);
            } else {
                cloneGioHang[indexSanPham].soLuong--;
            }
        }

        this.setState({ gioHang: cloneGioHang });
    };

    render() {
        return (
            <div className="py-5">
                <ModalGioHang
                    dataGioHang={this.state.gioHang}
                    handleThayDoiSoLuong={this.handleThayDoiSoLuong}
                />
                <DanhSachDienThoai
                    dsdt={danhSachDienThoai}
                    handleSanPhamChiTiet={this.handleSanPhamChiTiet}
                    handleTHemGioHang={this.handleThemSanPham}
                />
                <div className="container py-2">
                    <ChiTietDienThoai data={this.state.sanPhamChiTiet} />
                </div>
            </div>
        );
    }
}
