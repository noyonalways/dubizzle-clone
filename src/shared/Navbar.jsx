import logo from "../assets/logo.svg";
import logoDark from "../assets/logo-for-dark.svg";
import notification from "../assets/notificaion.svg";
import search from "../assets/search.svg";
import favorite from "../assets/favorite.svg";
import chat from "../assets/chat.svg";
import home from "../assets/icons/home.svg";
import homeSearch from "../assets/icons/home-search.svg";
import pluse from "../assets/icons/pluse.svg";
import message from "../assets/icons/message.svg";
import profile from "../assets/icons/profile.svg";
import ThemeSwitcher from "../components/ThemeSwitcher/ThemeSwitcher";

export default function Navbar() {
	return (
		<header>
			<div className="lg:border-b lg:border-b-gray-500/10 dark:lg:border-b-gray-300/10">
				<nav className="flex justify-center lg:justify-between lg:items-center container ">
					<div className="inline-flex lg:flex items-center space-x-3 py-3 md:py-0">
						<a href="#">
							<img className="dark:hidden" src={logo} alt="logo" />
							<img className="hidden dark:inline-block" src={logoDark} alt="logo" />
						</a>
						<div className="lg:hidden mt-5 absolute right-6 top-0"><ThemeSwitcher /></div>
						<span className="mt-5 text-sm hidden lg:inline-block dark:text-gray-200">Dubai</span>
					</div>

					<ul className="hidden lg:flex space-x-8 items-center">
					<ThemeSwitcher />
						<li>
							<a className="flex flex-col items-center py-3 decoration-primary-500 hover:underline" href="#">
								<img src={notification} alt="" />
								<span className="dark:text-gray-200">Notificaion</span>
							</a>
						</li>
						<li>
							<a className="flex flex-col items-center py-3 decoration-primary-500 hover:underline" href="#">
								<img src={search} alt="" />
								<span className="dark:text-gray-200">My Searches</span>
							</a>
						</li>
						<li>
							<a className="flex flex-col items-center py-3 decoration-primary-500 hover:underline" href="#">
								<img src={favorite} alt="" />
								<span className="dark:text-gray-200">Favorites</span>
							</a>
						</li>
						<li>
							<a className="flex flex-col items-center py-3 decoration-primary-500 hover:underline" href="#">
								<img src={chat} alt="" />
								<span className="dark:text-gray-200">Chats</span>
							</a>
						</li>
						<li>
							<a
								className="border-x border-x-transparent dark:text-gray-200 dark:hover:bg-slate-400 hover:border-x-slate-200 px-2 py-3 hover:bg-slate-100 rounded duration-200"
								href="#"
							>
								Log in or sign up
							</a>
						</li>
						<li>
							<a className="btn" href="#">
								Place Your Ad
							</a>
						</li>
						
					</ul>
				</nav>
			</div>
			<div className="lg:border-b lg:border-b-gray-500/10 dark:lg:border-b-gray-300/10">
				<div className="container hidden lg:flex">
					<ul className="flex justify-center lg:w-full space-x-8">
						<li>
							<a
								className="font-medium dark:text-gray-200 py-3 px-2 inline-block border-b-4 hover:border-b-4 border-transparent hover:border-b-black dark:hover:border-b-primary-500 duration-200"
								href="#"
							>
								Motors
							</a>
						</li>
						<li>
							<a
								className="font-medium dark:text-gray-200 py-3 px-2 inline-block border-b-4 hover:border-b-4 border-transparent hover:border-b-black dark:hover:border-b-primary-500 duration-200"
								href="#"
							>
								Property for Rent
							</a>
						</li>
						<li>
							<a
								className="font-medium dark:text-gray-200 py-3 px-2 inline-block border-b-4 hover:border-b-4 border-transparent hover:border-b-black dark:hover:border-b-primary-500 duration-200"
								href="#"
							>
								Property for Sale
							</a>
						</li>
						<li>
							<a
								className="font-medium dark:text-gray-200 py-3 px-2 inline-block border-b-4 hover:border-b-4 border-transparent hover:border-b-black dark:hover:border-b-primary-500 duration-200"
								href="#"
							>
								ClassFields
							</a>
						</li>
						<li>
							<a
								className="font-medium dark:text-gray-200 py-3 px-2 inline-block border-b-4 hover:border-b-4 border-transparent hover:border-b-black dark:hover:border-b-primary-500 duration-200"
								href="#"
							>
								Furniture & Garden
							</a>
						</li>
						<li>
							<a
								className="font-medium dark:text-gray-200 py-3 px-2 inline-block border-b-4 hover:border-b-4 border-transparent hover:border-b-black dark:hover:border-b-primary-500 duration-200"
								href="#"
							>
								Mobiles & Tablets
							</a>
						</li>
						<li>
							<a
								className="font-medium dark:text-gray-200 py-3 px-2 inline-block border-b-4 hover:border-b-4 border-transparent hover:border-b-black dark:hover:border-b-primary-500 duration-200"
								href="#"
							>
								Jobs
							</a>
						</li>
						<li>
							<a
								className="font-medium dark:text-gray-200 py-3 px-2 inline-block border-b-4 hover:border-b-4 border-transparent hover:border-b-black dark:hover:border-b-primary-500 duration-200"
								href="#"
							>
								Community
							</a>
						</li>
					</ul>
				</div>
			</div>

			<div className="fixed w-full bottom-0 z-50">
				<div className="lg:hidden absolute bottom-0 left-0 flex border-t border-t-gray-300/40 dark:border-t-gray-200/20 text-gray-500 w-full justify-between bg-white dark:bg-[#202124]">
					<a className="p-3 space-y-1 dark:text-gray-200 flex flex-col items-center text-xs" href="#">
						<img src={home} alt="home-icon" />
						<span>Home</span>
					</a>
					<a className="p-3 space-y-1 dark:text-gray-200 flex flex-col items-center text-xs" href="#">
						<img src={homeSearch} alt="home-search-icon" />
						<span>Searech</span>
					</a>
					<a className="p-3 space-y-1 dark:text-gray-200 flex flex-col items-center text-xs" href="#">
						<img src={pluse} alt="ad-place-icon" />
						<span>Place an Ad</span>
					</a>
					<a className="p-3 space-y-1 dark:text-gray-200 flex flex-col items-center text-xs" href="#">
						<img src={message} alt="message-icon" />
						<span>Message</span>
					</a>
					<a className="p-3 space-y-1 dark:text-gray-200 flex flex-col items-center text-xs" href="#">
						<img src={profile} alt="profile-icon" />
						<span>Profile</span>
					</a>
				</div>
			</div>
		</header>
	);
}
