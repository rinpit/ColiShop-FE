import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { routes } from './routes'
import DefaultComponent from './components/DefaultComponent/DefaultComponent'
import { Fragment } from 'react'
import { isJsonString } from './utils'
import { jwtDecode as jwt_decode } from "jwt-decode"
import * as UserService from "./services/UserServices"
import { useDispatch, useSelector } from 'react-redux'
import { resetUser, updateUser } from './redux/slices/userSlice'
import Loading from './components/LoadingComponent/Loading'


function App() {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const user = useSelector((state) => state.user)

  const handleDecode = () => {
    let storageData = localStorage.getItem('access_token');
    let decoded = {}
    if (storageData && isJsonString(storageData)) {
      storageData = JSON.parse(storageData)
      decoded = jwt_decode(storageData)
    }
    return { decoded, storageData }
  }

  useEffect(() => {
    setIsLoading(true)
    const { decoded, storageData } = handleDecode()
    if (decoded?.id) {
      handleGetDetailsUser(decoded?.id, storageData)
    }
    setIsLoading(false)
  }, [])

  // Add a request interceptor
  UserService.axiosJWT.interceptors.request.use(async (config) => {
    const currentTime = new Date()
    const { decoded } = handleDecode()

  //   let storageRefreshToken = localStorage.getItem('refresh_token')
  //   const refreshToken = JSON.parse(storageRefreshToken)
  //   const decodedRefreshToken = jwt_decode(refreshToken)
  //   if (decoded?.exp < currentTime.getTime() / 1000) {
  //     if(decodedRefreshToken?.exp > currentTime.getTime() / 1000){
  //       const data = await UserService.refreshToken(refreshToken)
  //       config.headers['token'] = `Bearer ${data?.access_token}`
  //     }else {
  //       dispatch(resetUser())
  //     }
  //   }
  //   return config;
  // }, function (error) {
  //   return Promise.reject(error);
  // });

    if (decoded?.exp < currentTime.getTime() / 1000) {
      const data = await UserService.refreshToken()
      config.headers['token'] = `Bearer ${data?.access_token}`
    }
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

  const handleGetDetailsUser = async (id, token) => {
    // let storageRefreshToken = localStorage.getItem('refresh_token')
    // const refreshToken = JSON.parse(storageRefreshToken)
    // Đây là chỗ phát sinh ra lỗi, fix gần 3 tiếng
    // khi không có token thì không thực hiện hàm handleGetDetailsUser()
    // if (!token) {
    //   console.log('No valid token available');
    //   return;
    // }
    // try {
    //   const res = await UserService.getDetailsUser(id, token)
    //   dispatch(updateUser({ ...res?.data, access_token: token, refreshToken: refreshToken }))
    // } catch (error) {
    //   console.error('Failed to fetch user details:', error);
    // }


    if (!token) {
        console.log('No valid token available');
        return;
      }
      try {
        const res = await UserService.getDetailsUser(id, token)
        dispatch(updateUser({ ...res?.data, access_token: token }))
      } catch (error) {
        console.error('Failed to fetch user details:', error);
      }
  }

  return (
    <>
      <Loading isLoading={isLoading}>
        <Router>
          <Routes>
            {routes.map((route) => {
              const Page = route.page
              const ischeckAuth = !route.isPrivate || user.isAdmin
              const Layout = route.isShowHeader ? DefaultComponent : Fragment
              return (
                <Route key={route.path} path={ischeckAuth ? route.path : undefined} element={
                  <Layout>
                    <Page />
                  </Layout>
                } />
              )
            })}
          </Routes>
        </Router>
      </Loading>
    </>
  )
}

export default App