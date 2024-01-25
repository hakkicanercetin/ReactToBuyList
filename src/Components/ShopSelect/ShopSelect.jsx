/* eslint-disable react/prop-types */
import { Form } from "react-bootstrap";
import { shops } from "../../data/data";

export function ShopSelect({handleShopSelect,product})
{
    return (
        <Form.Select className="form-select" onChange={handleShopSelect} value={product.shop} size="lg">
            <option disabled={product.shop?true:false}>Market seçiniz</option>
            {shops.map((shop)=>(
                <option key={shop.id} value={shop.id}>{shop.name}</option>
            ))}
        </Form.Select>
    )
}