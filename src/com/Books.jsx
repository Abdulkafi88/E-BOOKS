import React, { useState } from "react";

const Book = ({ title, description, imageUrl, BestSeller }) => {
  const [addToCart, setAddToCart] = useState(false);

  const handleCart = () => {
    setAddToCart(!addToCart);
  };

  return (
    <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="p-5">
        <img src={imageUrl} alt="" />
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h2>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <div className="flex items-center my-2">
          <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
          <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
          <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
          <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
          <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
        </div>
        <p className="flex justify-between items-center">
          <span className="text-2xl dark:text-gray-200">
            <span>$</span>
            <span>99</span>
          </span>

          <button
            className={`inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white ${
              addToCart
                ? "bg-red-700 hover:bg-red-800"
                : "bg-blue-700 hover:bg-blue-800"
            } rounded-lg`}
            onClick={handleCart}
          >
            {addToCart ? (
              <>
                Remove from Cart <i className="ml-1 bi bi-trash3"></i>
              </>
            ) : (
              <>
                Add to Cart <i className="ml-1 bi bi-plus-lg"></i>
              </>
            )}
          </button>
        </p>
      </div>
    </div>
  );
};

const Books = () => {
  return (
    <section className="">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">
        Featured eBooks
      </h1>
      <div className="flex flex-wrap justify-center lg:flex-row">
        <Book
          title="The Complete Guide to Backend Development"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error unde quisquam magni vel eligendi nam."
          imageUrl="https://images.unsplash.com/photo-1595617795501-9661aafda72a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40"
        />
        <Book
          title="Frontend Fastlane Plan With Projects"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error unde quisquam magni vel eligendi nam."
          imageUrl="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40"
        />
        <Book
          title="JavaScript Basics To Advance With Shubham"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error unde quisquam magni vel eligendi nam."
          imageUrl="https://images.unsplash.com/photo-1613490900233-141c5560d75d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40"
        />
      </div>
      <div className="flex flex-wrap justify-center lg:flex-row"></div>
    </section>
  );
};

export default Books;
