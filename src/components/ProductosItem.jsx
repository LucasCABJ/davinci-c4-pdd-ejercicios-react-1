import { useState } from "react";

export const ProductosItem = ({nombre, precio, ID, updateTotal}) => { 
    const [total, useTotal] = useState(0);

    const actualizarTotal = (evento) => {
        const newCantidad = evento.nativeEvent.target.value;
        if(!isNaN(newCantidad)){
            updateTotal(total, newCantidad * precio);
            useTotal(newCantidad * precio);
        }
    }

    return (
        <>
            <tr>
                <td>{nombre}</td>
                <td>{precio}</td>
                <td><input type="number" min="0" onChange={actualizarTotal} placeholder="0" /></td>
                <td className="total-item">{total}</td>
            </tr>
        </>
    );
} 