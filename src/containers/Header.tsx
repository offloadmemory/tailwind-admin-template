import { BellIcon, MoonIcon } from "@heroicons/react/outline";
import InputGroup from "../components/InputGroup";

export type HeaderProps = {
    className: String,
}

export const Header = () => {
    return (
        <div className={`w-full`}>
            <header className={`p-2 flex flex-row justify-between border-b-2 border-gray-200`}>
                <InputGroup className="w-30"/>
                <div className="flex flex-row space-x-6 items-center">
                    <div>
                        <MoonIcon className="w-5 h-5"/>
                    </div>
                    <div>
                        <BellIcon className="w-5 h-5"/>
                    </div>
                    <div>
                        <img className="w-6 h-6 rounded-full" src="https://avatars.githubusercontent.com/u/3192747?v=4"/>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;