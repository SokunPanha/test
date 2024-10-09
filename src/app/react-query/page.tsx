"use client"
import React from 'react'
import { UseProduct } from '../../../hooks/UseProudct'

type Product = {
    name: string 
    price: number
}
export default function page() {
    const {data, isLoading, isSuccess, status}= UseProduct()
    if (isLoading) {
        return <h1>Loading....</h1>
    }
  return (
    <div>
        <h1>Test</h1>
        {
            data.map((d:Product, index: number)=>{
               return <h1 key={index}>{d.name}</h1>
            })
        }
    </div>
  )
}
