import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { pic1, pic2, pic3 } from "../assets";

const HeaderLinkData = [
	{ title: "NEON ANIMS", img: pic1, route: "neon-anims" },
	{ title: "NEON CUSTOM ANIMS", img: pic2, route: "neon-custom-anims" },
	{ title: "NEON SETTINGS", img: pic2, route: "neon-setting" },
	{ title: "HEADLIGHTS NEON", img: pic1, route: "headlights-neon" },
	{
		title: "HEADLIGHTS CUSTOM ANIMS",
		img: pic3,
		route: "headlights-custom-anims",
	},
	{ title: "HEADLIGHTS SETTINGS", img: pic3, route: "headlight-settings" },
];

const Header = () => {
	const headerULWrapperRef = useRef<HTMLUListElement>(null);
	const activeHeaderLinkHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
		const link = headerULWrapperRef.current?.querySelectorAll(
			"li a",
		) as NodeListOf<HTMLLIElement>;

		link?.forEach((item) => {
			item.classList.remove("header_link-active");
		});
		e.currentTarget.classList.add("header_link-active");
	};
	return (
		<header className="h-full w-[599px]">
			<ul className="grid items-start" ref={headerULWrapperRef}>
				{HeaderLinkData.map((item, index) => {
					return (
						<li>
							<Link
								className={`header_link ${index === 0 && "header_link-active"}`}
								to={item.route}
								onClick={activeHeaderLinkHandler}
							>
								<img
									src={item.img}
									alt="icon for the settings"
									className="mt-[-.3rem]"
								/>
								<span>{item.title}</span>
							</Link>
						</li>
					);
				})}
			</ul>
		</header>
	);
};

Header.defaultName = "Header";
export default Header;
