
'use client';

export default function MyButton(){
    const handleClick = () => {
        alert('こんにちは！これはMyButtonからのメッセージです!');
    };

    return (
        <button 
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
            ここをクリック！
        </button>
    );
}