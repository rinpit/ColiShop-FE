import axios from "axios"
import { axiosJWT } from "./UserServices"

export const getAllProduct = async (search, limit) => {
    let res = {};
    // console.log("search", !!search, search?.length)
    // check điều kiện nếu có data search thì thực hiện search dữ liệu, còn kh thì thực hiện getAll như bình thường// check bằng cách khi nhập input search thì độ dài > 0 
    if (search?.length > 0) {
        res = await axios.get(`${process.env.REACT_APP_API_URL}/product/getAll?filter=name&filter=${search}&limit=${limit}`)
    } else {
        res = await axios.get(`${process.env.REACT_APP_API_URL}/product/getAll?limit=${limit}`)
    }
    return res.data
    // console.log("data", res.data)
}


export const getProductType = async (type) => {
    // Nếu mà có type thì sẽ return về res data
    if (type) {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/product/getAll?filter=type&filter=${type}`)
        return res.data
    }
    // console.log("data", res.data)
}

export const createProduct = async (data) => {
    const res = await axios
        .post(`${process.env.REACT_APP_API_URL}/product/create`, data)
    return res.data
}



export const getDetailsProduct = async (id) => {
    const res = await axios
        .get(`${process.env.REACT_APP_API_URL}/product/details/${id}`)
    return res.data
}

export const updateProduct = async (id, access_token, data) => {
    const res = await axios
        .put(`${process.env.REACT_APP_API_URL}/product/update/${id}`, data, {
            headers: {
                token: `Bearer ${access_token}`,
            }
        })
    return res.data
}


export const deleteProduct = async (id, access_token) => {
    const res = await axios
        .delete(`${process.env.REACT_APP_API_URL}/product/delete/${id}`, {
            headers: {
                token: `Bearer ${access_token}`,
            }
        })
    return res.data
}

export const getAllTypeProduct = async () => {
    const res = await axios
        .get(`${process.env.REACT_APP_API_URL}/product/getAllType`)
    return res.data
}
