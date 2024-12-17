import './index.css'
import SiteButton from "../src/components/Site-Button"

function App() {

  return (
    <div className='flex flex-col items-center justify-center h-dvh w-full gap-y-14 bg-[#2b2a33] relative'>

      {/* Gear Icon */}
      <div className="absolute top-4 right-4 p-3">
        <img className="size-4" src='/gear.svg' alt="Settings Icon" />
      </div>

      <div className='flex text-3xl text-[#fbfbfe]'>
        <img className="w-14" src='https://upload.wikimedia.org/wikipedia/commons/a/a0/Firefox_logo%2C_2019.svg'></img>
        <p className='p-4 font-sans font-bold'>Firefox</p>
      </div>

      <div className="flex items-center w-[45rem] bg-[#42414d] rounded-lg shadow-md p-4">
        <img src="https://www.google.com/favicon.ico" alt="Google Logo" className="w-6 h-6 ml-2 mr-3"></img>
        <input
          type='text'
          placeholder='Search with Google or enter address'
          className='w-full border-none outline-none text-gray-400 placeholder-gray-400 bg-[#42414d]'
        ></input>
      </div>

      <div className='flex flex-row items-center justify-center gap-x-10'>
        <SiteButton name="YouTube" icon="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg"></SiteButton>
        <SiteButton name="Instagram" icon="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"></SiteButton>
        <SiteButton name="GitHub" icon="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg"></SiteButton>
        <SiteButton name="Facebook" icon="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg"></SiteButton>
        <SiteButton name="DeepL" icon="https://upload.wikimedia.org/wikipedia/commons/e/ed/DeepL_logo.svg"></SiteButton>
        <SiteButton name="Twitter" icon="https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg"></SiteButton>
        <SiteButton name="Cfx.re" icon="https://upload.wikimedia.org/wikipedia/commons/a/a2/Cfy.re_%28Logo%29.jpg"></SiteButton>
        <SiteButton name="FiveM" icon="https://upload.wikimedia.org/wikipedia/commons/5/5a/FiveM-Logo.png"></SiteButton>
      </div>

    </div>
  )
}

export default App