/* eslint-disable react/prop-types */
import { Button, Table } from "react-bootstrap";
import { categories, shops } from "../../data/data";

export function MyTable({productList,isProductBought,deleteProduct})
{
    return(
        <Table>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Category</th>
          <th>Shop</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {productList.map((list)=>(
        <tr key={list.id} onClick={()=>isProductBought(list.id)} className={list.isBought ? "bought" : ""}>
          <td>{list.name}</td>
          <td>{categories.filter((filteredCategory)=>filteredCategory.id == Number(list.category))
          .map((filteredCategory)=> filteredCategory.name)
        }</td>
          <td>{shops.filter((filteredShop)=>filteredShop.id == Number(list.shop))
          .map((filteredShop)=>filteredShop.name)
          }</td>
          <td><Button onClick={()=>{deleteProduct(list.id)}} >Sil</Button></td>
        </tr>
          ))}
      </tbody>
    </Table>
    )
}