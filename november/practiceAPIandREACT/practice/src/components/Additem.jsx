import { useState } from 'react';
const AddItem=({setItems,items})=>{
    const [newItem, setNewItem] = useState('');
    
    const handleAddItem = () => {
        if (Array.isArray(items)) {
            setItems([...items, newItem]);
        } else {
            console.log(+{items});
        }
        setNewItem('');  
    };
    
    return(
        <div>
        <input 
          value={newItem} 
          onChange={(e) => setNewItem(e.target.value)} 
          placeholder="Enter new item" 
        />
        <button onClick={handleAddItem}>Add Item</button>
        </div>
    )
}
export default AddItem