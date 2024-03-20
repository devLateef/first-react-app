import { useState } from "react";
import './products.css';

function Product(){

    let [name, setName] = useState('');
    let [price, setPrice] = useState('');
    let [quantity, setQuantity] = useState('');
    let [error, setError] = useState('')
    let [allProducts, setAllProducts] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [editIndex, setEditIndex] = useState(null)
    const [newName, setNewName] = useState('')

    const getName = e => setName(e.target.value);
    const getPrice = e => setPrice(e.target.value);
    const getQuantity = e => setQuantity(e.target.value);

    const addProduct = ()=>{
        if(name !== '' && price !== '' && quantity !== ''){
            let newProduct = { name, price, quantity }
            setAllProducts([...allProducts, newProduct])
            setName('')
            setPrice('')
            setQuantity('')
            setError("")
        }else{
            setError('Kindly put some entries')
        }
    }
    const enableEdit = (index)=>{
        setIsEdit(true);
        setEditIndex(index)
    }

    const disableEdit = (index)=>{
        setIsEdit(false);
        allProducts[index].name = newName
    }

    const deleteItem = ind=>{
        let filteredProducts = allProducts.filter((_, i)=> i !== ind);
        setAllProducts(filteredProducts)
    }

    return(
        <>
        <div className="product">
            <p className="error">{error ? error: ''}</p>
            <div className="input">
                <input type="text" id="name" value={name} onChange={getName} placeholder="Enter product name"/>
                <input type="text" id="price" value={price} onChange={getPrice} placeholder="Enter product price"/>
                <input type="number" id="quantity" value={quantity} onChange={getQuantity} placeholder="Enter product quantity"/>
                <button className="button" onClick={addProduct}>Add Product</button>
            </div>
            <div className="display-table">
                {allProducts.length ? <table border={1}>
                    <thead>
                        <tr>
                            <th>S/N</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allProducts?.map((product, index)=>(
                           <tr key={index}>
                           <td>{index + 1}</td>
                           {isEdit && editIndex === index ? <td><input type="text" className="edit-input" onChange={(e)=>setNewName(e.target.value)}/></td> : <td>{product.name}</td>}
                           <td>{product.price}</td>
                           <td>{product.quantity}</td>
                           <td>
                               {isEdit && editIndex === index ? <button className="edit" onClick={() => disableEdit(index)}>Save Edit</button> : <button className="edit" onClick={() => enableEdit(index)}>Edit</button>}
                               <button className="delete" onClick={() => deleteItem(index)}>Delete</button>
                           </td>
                       </tr>
                        ))}
                    </tbody>
                </table>
                :
                <div>No Product Available</div>}
            </div>
        </div>
        </>
    )
}

export default Product;