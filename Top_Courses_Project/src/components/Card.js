import React from 'react'
import {FcLike,FcLikePlaceholder}  from 'react-icons/fc'
import { toast } from 'react-toastify';

function Card(props) {
  const course = props.course;
  const likedCoures = props.likedCoures;
  const setLikedCourses = props.setLikedCourses;
  const clickHandler=()=>{
    if(likedCoures.includes(course.id)){
      setLikedCourses((prev)=> prev.filter((cid)=>(cid!==course.id)))
      toast.warning("Liked Removed");
    }else{
        if(likedCoures.length===0){
          setLikedCourses([course.id])
        }else{
      setLikedCourses((prev)=>[...prev,course.id])
    
    }
    toast.success("Liked Added")
  }

  }
  return (
    <div className='bg-bgDark bg-opacity-80 w-[300px] rounded-md overflow-hidden'>
    <div className='relative '>
        <img src={props.course.image.url} alt="Course Image" className='' />

        <div className='rounded-full w-[40px] h-[40px] bg-white absolute right-2 bottom-[-12px] grid place-items-center'>
            <button onClick={clickHandler}>
                {
                    !likedCoures.includes(props.course.id) ? <FcLikePlaceholder fontSize="1.75rem" /> : <FcLike fontSize="1.75rem" />
                }
            </button>
        </div>
    </div>
           <div className=''>
        <h1 className='text-white text-lg font-semibold leading-6'>{course.title}</h1>
        <p className='text-sm text-white'>{
   props.course.description.length > 100 ? (props.course.description.substring(0, 100) + "...") : (props.course.description)
        }</p>
           </div>
    </div>
  )
}

export default Card