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
export function handleInputChange(e,filterName,setFilterName,filterShop,filterCategory,filterStatus,filterProducts) {
  setFilterName(e.target.value);
  filterProducts(filterName, filterShop, filterCategory, filterStatus);
}

export function handleShopChange(e,filterName,setFilterShop,filterCategory,filterStatus,filterProducts) {
  setFilterShop(e.target.value);
  filterProducts(filterName, e.target.value, filterCategory, filterStatus);
}

export function handleCategoryChange(e,filterName,filterShop,setFilterCategory,filterStatus,filterProducts) {
  setFilterCategory(e.target.value);
  filterProducts(filterName, filterShop, e.target.value, filterStatus);
}

export function handleRadioChange(status,filterName,filterShop,filterCategory,setFilterStatus,filterProducts) {
  setFilterStatus(status);
  filterProducts(filterName, filterShop, filterCategory, status);
}