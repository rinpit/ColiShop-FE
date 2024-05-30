import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { routes } from './routes'
import DefaultComponent from './components/DefaultComponent/DefaultComponent'
import { Fragment } from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'


function App() {

  // useEffect(() => {
  //   fetchApi()
  // }, {})

  // console.log("REACT_API_URL_BACKEND", process.env.REACT_APP_API_URL)

  const fetchApi = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/product/getAll`)
    return res.data
  }

  const query = useQuery({queryKey: ['todos'], queryFn: fetchApi})
  console.log("query", query.data)

  return (
    <>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page
            const Layout = route.isShowHeader ? DefaultComponent : Fragment
            return (
              <Route key={route.path} path={route.path} element={
                <Layout>
                  <Page />
                </Layout>
              } />
            )
          })}
        </Routes>
      </Router>
    </>
  )
}

export default App