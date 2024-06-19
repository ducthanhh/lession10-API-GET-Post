import React from 'react'

export default function nldtCategoryList({ rendernldtCateGories, onAddNew }) {
    console.log("rendernldtCategories: ", rendernldtCateGories);
    let nldtCategoryElement = rendernldtCateGories.map((nldtCategory, index) => {
        return (
            <tr key={index}>
                <th>{index + 1}</th>
                <td>{nldtCategory.nldtId}</td>
                <td>{nldtCategory.nldtCategoryName}</td>
                <td>{nldtCategory.nldtCategoryStatus ? "Hien thi" : "Tam khoa"}</td>
            </tr>
        )
    })

    const nldtHandleAdd = ()=>{
        onAddNew(true);
    }
    return (
        <div className='container m-2'>
            <h2>Danh sach loai san pham</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Ma loai</th>
                        <th>Ten loai</th>
                        <th>Trang thai</th>
                        <th>Chuc nang</th>
                    </tr>
                </thead>
                <tbody>
                    {nldtCategoryElement}
                </tbody>
            </table>
            <button className='btn btn-primary' onClick={nldtHandleAdd}>Them moi</button>
        </div>
    )
}