import '../index.css'
import { Bell } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { Grip } from 'lucide-react';
import { UserRound } from 'lucide-react';

function TopBar() {

    return (
        <div className='flex w-full relative p-5 px-7 justify-between bg-[#ffffff] items-center'>

            {/* Hetzner, cloud, divider and server */}
            <div className='flex h-6 justify-center'>
                <img src='/hetzner-cloud.svg'></img>
            </div>

            <div className='flex'>
                <span></span>
            </div>

            {/* Centered Input */}
            <div className='flex justify-center items-center grow'>
                <div className="flex items-center w-[20rem] bg-[#ededed] rounded-lg shadow-md p-1">
                    <img src="/magnifier.svg" alt="Google Logo" className="w-4 h-4 ml-2 mr-3"></img>
                    <input
                        type='text'
                        placeholder='Search...'
                        className='w-full border-none outline-none text-[#c1bdc5] placeholder-[#c1bdc5] bg-[#ededed]'
                    ></input>
                </div>
            </div>

            <div className='flex items-center size-15 gap-x-8'>
                <div className='flex items-center gap-x-1'>
                    <Bell />
                    <ChevronDown className='size-4' />
                </div>

                <div className='flex items-center gap-x-1'>
                    <Grip />
                    <ChevronDown className='size-4' />
                </div>

                <div className='flex items-center gap-x-1'>
                    <UserRound />
                    <ChevronDown className='size-4' />
                </div>
            </div>

        </div>
    )
}

export default TopBar