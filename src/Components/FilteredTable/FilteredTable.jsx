/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { categories, shops } from "../../data/data";
import { Form, Table } from "react-bootstrap";
import { handleCategoryChange, handleInputChange, handleRadioChange, handleShopChange } from "../../Functions/HandlerFunctions";

export function FilteredTable({ productList }) {
  const [filterName, setFilterName] = useState("");
  const [filterShop, setFilterShop] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");
  const radioRefs = {
    all: useRef(null),
    bought: useRef(null),
    notBought: useRef(null),
  };

  

  function filterProducts(name, shop, category, status) {
    let filteredList = productList.filter((product) => {
      return (!name || product.name === name) &&
        (!shop || product.shop === shop) &&
        (!category || product.category === category);
    });

    if (status === "bought") {
      filteredList = filteredList.filter((product) => product.isBought);
    } else if (status === "notBought") {
      filteredList = filteredList.filter((product) => !product.isBought);
    }

    setFilteredProducts(filteredList);
  }

  return (
    <>
      <div className="d-flex justify-content-center">
        <input onChange={(e)=>handleInputChange(e,filterName,setFilterName,filterShop,filterCategory,filterStatus,filterProducts)} />
        <select onChange={(e)=>handleShopChange(e,filterName,setFilterShop,filterCategory,filterStatus,filterProducts)} value={filterShop}>
          <option value="">
            Market seçiniz
          </option>
          {shops.map((shop) => (
            <option key={shop.id} value={shop.id}>
              {shop.name}
            </option>
          ))}
        </select>

        <select onChange={(e)=>handleCategoryChange(e,filterName,filterShop,setFilterCategory,filterStatus,filterProducts)} value={filterCategory}>
          <option value="">
            Kategori seçiniz
          </option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <Form>
        {Object.keys(radioRefs).map((status) => (
          <div key={`inline-radio-${status}`} className="mb-3 d-flex justify-content-center">
            <Form.Check
              inline
              label={status === "all" ? "Tümü" : status === "bought" ? "Satın Alınanlar" : "Satın Alınmayanlar"}
              name="group1"
              type="radio"
              id={`inline-radio-${status}`}
              className="mx-3"
              onChange={() => handleRadioChange(status,filterName,filterShop,filterCategory,setFilterStatus,filterProducts)}
              ref={radioRefs[status]}
              checked={filterStatus === status}
            />
          </div>
        ))}
      </Form>
      <Table>
            <thead className="text-center">
                <tr>
                <th>Product Name</th>
                <th>Category</th>
                <th>Shop</th>
                </tr>
            </thead>
            <tbody className="text-center">
                    
                {filteredProducts.map((product)=>(
                    <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{shops.filter((filteredShop)=>filteredShop.id == Number(product.shop)).map((filteredShop)=>filteredShop.name)}</td>
                        <td>{categories.filter((filteredCategory)=>filteredCategory.id == Number(product.category)).map((filteredCategory)=> filteredCategory.name)}</td>
                    </tr>
                ))}
            </tbody>
            
        </Table>
    </>
  );
}
