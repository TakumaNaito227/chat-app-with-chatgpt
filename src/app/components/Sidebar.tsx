import React from 'react';

const SideBar = () => {
    return (
        <div className="bg-custom-blue h-full overflow-y-auto px-5 flex flex-col">
            <div className="flex-grow">
                <div className="cursor-pointer flex justify-evenly items-center border mt-2 rounded-md hover:bg-blue-800 duration-150">
                    <span className="text-white p-4 text-2x1">＋</span>
                    <h1 className="text-white text-xl font-semibold p-4">
                        New Chat
                    </h1>
                </div>
                <ul>
                    <li className='cursor-pointer border-b p-4 text-slate-100 hover:bg-slate-700 duration-150'>room1</li>
                    <li className='cursor-pointer border-b p-4 text-slate-100 hover:bg-slate-700 duration-150'>room2</li>
                    <li className='cursor-pointer border-b p-4 text-slate-100 hover:bg-slate-700 duration-150'>room3</li>
                    <li className='cursor-pointer border-b p-4 text-slate-100 hover:bg-slate-700 duration-150'>room4</li>
                </ul>
            </div>
        </div>
    );
};

export default SideBar;