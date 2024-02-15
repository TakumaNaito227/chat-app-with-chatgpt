import Image from 'next/image';
import SideBar from './components/Sidebar';
import Chat from './components/Chat';

export default function Home() {
    return (
        <div className="flex h-screen justify-center items-center">
            <div className="h-full flex" style={{ width: '1280px' }}>
                <div className="w-1/5 f-full border">
                    <SideBar></SideBar>
                </div>
                <div className='w-4/5 h-full'>
                    <Chat></Chat>
                </div>
            </div>
        </div>
    );
}
