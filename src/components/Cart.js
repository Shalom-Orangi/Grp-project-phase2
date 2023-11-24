import React from "react";
import CartContext from "../cartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const { items, removeItem,} = useContext(CartContext);

const updateQuantity= async (itemId, updatedData) =>{
  try{
    const response =await fetch (`http://localhost:3000/products/${itemId}`,{
      method:"PATCH",
      headers:{
        "Content-Type":"application/json",
      },
      body: JSON.stringify(updatedData),
    });
    if (response.ok){
      //Item successfully updated in the server
      updatedData(itemId);
    }else{
      //Handle error
      console.log("Failed to update quantity in the cart");
    }
  }catch (error) {
    console.error("Error:",error);
  }
}

  const handleDelete = async (itemId)=>{
    try{
      const response =await fetch(`http://localhost:3000/products/${itemId}`,{
        method:"DELETE",
        headers:{
          "Content-Type":"application/json",
        },
      });
      if (response.ok){
        //Item successfully deleted from the server
        removeItem(itemId);
      }else{
        //Handle error
        console.log("Failed to delete item from the cart");
      }
    }catch (error) {
      console.error("Error:",error);
    }
  };

  return (
    <>
      <h1 className="text-center">Cart</h1>
      {items.map((item) => (
        <div className="container mt-5 mb-5" key={item.id}>
          <div className="d-flex justify-content-center row">
            <div className="col-md-10">
              <div className="row p-2 bg-white border rounded">
                <div className="col-md-3 mt-1">
                  <img
                    className="img-fluid img-responsive rounded product-image"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <div className="col-md-6 mt-1">
                  <h5>{item.title}</h5>
                  <p className="">{item.description}</p>
                </div>
                <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                  <div className="d-flex flex-row align-items-center">
                    <span className="strike-text">${item.price}</span>
                  </div>
                  <h6 className="text-success">Free shipping</h6>
                  <p>Available Items:{item.quantity}</p>
                  <div className="d-flex flex-column mt-4">
                    <Link to={`/detail/${item.id}`}>
                      <button
                        className="btn btn-primary btn-sm"
                        type="button"
                        onClick={() => {
                          removeItem(item.id);
                        }}
                      >
                        Details
                      </button><br/>
                      <button
                      className="btn btn-warning btn-sm "
                      type="button"
                      onClick={()=>{
                        const updatedData={quantity} -1;
                        updateQuantity(item.id,updatedData);
                      }}>
                        Purchase
                        </button>
                    </Link>
                    <button
                      className="btn btn-danger btn-sm mt-2"
                      type="button"
                      onClick={() => {
                        handleDelete(item.id);
                      }}
                    >
                      remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cart;
