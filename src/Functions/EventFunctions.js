export function isProductBought(id, productList, setProductList) {
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
  export function deleteProduct(id,productList,setProductList)
  {
    setProductList((oldProductList) => {
      const newProductList = oldProductList.filter((product)=> product.id != id)
      return newProductList
    })
  }
  