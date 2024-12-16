type ButtonInfo = {
    name: string
    icon: string
}

function SiteButton(props: ButtonInfo) {
    return (
        <div className="flex flex-col items-center">
            <div className="flex items-center size-20 bg-[#42414d] rounded-lg cursor-pointer">
                <img src={props.icon} alt="" className="w-[3rem] ml-4"/>
            </div>
            <p className="text-white text-sm mt-2">{props.name}</p>
        </div>
    )
}

export default SiteButton