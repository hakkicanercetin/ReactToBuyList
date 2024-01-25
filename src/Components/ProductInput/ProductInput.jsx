import { Form, InputGroup } from "react-bootstrap";
import { IoAddCircleOutline } from "react-icons/io5";

/* eslint-disable react/prop-types */
export function ProductInput({handleInput,product})
{
    return (
        <InputGroup>
                    <InputGroup.Text id="basic-addon1"><IoAddCircleOutline /></InputGroup.Text>
                    <Form.Control
                    className="form-control"
                    onChange={handleInput}
                    value={product.name}
                    placeholder="Ürün ismi girin"
                    />
                </InputGroup>
    )
}