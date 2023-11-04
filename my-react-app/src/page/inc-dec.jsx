import { useState } from "react";


const Hook = () => {
    // let count = 0;

const [count , setCount] = useState(1);

    const next = () => {
        setCount(count+1)
      }
      const pre = () => {
        setCount(count-1)
      }
       return (
        <>
            <button className="button h-7 w-7 pb-4 bg-gray-300 rounded-full font-semibold ms-64 text-xl" onClick={pre}>-</button>
            <div className="button font-semibold ps-4 text-2xl">{count}</div>
            <button className="button h-6 w-6 pb-3 bg-gray-300 rounded-full font-bold ms-4 text-xl" onClick={next}>+</button>
        </>
       )
}

export default Hook;