import { InputNumber } from "antd";
import styled from "styled-components";

export const WrapperQualityProduct = styled.div`
    display: flex;
    gap: 4px;
    align-items: center;
    width: 120px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 20px;
`


export const WrapperInputNumber = styled(InputNumber)`
    &.ant-input-number.ant-input-number-sm {
        width: 80px;
        border-top: none;
        border-bottom: none;
        border-radius: none;
    };
    .ant-input-number-handler-wrap {
        display: none !important;        
    }
    .ant-input-number-input-wrap {
        margin-left: 6px; 
    }    
`