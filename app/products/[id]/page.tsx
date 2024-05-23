'use client'
import Image from 'next/image'
import { useFetch } from "@/hooks/useFetch"
import {dataType} from '@/types/Product'
import DeleteModal from '@/components/Products/DeleteModal'
import EditModal from '@/components/Products/EditModal'
import { useState } from 'react';
export default function page ({ params }: { params: { id: string } }) {
    const { data, isLoading, error, deleteData  } = useFetch<dataType>(
        `https://fakestoreapi.com/products/${params.id}`
      );
    const [showDeletModal, setShowDeleteModal] = useState(false)
    const [showEditModal, setShowEditModal] = useState(false)
    const editItem = async () => {
        setShowEditModal(true)
    }
    const handleOpenDeleteModal = () => {
        setShowDeleteModal(true)
    }
    const handleCloseDeleteModal = () => {
        setShowDeleteModal(false)
    }
    const handleCloseEditModal = () => {
        setShowEditModal(false)
    }
    return (
        <div className="min-h-screen bg-white w-full rounded-lg grid grid-cols-3 gap-2">
            <div
                className="col-span-2 border-r-1 border-custom-light-gray flex flex-col justify-between"
            >
               <div className="border-b-1 border-custom-light-gray p-2">
                    <p className="text-lg font-custom-weight leading-custom-line-height">
                        {data?.title}
                    </p>
                    <p className="text-custom-medium-gray text-xxs">
                        {data?.category}
                    </p>
                    <div className="mt-4 flex justify-start items-center text-xxs text-custom-medium-gray">
                   <p className="flex justify-start items-center border-r-1 border-custom-light-gray pr-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="#F5AC1F"
                        >
                            <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"/>
                        </svg>
                        {data?.rating?.rate}
                   </p>
                   <p className="pl-2">
                       {data?.rating?.count} has lefted.
                   </p>
               </div>
               </div>
               
               <div className="p-2">
                    <p className="border-custom-light-gray text-custom-medium-gray text-xxs">
                        {data?.description}
                    </p>
               </div>
               
               <div className="flex justify-between items-center border-t-1 border-custom-light-gray p-2">
                   <p className="text-xxs text-custom-medium-gray font-custom-thin">
                       Cost:
                   </p>
                   <p className="text-custom-blue text-lg font-custom-weight">
                       {data?.price} $
                   </p>
               </div>
            </div>
            <div className="flex items-center justify-center relative">
                <Image
                    src={data?.image}
                    alt={data?.title}
                    width={200}
                    height={300}
                />
                <div
                    className="absolute top-6 right-4 rounded-full border-1 border-custom-light-gray bg-white flex justify-between">
                    <button
                        className="p-2 border-r-1 border-custom-light-gray text-xxs text-custom-blue flex items-center"
                        onClick={editItem}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="16px"
                            viewBox="0 -960 960 960"
                            width="16px"
                            fill="#1A43D3"
                        >
                            <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/>
                        </svg>
                       Edit
                    </button>
                    <button
                        className="p-2 text-xxs text-custom-red flex items-center"
                        onClick={handleOpenDeleteModal}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="16px"
                            viewBox="0 -960 960 960"
                            width="16px"
                            fill="#B02626"
                        >
                            <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
                        </svg>         
                        Delete product
                    </button>
                </div>
            </div>
        {showDeletModal && <DeleteModal closeModal={handleCloseDeleteModal} confirmDelete={deleteData} /> }
        {showEditModal && <EditModal data={data} closeModal={handleCloseEditModal} />}
        </div>
    )
}