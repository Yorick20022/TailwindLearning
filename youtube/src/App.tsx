import './index.css'

function App() {


  return (
    <div className="h-dvh w-full relative">
      {/* <!--Header--> */}

      {/* Left part */}
      <div className="h-14 w-full relative bg-white flex items-center px-6 justify-between">
        <div className='flex items-center gap-x-6 h-full relative'>
          <img className='hover:cursor-pointer' src='../assets/sidebarbutton.svg'></img>
          <img className='w-[93px]' src='../assets/youtube-6.svg'></img>
        </div>

        {/* Center part */}
        <div className=''>
          {/* <input type='text' placeholder='Search' className='border-2 border-solid outline-none'></input> */}
        </div>

        {/* Right part */}
        <div className='flex relative gap-x-6 px-2'>
          <img className='hover:cursor-pointer' src='../assets/create.svg'></img>
          <img className='hover:cursor-pointer' src='../assets/notifications.svg'></img>
          <img className="h-8 w-8 rounded-3xl hover:cursor-pointer" src='../assets/pf.jpg'></img>
        </div>
      </div>



      {/* <!--LowerContainer--> */}
      <div className="h-[calc(100vh-4rem)] flex">

        {/* <!--Sidebar--> */}
        <div className="w-56 h-full p-6 flex">
          <div className='flex items-center flex-col'>
            
          </div>
        </div>

        {/* <!--Main Content--> */}
        <div className="grow  h-full">
        </div>
      </div>
    </div>
  )
}

export default App
