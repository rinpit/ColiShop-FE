import React, { useEffect, useRef, useState } from 'react'
import { WrapperHeader, WrapperUploadFile } from './style'
import { Button, Form, Input, Modal, Select, Space } from 'antd'
import { PlusOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import TableComponent from '../TableComponent/TableComponent';
import { UploadOutlined } from '@ant-design/icons'
import { getBase64, renderOptions } from '../../utils';
import { useMutationHooks } from "../../hooks/useMutationHook";
import * as ProductService from "../../services/ProductServices"
import Loading from "../LoadingComponent/Loading";
import * as message from '../../components/Message/Message'
import { useQuery } from 'react-query';
import { render } from '@testing-library/react';
import DrawerComponent from '../DrawerComponent/DrawerComponent';
import { useSelector } from 'react-redux';
import ModalComponent from '../ModalComponent/ModalComponent';
import { SearchOutlined } from '@mui/icons-material';

const AdminProduct = () => {
  // để hiện thị modal tạo sản phẩm
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [rowSelected, setRowSelected] = useState('')
  // để hiển thị drawer edit products
  const [isOpenDrawer, setIsOpenDrawer] = useState(false)
  // để hiển thị modal DELETE sản phẩm
  const [isModalOpenDelete, setIsModalOpenDelete] = useState(false)
  // hiển thị loading update
  const [isLoadingUpdate, setIsLoadingUpdate] = useState(false)
  // sort, filter, search
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);

  //khởi tạo type select khi nhấn vào thêm type sản phẩm
  const [typeSelect, setTypeSelect] = useState('');


  // lấy info user từ redux
  const user = useSelector((state) => state?.user)
  // khai báo state của products
  const [stateProduct, setStateProduct] = useState({
    msp: '',
    name: '',
    image: '',
    type: '',
    rating: '',
    description: '',
    price: '',
    discount: '',
    countInStock: '',
    size: '',
    brand: '',
    newType: ''
  })
  // khai báo state của riêng products details
  const [stateProductDetails, setStateProductDetails] = useState({
    msp: '',
    name: '',
    image: '',
    type: '',
    rating: '',
    description: '',
    price: '',
    discount: '',
    countInStock: '',
    size: '',
    brand: ''
  })

  // sử dụng form 
  const [form] = Form.useForm();
  // mutaiton create product lấy các trường  data input 
  const mutation = useMutationHooks(
    (data) => {
      const {
        msp,
        name,
        image,
        type,
        rating,
        description,
        price,
        discount,
        countInStock,
        size,
        brand } = data
      const res = ProductService.createProduct({
        msp,
        name,
        image,
        type,
        rating,
        description,
        price,
        discount,
        countInStock,
        size,
        brand
      })
      return res;
    }
  )

  // console.log("RowSelected", rowSelected)
  // mutation update products lấy các trường data cần để cho api update
  const mutationUpdate = useMutationHooks((data) => {
    // console.log("dataMutation", data)
    const { id, token, ...rests } = data
    const res = ProductService.updateProduct(id, token, { ...rests }) // cần có ...rests vì nó cũng là một object, rải ra, fix lỗi kh hiển thị sau khi update
    return res;
  },
  )

  // mutation update products lấy các trường data cần để cho api DELETE
  const mutationDeleted = useMutationHooks((data) => {
    // console.log("dataMutation", data)
    const { id, token } = data
    const res = ProductService.deleteProduct(id, token) // cần có ...rests vì nó cũng là một object, rải ra, fix lỗi kh hiển thị sau khi update
    return res;
  },
  )



  // func getAllProduct
  const getAllProducts = async () => {
    const res = await ProductService.getAllProduct()
    return res
  }

  // func lấy dữ liệu chi tiết từ product
  const fetchGetDetailsProduct = async (rowSelected) => {
    const res = await ProductService.getDetailsProduct(rowSelected)
    // nếu có data thì set giá trị vào form
    if (res?.data) {
      setStateProductDetails({
        msp: res?.data?.msp,
        name: res?.data?.name,
        image: res?.data?.image,
        type: res?.data?.type,
        rating: res?.data?.rating,
        description: res?.data?.description,
        price: res?.data?.price,
        discount: res?.data?.discount,
        countInStock: res?.data?.countInStock,
        size: res?.data?.size,
        brand: res?.data?.brand
      })
    }
    // console.log("res", res?.data)
    setIsLoadingUpdate(false) //khi thực hiện func xong thì set loading update lại thành false
  }

  // cách khắc phục lỗi khi set state mà không hiển thị dữ liệu ở form
  useEffect(() => {
    form.setFieldsValue(stateProductDetails)
  }, [form, stateProductDetails])

  // khắc phục lỗi lần đầu click thì kh hiển thị state, lần thứ hai thì sẽ hiển hị
  useEffect(() => {
    if (rowSelected && isOpenDrawer) {
      setIsLoadingUpdate(true) // click vào edit thì nếu ... thì set loading update == true
      fetchGetDetailsProduct(rowSelected)
    }
  }, [rowSelected, isOpenDrawer])

  // console.log("StateProduct", stateProductDetails)
  //=======================
  const handleDetailsProduct = () => {
    setIsOpenDrawer(true) // form khi click vào thì sẽ hiển thị lên 
  }

  //lấy type sản phẩm 
  const fetchAllTypeProduct = async () => {
    const res = await ProductService.getAllTypeProduct()
    return res;
  }

  const { data, isLoading, isSuccess, isError } = mutation
  const { data: dataUpdated, isLoading: isLoadingUpdated, isSuccess: isSuccessUpdated, isError: isErrorUpdated } = mutationUpdate
  const { data: dataDeleted, isLoading: isLoadingDeleted, isSuccess: isSuccessDeleted, isError: isErrorDeleted } = mutationDeleted



  // console.log("dataUpdated", dataUpdated)
  // khai báo các biến sử dụng useQuery để lấy getAllProducts
  const queryProduct = useQuery({ queryKey: ['products'], queryFn: getAllProducts })
  const typeProduct = useQuery({ queryKey: ['type-product'], queryFn: fetchAllTypeProduct })



  const { isLoading: isLoadingProducts, data: products } = queryProduct
  // render hai biểu tượng delete và edit dành cho products
  const renderAction = () => {
    return (
      <div>
        <DeleteOutlined style={{ fontSize: '30px', cursor: 'pointer' }} onClick={() => setIsModalOpenDelete(true)} />
        <EditOutlined style={{ fontSize: '30px', marginLeft: '10px', cursor: 'pointer' }} onClick={handleDetailsProduct} />
      </div>
    )
  }

  console.log("typeProduct", typeProduct)
  // search, sort, filter ==========================================================================
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={`${selectedKeys[0] || ''}`}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1890ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    // render: (text) =>
    //   searchedColumn === dataIndex ? (
    //     <Highlighter
    //       highlightStyle={{
    //         backgroundColor: '#ffc069',
    //         padding: 0,
    //       }}
    //       searchWords={[searchText]}
    //       autoEscape
    //       textToHighlight={text ? text.toString() : ''}
    //     />
    //   ) : (
    //     text
    //   ),
  });

  // các thuộc tính của bảng render ra dữ liệu products
  const columns = [
    {
      title: 'MSP',
      dataIndex: 'msp',
      key: 'msp',
      render: (text) => <a>{text}</a>,
      // sort
      // sorter: (a, b) => a.msp.length - b.msp.length,
      // search
      ...getColumnSearchProps('msp')
    },
    {
      title: 'Name',
      dataIndex: 'name',
      ...getColumnSearchProps('name')
    },
    {
      title: 'Price',
      dataIndex: 'price',
      sorter: (a, b) => a.price - b.price,
      // filter
      filters: [
        {
          text: '>=100k',
          value: '>=',
        },
        {
          text: '<100k',
          value: '<',
        }
      ],
      onFilter: (value, record) => {
        if (value === '>=') {
          return record.price >= 100000
        } else if (value === '<') {
          return record.price < 100000
        }
      }
    },
    {
      title: 'Discount',
      dataIndex: 'discount',
      sorter: (a, b) => a.discount - b.discount
    },
    {
      title: 'Size',
      dataIndex: 'size',
    },
    {
      title: 'Count In Stock',
      dataIndex: 'countInStock',
      sorter: (a, b) => a.countInStock - b.countInStock
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: renderAction
    },
  ];
  // dữ liệu của tất cả product khi render
  const dataTable = products?.data?.length && products?.data?.map((product) => {
    return {
      ...product,
      key: product._id,
    }
  })
  // console.log("products", products)

  // useEffect sau khi tạo sản phẩm thành công
  useEffect(() => {
    if (isSuccess && data?.status === 'OK') {
      message.success()
      handleCancel()
    } else if (isError) {
      message.error()
    }
  }, [isSuccess])


  // useEffect sau khi DELETE sản phẩm thành công
  useEffect(() => {
    if (isSuccessDeleted && dataDeleted?.status === 'OK') {
      message.success()
      handleCancelDelete()
    } else if (isErrorDeleted) {
      message.error()
    }
  }, [isSuccessDeleted])

  // nhấn huỷ form khi update products
  const handleCloseDrawer = () => {
    setIsOpenDrawer(false);
    setStateProductDetails({
      msp: '',
      name: '',
      image: '',
      type: '',
      rating: '',
      description: '',
      price: '',
      discount: '',
      countInStock: '',
      size: '',
      brand: ''
    })
    form.resetFields()
  };


  // useEffect sau khi update sản phẩm thành công
  useEffect(() => {
    if (isSuccessUpdated && dataUpdated?.status === 'OK') {
      message.success()
      handleCloseDrawer()
    } else if (isErrorUpdated) {
      message.error()
    }
  }, [isSuccessUpdated])

  // nhấn huỷ form khi delete products
  const handleCancelDelete = () => {
    setIsModalOpenDelete(false)
  };


  // handleDeleteProduct dành cho delete products
  const handleDeleteProduct = () => {
    mutationDeleted.mutate({ id: rowSelected, token: user?.access_token }, {
      onSettled: () => {
        queryProduct.refetch()
      }
    })
  }

  // nhấn huỷ form khi create products
  const handleCancel = () => {
    setIsModalOpen(false);
    setStateProduct({
      msp: '',
      name: '',
      image: '',
      type: '',
      rating: '',
      description: '',
      price: '',
      discount: '',
      countInStock: '',
      size: '',
      brand: ''
    })
    form.resetFields()
  };
  // onFinish dành cho tạo mới products
  const onFinish = () => {
    const params = {
      msp: stateProduct.msp,
      name: stateProduct.name,
      image: stateProduct.image,
      type: stateProduct.type === 'add_type' ? stateProduct.newType : stateProduct.type,
      rating: stateProduct.rating,
      description: stateProduct.description,
      price: stateProduct.price,
      discount: stateProduct.discount,
      countInStock: stateProduct.countInStock,
      size: stateProduct.size,
      brand: stateProduct.brand,
    }
    mutation.mutate(params,
      // sau khi update xong thì reload lại mới có data => đoạn code dưới kh cần reload vẫn có data
      {
        onSettled: () => {
          queryProduct.refetch();
        }
      })
    // console.log("Finish", stateProduct)
  }
  // handleOnChange dành cho nhập input create products
  const handleOnChange = (e) => {
    setStateProduct({
      ...stateProduct,
      [e.target.name]: e.target.value
    })
  }

  // handleOnChange dành cho products details
  const handleOnChangeDetails = (e) => {
    // console.log("check", e.target.name, e.target.value)
    setStateProductDetails({
      ...stateProductDetails,
      [e.target.name]: e.target.value
    })
  }

  // handleOnChangeAvatar dành cho create product
  const handleOnChangeAvatar = async ({ fileList }) => {
    const file = fileList[0]
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setStateProduct({
      ...stateProduct,
      image: file.preview
    })
  }
  // handleOnChangeAvatar dành cho product details
  const handleOnChangeAvatarDetails = async ({ fileList }) => {
    const file = fileList[0]
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setStateProductDetails({
      ...stateProductDetails,
      image: file.preview
    })
  }

  // console.log("user", user)
  // hàm để thực hiện nhấn button để update products
  const onUpdateProduct = () => {
    //Lỗi update mà vẫn kh cập nhật ở trong dữ liệu
    // mutationUpdate.mutate({ id: rowSelected, token: user?.access_token, stateProductDetails })
    // KHẮC PHỤC
    mutationUpdate.mutate({ id: rowSelected, token: user?.access_token, ...stateProductDetails },
      // sau khi update xong thì reload lại mới có data => đoạn code dưới kh cần reload vẫn có data
      {
        onSettled: () => {
          queryProduct.refetch();
        }
      })
  }
  // handleChangeSelect dùng để khi chọn thêm type thì nó sẽ hiện ra một input để add thêm type 
  const handleChangeSelect = (value) => {
    setStateProduct({
      ...stateProduct,
      type: value
    })
  }

  return (
    <div>
      <WrapperHeader>Quản Lý Sản Phẩm</WrapperHeader>
      {/* button hiển thị form để tạo sản phẩm */}
      <div style={{ marginTop: '20px' }}>
        <Button
          style={{
            height: '100px',
            width: '150px',
            borderRadius: '6px',
            borderStyle: 'dashed'
          }}
          onClick={() => setIsModalOpen(true)}
        >
          <PlusOutlined
            style={{
              fontSize: '40px'
            }} />
        </Button>
      </div>

      {/* component hiển thị dữ liệu products */}
      <div style={{ marginTop: '20px', }}>
        <TableComponent columns={columns} isLoading={isLoadingProducts}
          data={dataTable}
          onRow={(record, rowIndex) => {
            return {
              onClick: event => {
                setRowSelected(record._id)
              },
            };
          }}
        />
      </div>

      {/* component tạo sản phẩm */}
      <ModalComponent forceRender title="Tạo Sản Phẩm" open={isModalOpen} onCancel={handleCancel} footer=''>
        <Loading isLoading={isLoading}>
          <Form
            name="basic"
            labelCol={{ span: 7 }}
            wrapperCol={{ span: 17 }}
            onFinish={onFinish}
            autoComplete="on"
            form={form}
          >
            {/* MSP */}
            <Form.Item
              label="MSP"
              name="msp"
              rules={[{ required: true, message: 'Please input your msp!' }]}
            >
              <Input value={stateProduct.msp} onChange={handleOnChange} name="msp" />
            </Form.Item>
            {/* Name */}
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: 'Please input your Name!' }]}
            >
              <Input value={stateProduct.name} onChange={handleOnChange} name="name" />
            </Form.Item>
            {/* Type */}
            <Form.Item
              label="Type"
              name="type"
              rules={[{ required: true, message: 'Please input your Type!' }]}
            >
              <Select
                name="type"
                value={stateProduct.type}
                onChange={handleChangeSelect}
                options={renderOptions(typeProduct?.data?.data)}
              />
            </Form.Item>
            {/* Select information */}
            {stateProduct.type === 'add_type' && (
              <Form.Item
                label="New Type"
                name="newType"
                rules={[{ required: true, message: 'Please input your Type!' }]}
              >
                <Input value={stateProduct.newType} onChange={handleOnChange} name="newType" />
              </Form.Item>
            )}
            {/* Rating */}
            <Form.Item
              label="Rating"
              name="rating"
              rules={[{ required: true, message: 'Please input your rating!' }]}
            >
              <Input value={stateProduct.rating} onChange={handleOnChange} name="rating" />
            </Form.Item>
            {/* Description */}
            <Form.Item
              label="Description"
              name="description"
              rules={[{ required: true, message: 'Please input your description!' }]}
            >
              <Input value={stateProduct.description} onChange={handleOnChange} name="description" />
            </Form.Item>
            {/* Price */}
            <Form.Item
              label="Price"
              name="price"
              rules={[{ required: true, message: 'Please input your price!' }]}
            >
              <Input value={stateProduct.price} onChange={handleOnChange} name="price" />
            </Form.Item>
            {/* Discount */}
            <Form.Item
              label="Discount"
              name="discount"
              rules={[{ required: true, message: 'Please input your price!' }]}
            >
              <Input value={stateProduct.discount} onChange={handleOnChange} name="discount" />
            </Form.Item>
            {/* CountInStock */}
            <Form.Item
              label="Count In Stock"
              name="countInStock"
              rules={[{ required: true, message: 'Please input your count In Stock!' }]}
            >
              <Input value={stateProduct.countInStock} onChange={handleOnChange} name="countInStock" />
            </Form.Item>
            {/* size */}
            <Form.Item
              label="Size"
              name="size"
              rules={[{ required: true, message: 'Please input your Size!' }]}
            >
              <Input value={stateProduct.size} onChange={handleOnChange} name="size" />
            </Form.Item>
            {/* brand */}
            <Form.Item
              label="Brand"
              name="brand"
              rules={[{ required: true, message: 'Please input your Brand!' }]}
            >
              <Input value={stateProduct.brand} onChange={handleOnChange} name="brand" />
            </Form.Item>
            {/* Image */}
            <Form.Item
              label="Image"
              name="image"
              rules={[{ required: true, message: 'Please input your Image!' }]}
            >
              <WrapperUploadFile onChange={handleOnChangeAvatar} maxCount={1}>
                <Button icon={<UploadOutlined />}>Select File</Button>
                {stateProduct?.image && (
                  <img src={stateProduct?.image} style={{
                    height: '60px',
                    width: '60px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    marginTop: '20px'
                  }} alt='avatar' />
                )}
              </WrapperUploadFile>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 19, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Create
              </Button>
            </Form.Item>
          </Form>
        </Loading>
      </ModalComponent>

      {/* component khi edit sản phẩm*/}
      <DrawerComponent title='Chi tiết sản phẩm' isOpen={isOpenDrawer} onClose={() => setIsOpenDrawer(false)} width='60%'>
        <Loading isLoading={isLoadingUpdate || isLoadingUpdated}>
          <Form
            name="basic"
            labelCol={{ span: 7 }}
            wrapperCol={{ span: 17 }}
            onFinish={onUpdateProduct}
            autoComplete="on"
            form={form}
          >
            {/* Id */}
            <Form.Item
              label="MSP"
              name="msp"
              rules={[{ required: true, message: 'Please input your msp!' }]}
            >
              <Input value={stateProductDetails.msp} onChange={handleOnChangeDetails} name="msp" />
            </Form.Item>
            {/* Name */}
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: 'Please input your Name!' }]}
            >
              <Input value={stateProductDetails.name} onChange={handleOnChangeDetails} name="name" />
            </Form.Item>

            {/* Type */}
            <Form.Item
              label="Type"
              name="type"
              rules={[{ required: true, message: 'Please input your Type!' }]}
            >
              <Input value={stateProductDetails.type} onChange={handleOnChangeDetails} name="type" />
            </Form.Item>
            {/* Rating */}
            <Form.Item
              label="Rating"
              name="rating"
              rules={[{ required: true, message: 'Please input your rating!' }]}
            >
              <Input value={stateProductDetails.rating} onChange={handleOnChangeDetails} name="rating" />
            </Form.Item>
            {/* Description */}
            <Form.Item
              label="Description"
              name="description"
              rules={[{ required: true, message: 'Please input your description!' }]}
            >
              <Input value={stateProductDetails.description} onChange={handleOnChangeDetails} name="description" />
            </Form.Item>
            {/* Price */}
            <Form.Item
              label="Price"
              name="price"
              rules={[{ required: true, message: 'Please input your price!' }]}
            >
              <Input value={stateProductDetails.price} onChange={handleOnChangeDetails} name="price" />
            </Form.Item>
            {/* Discount */}
            <Form.Item
              label="Discount"
              name="discount"
              rules={[{ required: true, message: 'Please input your price!' }]}
            >
              <Input value={stateProductDetails.discount} onChange={handleOnChangeDetails} name="discount" />
            </Form.Item>
            {/* CountInStock */}
            <Form.Item
              label="Count In Stock"
              name="countInStock"
              rules={[{ required: true, message: 'Please input your count In Stock!' }]}
            >
              <Input value={stateProductDetails.countInStock} onChange={handleOnChangeDetails} name="countInStock" />
            </Form.Item>
            {/* size */}
            <Form.Item
              label="Size"
              name="size"
              rules={[{ required: true, message: 'Please input your Size!' }]}
            >
              <Input value={stateProductDetails.size} onChange={handleOnChangeDetails} name="size" />
            </Form.Item>
            {/* brand */}
            <Form.Item
              label="Brand"
              name="brand"
              rules={[{ required: true, message: 'Please input your Brand!' }]}
            >
              <Input value={stateProductDetails.brand} onChange={handleOnChangeDetails} name="brand" />
            </Form.Item>
            {/* Image */}
            <Form.Item
              label="Image"
              name="image"
              rules={[{ required: true, message: 'Please input your Image!' }]}
            >
              <WrapperUploadFile onChange={handleOnChangeAvatarDetails} maxCount={1}>
                <Button icon={<UploadOutlined />}>Select File</Button>
                {stateProductDetails?.image && (
                  <img src={stateProductDetails?.image} style={{
                    height: '60px',
                    width: '60px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    marginTop: '20px'
                  }} alt='avatar' />
                )}
              </WrapperUploadFile>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 19, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Apply
              </Button>
            </Form.Item>

          </Form>
        </Loading>
      </DrawerComponent>

      {/* component khi xac nhan delete product */}
      <ModalComponent title="Xoá sản phẩm" open={isModalOpenDelete} onCancel={handleCancelDelete} onOk={handleDeleteProduct}>
        <Loading isLoading={isLoadingDeleted}>
          <div>Bạn muốn xoá sản phẩm này không?</div>
        </Loading>
      </ModalComponent>
    </div>
  )
}

export default AdminProduct