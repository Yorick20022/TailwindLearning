import './index.css'

function App() {


  return (
    <div className="h-dvh w-full relative">
      {/* <!--Header--> */}

      {/* Left part */}
      <div className="h-14 w-full relative bg-white flex items-center px-6 justify-between">
        <div className='flex items-center gap-x-6 h-full relative'>
          <img src='../assets/sidebarbutton.svg'></img>
          <img className='w-[93px]' src='../assets/youtube-6.svg'></img>
        </div>

        {/* Center part */}
        <div>
          <input type='text' placeholder='Search' className='w-[35rem] border-yellow-400 rounded-xl leading-8'></input>
        </div>

        {/* Right part */}
        <div>
          <p>hi</p>
        </div>
      </div>



      {/* <!--LowerContainer--> */}
      <div className="h-[calc(100vh-4rem)] bg-neutral-200 flex">
        {/* <!--Sidebar--> */}
        <div className="w-56 bg-neutral-400 h-full">

        </div>
        {/* <!--Main Content--> */}
        <div className="grow bg-neutral-500 h-full">

        </div>
      </div>
    </div>
  )
}

export default App
