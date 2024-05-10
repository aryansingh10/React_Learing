import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import Cards from './components/Cards'
import { apiUrl,filterData } from './data'
import Spinner from './components/Spinner'


function App() {

  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [category,setCategory]=useState(filterData[0].title)

  const fetchCourses=async()=>{
    setLoading(true)
    try {
      const response=await fetch(apiUrl)
      const output=await response.json()
      // setCourses(output.data)
      console.log(output)
      
    } catch (error) {
      console.log(error)
      if(error){
        Response.status(400).json({message:'error'})
      }
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchCourses()
  }
  ,[])
  return (
    <div className='min-h-screen flex-col flex bg-bgDark2'>
      <Navbar/>
      <div>
        <Filter filterData={filterData} category={category} setCategory={setCategory}/>
      </div>
       <div>
        {
          loading ? <Spinner/> : <Cards courses={courses} category={category} setCategory={setCategory}/>
        }
       </div>
    </div>
  )
}

export default App