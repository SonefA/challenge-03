import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Cars } from '../Pages/Cars/Cars'
import ContohApi from '../Pages/Contoh/ContohApi'
import { Dashboard } from '../Pages/Dashboard/Dashboard'
import { SignIn } from '../Pages/SignIn/SignIn'

export const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<SignIn/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="Cars" element={<Cars/>} />
        <Route path="ContohApi" element={<ContohApi/>} />
    </Routes>
  )
}
