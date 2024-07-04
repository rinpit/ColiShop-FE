import React from 'react'
import { useNavigate } from 'react-router-dom'

const TypeProduct = ({ name }) => {
    const navigate = useNavigate()
    const handleNavigateType = (type) => {
        navigate(`/product/${type.normalize('NFD').replace(/[\u0300-\u036f]/g, '')?.replace(/ /g, '_')}`, {state: type})
    }
    return (
        <div className="widget-body">
            <ul className="cat-list">
                <li>
                    {/* <a href="#">{name}
                        <span className="products-count"></span>
                    </a> */}
                    <span
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleNavigateType(name)}
                    >{name}</span>
                </li>
            </ul>
        </div>
    )
}

export default TypeProduct