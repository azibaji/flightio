'use client'
import {dataType} from '@/types/Product'
import { useState } from 'react';
interface propsType {
    data: dataType | null,
    closeModal: () => void,
    handleEdit: (newData: object) => void
}
export default function EditModal ({data, closeModal, handleEdit}:propsType) {
    const [newData, setNewData] = useState({...data})
    const submitEdit = async () => {
        handleEdit(newData)
    }
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        const keys = name.split('.');
    
        if (keys.length > 1) {
          setNewData((prevData) => {
            const newNestedData = { ...prevData };
            let currentLevel: any = newNestedData;
    
            keys.forEach((key, index) => {
              if (index === keys.length - 1) {
                currentLevel[key] = value;
              } else {
                currentLevel = currentLevel[key];
              }
            });
    
            return newNestedData;
          });
        } else {
          setNewData((prevData) => ({
            ...prevData,
            [name]: value,
          }));
        }
      };
    
    return (
        <div
            id="crud-modal"
            tabIndex="-1"
            aria-hidden="true"
            className="overflow-y-auto overflow-x-hidden fixed flex z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
            <div className="relative p-4 w-full max-w-xl max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Edit Product
                        </h3>
                        <button
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-toggle="crud-modal"
                            onClick={closeModal}
                        >
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <form className="p-4 md:p-5">
                        <div className="border border-custom-soft-gray rounded-lg py-2 px-4">
                            <label
                                for="first_name"
                                className="block mb-2 text-xxs font-medium text-custom-blue-gray">
                                    ProductName
                            </label>
                            <input
                                value={newData.title}
                                type="text"
                                name="title"
                                id="first_name"
                                className=" text-gray-900 text-xs  block w-full "
                                placeholder="John"
                                required
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="grid grid-cols-2 my-4">
                            <div className="border border-custom-soft-gray rounded-lg py-2 px-4">
                                <label
                                    for="first_name"
                                    className="block mb-2 text-xxs font-medium text-custom-blue-gray">
                                        Price
                                </label>
                                <input
                                    value={newData.price}
                                    name="price"
                                    type="text"
                                    id="first_name"
                                    className=" text-gray-900 text-xs  block w-full "
                                    placeholder="John"
                                    required
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="border border-custom-soft-gray rounded-lg py-2 px-4 gap-4">
                                <label
                                    for="first_name"
                                    className="block mb-2 text-xxs font-medium text-custom-blue-gray">
                                        Number
                                </label>
                                <input
                                    value={newData.rating.count}
                                    name="rating.count"
                                    type="number"
                                    id="first_name"
                                    className=" text-gray-900 text-xs  block w-full "
                                    placeholder="John"
                                    required
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="border border-custom-soft-gray rounded-lg py-2 px-4">
                            <label
                                for="first_name"
                                className="block mb-2 text-xxs font-medium text-custom-blue-gray">
                                    Description
                            </label>
                            <textarea
                                value={newData.description}
                                name="description"
                                id="message"
                                rows="4"
                                className="block p-2.5 w-full text-xs text-gray-900 "
                                placeholder="Write your thoughts here..."
                                onChange={handleInputChange}
                            >
                            </textarea>

                        </div>
                        <div className="mt-24">
                            <button
                                className="rounded-full bg-custom-blue text-white px-5 py-2.5 hover:bg-blue-800 font-medium text-sm text-center inline-flex items-center "
                                onClick={submitEdit}
                            >
                                Submut changes
                            </button>

                            <button
                            className="rounded-full ms-3 text-sm font-medium bg-custom-pale-gray py-2.5 px-5 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100" onClick={closeModal}>
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}