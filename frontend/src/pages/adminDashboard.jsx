import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {reset} from '../features/admin/adminSlice'



function AdminDashboard() {
  const navigate = useNavigate()
  const {admin} = useSelector((state)=>state.admins)
  const dispatch = useDispatch()
  useEffect(()=>{
    if(!admin){
      navigate('/admin')
    }
    return()=>{
      dispatch(reset())
    }
  },[admin,navigate])


  return (
    <div>
      AdminDashboard
      </div>
  )
}

export default AdminDashboard