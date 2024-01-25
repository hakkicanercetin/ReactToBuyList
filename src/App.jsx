import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"
import JSConfetti from "js-confetti";
import { ProductInput } from "./Components/ProductInput/ProductInput";
import { ShopSelect } from "./Components/ShopSelect/ShopSelect";
import { CategorySelect } from "./Components/CategorySelect/CategorySelect";
import { deleteProduct, isProductBought } from "./Functions/EventFunctions";
import { handleButton, handleCategorySelect, handleInput, handleShopSelect } from "./Functions/HandlerFunctions";
import { NewFilteredTable } from "./Components/newFilteredTable/newFilteredTable";
function App() {
  const [productList,setProductList] = useState([])
  const [product, setProduct] = useState({
    name: "",
    shop: "",
    category: "",
    isBought: false,
    id: nanoid() ,
  });
  console.log(productList)
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
    <div className="container pt-5">
    <div>
      <h1>Ürün Ekle</h1>
      <div className="d-flex gap-5 justify-content-center p-5">
      <ProductInput handleInput={(e)=>handleInput(e,product,setProduct)} product={product} />
      <ShopSelect handleShopSelect={(e)=>handleShopSelect(e,product,setProduct)} product={product} />
      <CategorySelect handleCategorySelect={(e)=>handleCategorySelect(e,product,setProduct)} product={product}/>
        <div>
        <button onClick={()=>{handleButton(product,setProduct,productList,setProductList)}} className="CartBtn">
        <span className="IconContainer"> 
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="rgb(255, 255, 255)" className="cart"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
  </span>
  <p className="text">Listeye Ekle</p>
        </button>
        </div>
      </div>
    </div>
    <div>
      <div className="py-5">
      <NewFilteredTable productList={productList} setProductList={setProductList} isProductBought={(id)=>{isProductBought(id,productList,setProductList)}} deleteProduct={(id)=>deleteProduct(id,productList,setProductList)}/>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
