/* eslint-disable react/prop-types */
import { categories } from "../../data/data";

export function CategorySelect({handleCategorySelect,product})
{
    return (
        <select onChange={handleCategorySelect} value={product.category}>
            <option disabled={product.category?true:false}>Kategori seçiniz</option>
            {categories.map((category)=>(
                <option key={category.id} value={category.id}>{category.name}</option>
            ))}
      </select>
    )
}