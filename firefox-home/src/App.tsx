import './index.css'

function App() {

  return (
    <div className='flex flex-col items-center justify-center h-dvh w-full gap-y-16'>

      <div className='flex text-[#20123a] text-6xl'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/a/a0/Firefox_logo%2C_2019.svg'></img>
        <h1>Firefox</h1>
      </div>

      <div className="flex items-center w-[40rem] bg-white rounded-xl shadow-md p-2">
        <img src="https://www.google.com/favicon.ico" alt="Google Logo" className="w-5 h-5 ml-2 mr-3"></img>
        <input
          type='text'
          placeholder='Search with Google or enter address'
          className='w-full border-none outline-none text-gray-700 placeholder-gray-400 text-sm'
        ></input>
      </div>
    </div>
  )
}

export default App
