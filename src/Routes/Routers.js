import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Cars } from '../Pages/Cars/Cars'
import { Dashboard } from '../Pages/Dashboard/Dashboard'
import { SignIn } from '../Pages/SignIn/SignIn'

export const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<SignIn/>} />
        <Route path="Dashboard" element={<Dashboard/>} />
        <Route path="Cars" element={<Cars/>} />
    </Routes>
  )
}
