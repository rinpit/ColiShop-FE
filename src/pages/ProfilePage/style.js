import { Upload } from "antd";
import styled from "styled-components";

export const WrapperHeader = styled.h1`
    color: #000;
    font-size: 18px;
    margin: 4px 0;

`

export const WrapperContentProfile = styled.div`
    display: flex;
    flex-direction: colum;
    border: 1px soild #ccc;
    width: 100%;
`
export const WrapperLabel = styled.label`
    color: #000;
    font-size: 12px;
`

export const WrapperUploadFile = styled(Upload)`
    & .ant-upload.ant-upload-select.ant-upload-select-picture-card {
        height: 60px;
        width: 60px;
        border-radius: 50%;
    }
    
    & .ant-upload-list-item-name {
        display: none
    }
`

