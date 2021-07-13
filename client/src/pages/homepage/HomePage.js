import { useLocation } from "react-router";
import { useEffect,useState } from "react";
import "./homepage.css";
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import Footer from '../../components/footer/Footer'

import axios from "axios";

export default function Homepage() {
  const [posts,setPosts]=useState([])
  const {search}=useLocation();

  useEffect(()=>{
 const fetchPosts=async ()=>{
   const res=await axios.get("/posts"+search)
   console.log(res)
  setPosts(res.data)
 }
 fetchPosts()
  },[search])
  return (
    <>
    <Header/>
  <div className="home">
    <Posts posts={posts}/>
    
    <Sidebar/>
   
  </div>
  <Footer/>
    </>
  );
}
