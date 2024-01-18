/* eslint-disable react/prop-types */
export function ProductInput({handleInput,product})
{
    return (
        <input onChange={handleInput} value={product.name}/>
    )
}