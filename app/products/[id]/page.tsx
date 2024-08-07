"use client";
import { DeleteModal, EditModal } from "@/app/components";
import {
  deleteProduct,
  editProduct,
  fetchProductDetails,
} from "@/store/slices/slice";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
export default function ProductDetail({ params }: { params: { id: string } }) {
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.products.productDetails);
  const [showDeletModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  useEffect(() => {
    if (params.id) {
      dispatch(fetchProductDetails(params.id));
    }
  }, [params.id, dispatch]);
  const handleToggleEditModal = (show: boolean) => {
    setShowEditModal(show);
  };
  const handleToggleDeleteModal = (show: boolean) => {
    setShowDeleteModal(show);
  };

  const handleEdit = (updatedProduct: any) => {
    dispatch(editProduct({ id: params.id, updatedProduct }));
  };

  const handleDelete = () => {
    dispatch(deleteProduct(params.id));
  };

  return (
    <div className="bg-white w-full rounded-lg grid lg:grid-cols-3 lg:gap-2">
      <div className="order-2 lg:order-1 pt-6 lg:col-span-2 border-r-1 border-custom-light-gray flex flex-col justify-between">
        <div className="p-4">
          {!productDetails && (
            <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-56 mb-4"></div>
          )}
          {productDetails && (
            <p className="text-lg font-custom-weight leading-custom-line-height">
              {productDetails?.title}
            </p>
          )}
          {!productDetails && (
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
          )}
          {productDetails && (
            <p className="text-custom-medium-gray text-xxs">
              {productDetails?.category}
            </p>
          )}
          <div className="mt-4 flex justify-start items-center text-xxs text-custom-medium-gray">
            <p className="flex justify-start items-center border-r-1 border-custom-light-gray pr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#F5AC1F"
              >
                <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
              </svg>
              {productDetails?.rating?.rate}
            </p>
            <p className="pl-2">{productDetails?.rating?.count} has lefted.</p>
          </div>
          {!productDetails && (
            <div className="border-t-1 pt-4 mt-3 border-custom-light-gray">
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
          )}
          {productDetails && (
            <p className="border-t-1 pt-4 mt-3 border-custom-light-gray text-custom-medium-gray text-xxs">
              {productDetails?.description}
            </p>
          )}
        </div>
        <div className="flex justify-between mt-[60px] items-center border-t-1 border-custom-light-gray px-4 py-4">
          <p className="text-xxs text-custom-medium-gray font-custom-thin">
            Cost:
          </p>
          {!productDetails && (
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          )}
          {productDetails && (
            <p className="text-custom-blue text-lg font-custom-weight">
              {productDetails?.price} $
            </p>
          )}
        </div>
      </div>
      <div className="order-1 lg:order-2  p-6 flex items-center justify-center relative">
        {!productDetails && (
          <div
            role="status"
            className="flex w-48 items-center justify-center h-64 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
          >
            <svg
              className="w-full h-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 20"
            >
              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
              <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        )}
        {productDetails && (
          <Image
            src={productDetails?.image}
            alt={productDetails?.title}
            width={200}
            height={300}
          />
        )}
        <div className="absolute top-6 right-4 rounded-full border-1 border-custom-light-gray bg-white flex justify-between">
          <button
            className="p-2 border-r-1 border-custom-light-gray text-xxs text-custom-blue flex items-center"
            onClick={() => handleToggleEditModal(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16px"
              viewBox="0 -960 960 960"
              width="16px"
              fill="#1A43D3"
            >
              <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
            </svg>
            Edit
          </button>
          <button
            className="p-2 text-xxs text-custom-red flex items-center"
            onClick={() => handleToggleDeleteModal(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16px"
              viewBox="0 -960 960 960"
              width="16px"
              fill="#B02626"
            >
              <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
            </svg>
            Delete product
          </button>
        </div>
      </div>
      {showDeletModal && (
        <DeleteModal
          closeModal={() => handleToggleDeleteModal(false)}
          confirmDelete={handleDelete}
        />
      )}
      {showEditModal && (
        <EditModal
          data={productDetails}
          closeModal={() => handleToggleEditModal(false)}
          handleEdit={handleEdit}
        />
      )}
    </div>
  );
}
