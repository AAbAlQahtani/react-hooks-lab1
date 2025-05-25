import React, { useState } from "react";

function State() {
    const [value1, setValue1] = useState(8);
    const [value2, setValue2] = useState(2);
    const [result, setResult] = useState("");

    const Add = () => {
        setResult(value1 + value2);
    };

    const Sub = () => {
        setResult(value1 - value2);
    };

    const Multi = () => {
        setResult(value1 * value2);
    };

    const Mod = () => {
        setResult(value1 % value2);
    };

    return (
        <div className="text-center mt-10 bg-gray-50 p-6 rounded shadow-sm max-w-md mx-auto">
            <div className="mb-6">
                <h2 className="text-lg font-semibold mb-1">Value 1: {value1}</h2>
                <button className="bg-blue-100 hover:bg-blue-200 text-black px-4 py-2 mx-1 rounded" onClick={() => setValue1(value1 + 1)}>+1</button>
                <button className="bg-blue-100 hover:bg-blue-200 text-black px-4 py-2 mx-1 rounded" onClick={() => setValue1(value1 - 1)}>-1</button>

            </div>

            <div className="mb-6">
                <h2 className="text-lg font-semibold mb-1">Value 2: {value2}</h2>
                <button className="bg-blue-100 hover:bg-blue-200 text-black px-4 py-2 mx-1 rounded" onClick={() => setValue2(value2 + 1)}>+1</button>
                <button className="bg-blue-100 hover:bg-blue-200 text-black px-4 py-2 mx-1 rounded" onClick={() => setValue2(value2 - 1)}>-1</button>

            </div>
            <div className="mb-6">
                <p className="mb-2 font-medium">Operations</p>
                <button className="bg-blue-100 hover:bg-blue-200 text-black px-4 py-2 mx-1 rounded" onClick={Add}>+</button>
                <button className="bg-blue-100 hover:bg-blue-200 text-black px-4 py-2 mx-1 rounded" onClick={Sub}>-</button>
                <button className="bg-blue-100 hover:bg-blue-200 text-black px-4 py-2 mx-1 rounded" onClick={Multi}>*</button>
                <button className="bg-blue-100 hover:bg-blue-200 text-black px-4 py-2 mx-1 rounded" onClick={Mod}>%</button>
            </div>
            <h2 className="text-lg font-semibold text-gray-800">Result: {result}</h2>
        </div>
    );
}

export default State;
