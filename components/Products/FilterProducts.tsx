'use client'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sortProducts } from '@/store/slices/slice';
export default function Filter () {
    const dispatch = useDispatch();
    const [selectedFilter, setSelectedFilter] = useState('')
    const changeFilter = (filter:string) => {
        setSelectedFilter(filter)
        dispatch(sortProducts({ sortBy: filter }));
    }
    return (
        <div className="border-1 border-custom-light-gray w-full bg-white rounded-lg p-4">
           <button
            className={`border-r border-custom-light-gray px-2 text-xs ${selectedFilter === 'expensive' ? 'text-custom-blue' : 'text-custom-medium-gray '}`}
            onClick={() => changeFilter('expensive')}
            >
                The most expensive
               
           </button>
           <button
            className={`px-2 text-xs ${selectedFilter === 'cheap' ? 'text-custom-blue' : 'text-custom-medium-gray '}`}
            onClick={() => changeFilter('cheap')}
            >
               The least expensive
           </button>
        </div>
    )
}