import { useState } from "react";
import { categories, shops } from "../../data/data";
import { Form, InputGroup, Table } from "react-bootstrap";
import { IoSearchSharp } from "react-icons/io5";
import { IconBox } from "../IconBox/IconBox";
import { FaSortAlphaDown, FaTimes } from "react-icons/fa";

/* eslint-disable react/prop-types */
export function NewFilteredTable({productList,isProductBought,deleteProduct}) {
  const [filteredShop, setFilteredShop] = useState("");
  const [filteredCategory, setFilteredCategory] = useState("");
  const [filteredStatus, setFilteredStatus] = useState("all");
  const [filteredName, setFilteredName] = useState("");
  const [sortingName,setSortingName] = useState(false)
  let search = [];
  const tempSortedProducts = [...productList];
  let sortedProducts = []
    sortingName == true ? 
    (sortedProducts = tempSortedProducts.sort((a,b)=>a.name.localeCompare(b.name))) 
    : (sortedProducts = [...productList])
  if (filteredStatus == "all") {
    search = sortedProducts.filter((item) => {
      return (
        (item.shop == filteredShop || !filteredShop) &&
        (item.category == filteredCategory || !filteredCategory) &&
        (item.name.toLocaleLowerCase("TR").includes(filteredName.toLocaleLowerCase("TR")))
      );
    });
  } else if (filteredStatus == "bought") {
    search = sortedProducts.filter((item) => {
      return (
        (item.shop == filteredShop || !filteredShop) &&
        (item.category == filteredCategory || !filteredCategory) &&
        item.isBought === true &&
        (item.name.toLocaleLowerCase("TR").includes(filteredName.toLocaleLowerCase("TR")))
      );
    });
  } else if (filteredStatus == "notBought") {
    search = sortedProducts.filter((item) => {
      return (
        (item.shop == filteredShop || !filteredShop) &&
        (item.category == filteredCategory || !filteredCategory) &&
        item.isBought === false &&
        (item.name.toLocaleLowerCase("TR").includes(filteredName.toLocaleLowerCase("TR")))
      );
    });
  }
  return (
    <>
      {productList.length > 0 ? (
        <div>
          <h1>Ürünü Filtrele</h1>
          <div className="d-flex justify-content-center align-items-center pt-5 px-5">
            <div className="mt-3 w-25">
                <InputGroup>
                    <InputGroup.Text id="basic-addon1"><IoSearchSharp /></InputGroup.Text>
                    <Form.Control
                    className="form-control"
                    style={{height:"53px"}}
                    onChange={(e) => setFilteredName(e.target.value)}
                    value={filteredName}
                    placeholder="İsme göre filtrele"
                    />
                </InputGroup>
            </div>
            <div className="d-flex flex-column mx-3">
              <label>Market Filtrele</label>
              <Form.Select className="form-select" onChange={(e) => setFilteredShop(e.target.value)} size="lg">
                <option value="">Tümü</option>
                {shops.map((shop) => (
                  <option key={shop.id} value={shop.id}>
                    {shop.name}
                  </option>
                ))}
                </Form.Select>
            </div>
            <div className="d-flex flex-column mx-3">
            <label>Kategori Filtrele</label>
                <Form.Select className="form-select" onChange={(e) => setFilteredCategory(e.target.value)} size="lg">
                <option value="">Tümü</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
                </Form.Select>
            </div>
            <div>
            <Form className="d-flex align-items-center" style={{height:"72px"}}>
              <div className="mt-3 px-3">
                <Form.Check
                  type="radio"
                  id="radio-1"
                  label="Tümü"
                  className="form-check-inline"
                  name="radio-buttons"
                  defaultChecked
                  onChange={() => setFilteredStatus("all")}
                />
                <Form.Check
                  type="radio"
                  id="radio-2"
                  label="Satın Alınanlar"
                  className="form-check-inline"
                  name="radio-buttons"
                  onChange={() => setFilteredStatus("bought")}
                />
                <Form.Check
                  type="radio"
                  id="radio-3"
                  label="Satın Alınmayanlar"
                  className="form-check-inline"
                  name="radio-buttons"
                  onChange={() => setFilteredStatus("notBought")}
                />
              </div>
            </Form>
            </div>
          </div>
          <Table striped bordered hover className="mt-5 text-center">
            <thead>
              <tr>
                <th>
                    <div className="d-flex flex-column">
                        <button className="btn fs-4" style={{alignSelf:"end"}} onClick={()=>{setSortingName(sortingName == false ? true : false)}}>{sortingName ? <FaTimes /> : <FaSortAlphaDown />  }</button>
                        <span>Product Name</span>
                    </div>
                </th>
                <th>
                        <span>Shop</span>
                </th>
                <th>
                        <span>Category</span>
                </th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {search != "" ? (
                search.map((item) => (
                  <tr
                    key={item.id}
                    onClick={() => isProductBought(item.id)}
                    className={(item.isBought ? "bought" : "") + " my-table"}
                  >
                    <td>{item.name.toLocaleUpperCase("TR")}</td>
                    <td>{shops[item.shop - 1].name}</td>
                    <td>{categories[item.category - 1].name}</td>
                    <td className="d-flex justify-content-center">
                        <IconBox deleteProduct={deleteProduct} type="button" item={item}/>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="my-table" colSpan="4">Eşleşen veri bulunamadı!</td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      ):<div className="d-flex justify-content-center">
        <h1>Ürün bulunamadı! Yeni ürün ekleyiniz.</h1>
      </div>}
      
    </>
  );
}
