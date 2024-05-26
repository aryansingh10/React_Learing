import React, { useContext } from "react";
import Spinner from "./Spinner";
import { AppContext } from "../Context/AppContext";

const Blogs = () => {
    // Consume
    const { posts, loading } = useContext(AppContext);
    console.log(posts);
    return (
        <div className="max-w-[620px] w-11/12 py-3 flex flex-col gap-y-7 my-[100px]">
            {loading ? (
                <Spinner />
            ) : posts.length === 0 ? (
                <div className="">
                    <p className="">No Post Found</p>
                </div>
            ) : (
                posts.map((post) => {
                    return <div key={post.id} className="">
                        <p className="font-bold text-sm ">{post.title}</p>
                        <p className="text-xs">by {post.author} On <strong> {post.category}</strong></p>
                        <p className="text-xs "> POSTED ON {post.date}</p>
                        <br />
                        <p className="text-lg">{post.content}</p>
                        <div>
                            {
                                post.tags.map((tag,index)=>{
                                    return <span key={index} className="text-blue-500 cursor-pointer">  #{tag} </span>
                                } )
                            }
                        </div>
                    
                        </div>
                })
            )}
        </div>
    );
};

export default Blogs;