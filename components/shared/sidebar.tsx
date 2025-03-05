"use client"

import React, { useState } from 'react'
import { ComboboxDemoItem } from '../ui/comboboxitems'
import { TimePicker } from '../ui/time-picker'
import { Input } from '../ui/input'
import { SelectWeather } from '../ui/selectweather'
import { SelectSeason } from '../ui/selectSeason'
import useStore from "@/app/store"; // Import the Zustand store

const SideBar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())

  // Get actions from the store
  const { setCompetitorPrice, setOurPrice, setSuggestedPrice, setComparison, setProductWeight, setStockLeft } = useStore();

  const handleDateChange = (newDate: Date | undefined) => {
    if (newDate) {
      console.log(newDate)
      setDate(new Date(newDate))
    } else {
      setDate(undefined)
    }
  }

  const handleCompChange = (e) => {
    const compPrice = Number(e.target.value);
    setCompetitorPrice(compPrice);

    // Determine the comparison sign and color
    if (compPrice > useStore.getState().ourPrice) {
      setComparison(">", "bg-red-500"); // Red for greater than
    } else {
      setComparison("<", "bg-green-500"); // Green for less than
    }
  }

  return (
    <div className='border-r w-1/4 h-screen overflow-y-auto'> {/* Add h-screen and overflow-y-auto */}
      <p className='text-2xl font-extrabold p-8 border-b'>Enter Product Information</p>
      <div className='px-4 py-2 flex flex-col'>
        <p className='pl-1'>Enter the Product name/ID: </p>
        <ComboboxDemoItem />
      </div>
      <div className='px-4 py-2 flex flex-col'>
        <p className='pl-1'>Set Time: </p>
        <div className="grid">
          <div className="grid gap-2">
            <TimePicker date={date} setDate={handleDateChange} />
          </div>
          {date && <p className="text-sm text-muted-foreground pl-1">Selected time: {date.toLocaleTimeString()}</p>}
        </div>
      </div>
      <div className='px-4 py-2 flex flex-col'>
        <p className='pl-1'>Sales of Product: </p>
        <Input placeholder='Amount' />
      </div>
      <div className='px-4 py-2 flex flex-col'>
        <p className='pl-1'>Stock Availability: </p>
        <Input 
          placeholder='...' 
          onChange={(e) => setStockLeft(Number(e.target.value))}
        />
      </div>
      <div className='px-4 py-2 flex flex-col'>
        <p className='pl-1'>Supplier Cost: </p>
        <Input placeholder='Amount' />
      </div>
      <div className='px-4 py-2 flex flex-col'>
          <p className='pl-1'>City Tier: </p>
          <SelectWeather />
        </div>
      <div className='px-4 py-2 flex flex-col'>
        <p className='pl-1'>Select Festive Season: </p>
        <SelectSeason />
      </div>
      <div className='px-4 py-2 flex flex-col'>
        <p className='pl-1'>Product Weight: </p>
        <Input 
          placeholder='in grams' 
          onChange={(e) => setProductWeight(Number(e.target.value))}
        />
      </div>
      <div className='px-4 py-2 flex flex-col'>
        <p className='pl-1'>Product Rating: </p>
        <Input placeholder='...' />
      </div>
      <div className='px-4 py-2 flex flex-col'>
        <p className='pl-1'>Demand Surge: </p>
        <Input placeholder='...' />
      </div>
      <div className='px-4 py-2 flex flex-col'>
        <p className='pl-1'>Competitor Pricing: </p>
        <Input 
          placeholder='Amount' 
          onChange={handleCompChange} // Update competitor price
        />
      </div>
      <div className='px-4 py-2 flex flex-col'>
        <p className='pl-1'>Our Price: </p>
        <Input 
          placeholder='Amount' 
          onChange={(e) => setOurPrice(Number(e.target.value))} // Update our price
        />
      </div>
      <div className='px-4 py-2 flex flex-col'>
        <p className='pl-1'>Suggested Price: </p>
        <Input 
          placeholder='Amount' 
          onChange={(e) => setSuggestedPrice(Number(e.target.value))} // Update suggested price
        />
      </div>
      <div className='px-4 py-2 flex flex-col'>
        <p className='pl-1'>Days to Expiry: </p>
        <Input placeholder='...' />
      </div>
    </div>
  )
}

export default SideBar