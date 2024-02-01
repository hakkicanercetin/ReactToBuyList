/* eslint-disable react/prop-types */
import { Form } from "react-bootstrap";
import { categories } from "../../data/data";

export function CategorySelect({handleCategorySelect,product})
{
    return (
        <Form.Select className="form-select" onChange={handleCategorySelect} value={product.category} size="lg">
            <option disabled={product.category?true:false}>Kategori seçiniz</option>
            {categories.map((category)=>(
                <option key={category.id} value={category.id}>{category.name}</option>
            ))}
        </Form.Select>
    )
}