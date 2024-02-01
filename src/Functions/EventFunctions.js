export function isProductBought(id, productList, setProductList) {
    setProductList((oldProductList) => {
      const updatedProductList = oldProductList.map((product) => {
        if (product.id === id) {
          if(product.isBought == false)
          {
            return { ...product, isBought: true }
          }
          else
          {
            return { ...product, isBought: false }
          }
        }
        return product;
      });
      return updatedProductList;
    });
  }
  export function deleteProduct(id,productList,setProductList)
  {
    setProductList((oldProductList) => {
      const newProductList = oldProductList.filter((product)=> product.id != id)
      return newProductList
    })
  }
  