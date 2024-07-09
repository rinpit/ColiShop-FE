import React from "react";
import { useParams } from "react-router-dom";
import ProductDetailsComponent from "../../components/ProductDetailsComponent/ProductDetailsComponent";

const ProductDetailsPage = () => {
    // lấy params id của products
    const { id } = useParams()
    return (
        <div>
            {/* truyền id qua bên ProductDetailsComponent */}
            <ProductDetailsComponent idProduct={id}/>
        </div>
    )
}

export default ProductDetailsPage