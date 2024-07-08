export const isJsonString = (data) => {
    try {
        JSON.parse(data)
    } catch (error) {
        return false;
    }
    return true;
}

export const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

export function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

export const renderOptions = (arr) => {
    let results = []
    if (arr) {
        results = arr?.map((opt) => {
            return {
                label: opt,
                value: opt
            }
        })
    }
    results.push({
        label:'Thêm Type',
        value: 'add_type'
    })
    return results;
}


// chuyển đổi chỗ giá tiền dấu , thành dấu . 
// hiện tại thì kh bị lỗi nên kh cần dùng
export const convertPrice = (price) => {
    try {
        // const result = price?.toLocaleString().replaceAll(',', '.')
        const result = price?.toLocaleString()
        return `${result} VNĐ` 
    } catch (error) {
        return null
    }
}