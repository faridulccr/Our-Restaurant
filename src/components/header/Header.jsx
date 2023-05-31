import "flowbite/dist/flowbite.min.js";
import ActiveRoute from "./ActiveRoute";
const Header = () => {
    return (
        <header className="max-w-screen-xl mx-auto bg-[rgba(21,21,21,0.5)] h-20 fixed z-[9999999] w-full px-8 pt-3.5 md:pt-4">
            <nav>
                <div className="flex flex-wrap items-center justify-between mx-auto">
                    <a className=" font-['Cinzel']" href="/">
                        <span className="font-bold block text-amber-300">
                            SAVORY SOIREE
                        </span>
                        <span className="text-white tracking-[2.6px]">
                            RESTAURANT
                        </span>
                    </a>
                    <button
                        data-collapse-toggle="navbar-default"
                        type="button"
                        className="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden bg-slate-600 hover:bg-slate-900 focus:outline-none"
                        aria-controls="navbar-default"
                        aria-expanded="false"
                    >
                        <svg
                            className="w-6 h-6"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                    <div
                        className="hidden w-full md:block bg-[rgba(21,21,21,0.9)] md:bg-[rgba(21,21,21,0)] md:w-auto px-8 md:px-0 py-4 md:py-0"
                        id="navbar-default"
                    >
                        <ul className="font-['Inter'] text-sm flex flex-col items-center md:flex-row gap-3 md:gap-6">
                            <li>
                                <ActiveRoute to="/">HOME</ActiveRoute>
                            </li>
                            <li>
                                <ActiveRoute to="/contact-us">
                                    CONTACT US
                                </ActiveRoute>
                            </li>
                            <li>
                                <ActiveRoute to="dashboard">
                                    DASHBOARD
                                </ActiveRoute>
                            </li>
                            <li>
                                <ActiveRoute to="/our-menu">
                                    OUR MENU
                                </ActiveRoute>
                            </li>
                            <li>
                                <ActiveRoute to="/our-shop">
                                    OUR SHOP
                                </ActiveRoute>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
