import { nanoid } from "nanoid";

export function handleInput(e, product, setProduct) {
    setProduct({ ...product, name: e.target.value });
  }
  export function handleShopSelect(e, product, setProduct) {
    setProduct({ ...product, shop: e.target.value });
  }
  export function handleCategorySelect(e, product, setProduct) {
    setProduct({ ...product, category: e.target.value });
  }
  export function handleButton(product,setProduct,productList,setProductList)
{
  if(product.name && product.shop && product.category)
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
  else
  {
    alert("Eksik giriş yaptınız!")
  }
}