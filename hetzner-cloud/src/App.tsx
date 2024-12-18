import './index.css'

function App() {

  return (
    // Full page
    <div className='w-full h-dvh bg-[#f5f5f5]'>

      {/* Top bar */}
      <div className='flex w-full p-5 px-7 bg-red-500'>

        {/* Hetzner, cloud and gerland div */}
        <div className='flex'>

          {/* Hetzner and cloud */}
          <div className='flex h-6 gap-x-2'>
            <img src='/hetzner-cloud.svg'></img>
            <span className='text-xl font-semibold text-[#383838]'>Cloud</span>
          </div>

          {/* Divider */}
          <div className='flex gap-x-2'>
            <span className='text-sm text-gray-600'></span>
          </div>

        </div>

      </div>
    </div>
  )
}

export default App
