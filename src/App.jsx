/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import { categories, shops } from "./data/data";
import { MyTable } from "./Components/Table/MyTable";
import "./style.css"
import JSConfetti from "js-confetti";

function handleButton(product,setProduct,productList,setProductList)
{
  setProductList((oldProductList)=>[...oldProductList,{...product,id:product.id}])
  setProduct({
    name: "",
    shop: "",
    category: "",
    isBought: false,
    id: nanoid(),
  })
}
function handleInput(e, product, setProduct) {
  setProduct({ ...product, name: e.target.value });
}
function handleShopSelect(e, product, setProduct) {
  setProduct({ ...product, shop: e.target.value });
}
function handleCategorySelect(e, product, setProduct) {
  setProduct({ ...product, category: e.target.value });
}
function isProductBought(id, productList, setProductList) {
  setProductList((oldProductList) => {
    const updatedProductList = oldProductList.map((product) => {
      if (product.id === id) {
        return { ...product, isBought: true };
      }
      return product;
    });
    return updatedProductList;
  });
}
function deleteProduct(id,productList,setProductList)
{
  setProductList((oldProductList) => {
    const newProductList = oldProductList.filter((product)=> product.id != id)
    return newProductList
  })
}
function App() {
  const [productList,setProductList] = useState([])
  const [product, setProduct] = useState({
    name: "",
    shop: "",
    category: "",
    isBought: false,
    id: nanoid() ,
  });
  const [productLength,setProductLength] = useState() 
  useEffect(()=>{
    setProductLength(productList.length)
    if(productLength > 0 && productLength == productList.length && productList.every((product)=>product.isBought))
  {
    alert("Alışveriş Tamamlandı!")
    setProductLength(0)
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti()
  }
  },[productList])
  return (
    <>
    <div className="d-flex justify-content-center">
      <input onChange={(e)=>handleInput(e,product,setProduct)} value={product.name}/>
      <select onChange={(e)=>handleShopSelect(e,product,setProduct)} value={product.shop}>
            <option>Market seçiniz</option>
            {shops.map((shop)=>(
                <option key={shop.id} value={shop.id}>{shop.name}</option>
            ))}
      </select>
      <select onChange={(e)=>handleCategorySelect(e,product,setProduct)} value={product.category}>
            <option>Kategori seçin</option>
            {categories.map((category)=>(
                <option key={category.id} value={category.id}>{category.name}</option>
            ))}
      </select>
      <Button onClick={()=>{handleButton(product,setProduct,productList,setProductList)}}>Ekle</Button>
    </div>
      <MyTable productList={productList} isProductBought={(id)=>{isProductBought(id,productList,setProductList)}} deleteProduct={(id)=>deleteProduct(id,productList,setProductList)}></MyTable>
    </>
  )
}

export default App
