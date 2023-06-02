import React, {useState } from 'react'

function UseStateWithArrays() {
    const [nums, setNums] = useState([1, 2, 3]);

    // we create a new arrow function and call the setter function
    // we use the spread operator to add a number to the list
    // we use the nums.length method to increase the number by 1
    const addNums = () => {
        setNums([...nums, nums.length + 1]);
    }

    const removeNum = () => {
        setNums(
            nums.filter((item, idx) => {
                return idx !== nums.length -1;
            })
        )
    }
  return (
    <div>
        {/* we want an onClick event to add a number to the list
        every time we click the button */}
        <button onClick={addNums}>Add Item</button>
        <button onClick={removeNum}>Remove Num</button>
        <ul>
            {/* Don't forget to add a key when using lists! */}
            {nums.map(num => <li key={num}>{num}</li>)}
        </ul>
    
    </div>
  )
}

export default UseStateWithArrays