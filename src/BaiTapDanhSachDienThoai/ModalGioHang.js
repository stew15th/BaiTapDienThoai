import React, { Component } from "react";
import { Modal, Button } from "antd";

export default class ModalGioHang extends Component {
    state = {
        isOpen: false,
    };
    setVisible = (param) => {
        this.setState({ isOpen: param });
    };

    renderDanhSachGioHang = () => {
        let { handleThayDoiSoLuong } = this.props;
        return this.props.dataGioHang.map((item) => {
            return (
                <tr>
                    <td className="text-center">{item.maSP}</td>
                    <td className="text-center"> {item.tenSP}</td>
                    <td className="text-center">
                        <img
                            style={{ width: "50px" }}
                            src={item.hinhAnh}
                            alt=""
                        />
                    </td>
                    <td className="text-center"> {item.giaBan}</td>
                    <td className="text-center">
                        <button
                            onClick={() => {
                                handleThayDoiSoLuong(item.maSP, -1);
                            }}
                            className="btn btn-danger text-center">
                            -
                        </button>
                        <span className="m-2">{item.soLuong}</span>
                        <button
                            onClick={() => {
                                handleThayDoiSoLuong(item.maSP, +1);
                            }}
                            className="btn btn-success text-center">
                            +
                        </button>
                    </td>
                    <td className="text-center">
                        {item.giaBan * item.soLuong}
                    </td>
                </tr>
            );
        });
    };
    renderTotalSanPham = () => {
        return this.props.dataGioHang.reduce((a, b) => {
            return a + b.soLuong;
        }, 0);
    };
    render() {
        return (
            <div>
                <>
                    <div
                        className="container"
                        style={{
                            display: "flex",
                            justifyContent: "end",
                            padding: "20px",
                        }}>
                        <button
                            className="mb-5 ml-auto btn btn-primary"
                            onClick={() => this.setVisible(true)}>
                            Gi??? h??ng {this.renderTotalSanPham()}
                        </button>
                    </div>
                    <Modal
                        title="Gi??? H??ng"
                        centered
                        visible={this.state.isOpen}
                        onOk={() => this.setVisible(false)}
                        onCancel={() => this.setVisible(false)}
                        width={1000}>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className="text-center">M?? S???n Ph???m</th>
                                    <th className="text-center">
                                        T??n S???n Ph???m
                                    </th>
                                    <th className="text-center">H??nh ???nh</th>
                                    <th className="text-center">????n Gi??</th>
                                    <th className="text-center">S??? L?????ng</th>
                                    <th className="text-center">Th??nh Ti???n</th>
                                </tr>
                            </thead>
                            <tbody>{this.renderDanhSachGioHang()}</tbody>
                        </table>
                    </Modal>
                </>
            </div>
        );
    }
}
