import React, { useState } from 'react'
import Card from './Card'

function Cards(props) {
  const courses = props.courses;
  const [likedCoures, setLikedCourses] = useState([])
  const category = props.category;
  const setCategory=props.setCategory;

  if(courses.length===0){
    return(
      <h1 className='text-white text-2xl text-center'>Noooo courses found</h1>
    )
  }

  function getCourses() {
 
  if (category==='All') {
    
  const allCourses =[]
  Object.values(courses).forEach((array)=>{
    array.forEach((course)=>{
      allCourses.push(course)
      console.log(allCourses)
    })
  })
  return allCourses;
    
  }else{
    return courses[category]
  }

}
  
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {
        getCourses().map((course)=>{
          return(<Card course={course} likedCoures={likedCoures} setLikedCourses={setLikedCourses}/> )
        })
      }
    </div>

  )
}

export default Cards