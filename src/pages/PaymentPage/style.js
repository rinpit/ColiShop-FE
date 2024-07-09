import { InputNumber, Radio } from "antd";
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

export const WrapperInfo = styled.div`
    padding: 17px 20px; 
    border-bottom: 1px solid #f5f5f5;
    background: #fff;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    width: 100%;
`

export const Label = styled.span`
    font-size: 12px;
    color: #000;
    font-weight: bold;
`

export const WrapperRadio = styled(Radio.Group)`
    margin-top: 6px;
    background: rgb(240, 248, 255);
    border: 1px solid rgb(194,255,255);
    width: 500px;
    border-radius: 4px;
    height: 100px;
    padding: 16px;
    font-weight: normal;
    display: flex;
    flex-direction: colimn;
    gap: 10px;
    justify-content: center;
`
