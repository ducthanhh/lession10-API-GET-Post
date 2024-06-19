import React, { useState } from 'react';
import axios from '../api/nldtApi';

export default function nldtCategoryFrom({ onCloseForm, onCategorySubmit }) {
    const [nldtCategoryName, setnldtCategoryName] = useState("");
    const [nldtCategoryStatus, setnldtCategoryStatus] = useState(true);

    const nldtHandleClose = () => {
        onCloseForm(false);
    }

    const nldtHandleSubmit = async (event) => {
        event.preventDefault();
        let nldtCategory = {
            nldtId: 0,
            nldtCategoryName: nldtCategoryName,
            nldtCategoryStatus: nldtCategoryStatus
        };
        console.log("nldtCategory", nldtCategory);
        await axios.post("nldtCategory", nldtCategory);
    }

    return (
        <div>
            <form>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Category Name</span>
                    <input
                        type="text"
                        className="form-control"
                        name='nldtCategoryName'
                        value={nldtCategoryName}
                        onChange={(ev) => setnldtCategoryName(ev.target.value)}
                        placeholder="Category Name"
                        aria-label="Category Name"
                        aria-describedby="basic-addon1"
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon2">Category Status</span>
                    <select
                        name='nldtCategoryStatus'
                        value={nldtCategoryStatus}
                        onChange={(ev) => setnldtCategoryStatus(ev.target.value === 'true')}
                        className='form-select'
                    >
                        <option value={true}>Hien thi</option>
                        <option value={false}>Tam khoa</option>
                    </select>
                </div>
                <button className='btn btn-success' onClick={nldtHandleSubmit}>Thêm mới</button>
                <button className='btn btn-danger' onClick={nldtHandleClose}>Đóng</button>
            </form>
        </div>
    );
}