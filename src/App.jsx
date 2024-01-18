import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import { MyTable } from "./Components/Table/MyTable";
import "./style.css"
import JSConfetti from "js-confetti";
import { ProductInput } from "./Components/ProductInput/ProductInput";
import { ShopSelect } from "./Components/ShopSelect/ShopSelect";
import { CategorySelect } from "./Components/CategorySelect/CategorySelect";
import { deleteProduct, isProductBought } from "./Functions/EventFunctions";
import { handleButton, handleCategorySelect, handleInput, handleShopSelect } from "./Functions/HandlerFunctions";
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
    <ProductInput handleInput={(e)=>handleInput(e,product,setProduct)} product={product} />
    <ShopSelect handleShopSelect={(e)=>handleShopSelect(e,product,setProduct)} product={product} />
    <CategorySelect handleCategorySelect={(e)=>handleCategorySelect(e,product,setProduct)} product={product}/>
      <Button onClick={()=>{handleButton(product,setProduct,productList,setProductList)}}>Ekle</Button>
    </div>
      <MyTable productList={productList} isProductBought={(id)=>{isProductBought(id,productList,setProductList)}} deleteProduct={(id)=>deleteProduct(id,productList,setProductList)}></MyTable>
    </>
  )
}

export default App
