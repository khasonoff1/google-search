"use client";

import { RiMenuFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { ImLab } from "react-icons/im";
import { VscAccount } from "react-icons/vsc";
import { FaGooglePlay } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { SiGooglemeet } from "react-icons/si";
import { SiGooglechat } from "react-icons/si";
import { FcContacts } from "react-icons/fc";
import { FaGoogleDrive } from "react-icons/fa";
import { SiGooglecalendar } from "react-icons/si";
import { SiGoogletranslate } from "react-icons/si";
import { SiGooglephotos } from "react-icons/si";
import { IoIosAddCircle } from "react-icons/io";
import { PiSignOutBold } from "react-icons/pi";
import Link from "next/link";
import Image from "next/image";
import userImg from "/public/userImg.jpg";
import { useState } from "react";

const headerLinks = [
    {
        id: 1,
        text: "Gmail",
        to: "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox",
    },
    {
        id: 2,
        text: "Images",
        to: "https://www.google.com/imghp?hl=en&tab=ri&ogbl",
    },
    {
        id: 3,
        text: (
            <>
                <ImLab size={25} />
            </>
        ),
        to: "https://labs.google.com/search/experiments?source=ntp",
    },
];

const googleApps = [
    {
        id: 1,
        icon: (
            <>
                <VscAccount size={25} />
            </>
        ),
        title: "Account",
    },
    {
        id: 2,
        icon: (
            <>
                <FcGoogle size={25} />
            </>
        ),
        title: "Search",
    },
    {
        id: 3,
        icon: (
            <>
                <FaGooglePlay size={25} />
            </>
        ),
        title: "Play",
    },
    {
        id: 4,
        icon: (
            <>
                <FaRegNewspaper size={25} />
            </>
        ),
        title: "News",
    },
    {
        id: 5,
        icon: (
            <>
                <BiLogoGmail size={25} />
            </>
        ),
        title: "Gmail",
    },
    {
        id: 6,
        icon: (
            <>
                <SiGooglemeet size={25} />
            </>
        ),
        title: "Meet",
    },
    {
        id: 7,
        icon: (
            <>
                <SiGooglechat size={25} />
            </>
        ),
        title: "Chat",
    },
    {
        id: 8,
        icon: (
            <>
                <FcContacts size={25} />
            </>
        ),
        title: "Contact",
    },
    {
        id: 9,
        icon: (
            <>
                <FaGoogleDrive size={25} />
            </>
        ),
        title: "Drive",
    },
    {
        id: 10,
        icon: (
            <>
                <SiGooglecalendar size={25} />
            </>
        ),
        title: "Calendar",
    },
    {
        id: 11,
        icon: (
            <>
                <SiGoogletranslate size={25} />
            </>
        ),
        title: "Translate",
    },
    {
        id: 12,
        icon: (
            <>
                <SiGooglephotos size={25} />
            </>
        ),
        title: "Photos",
    },
];

const Header = () => {
    const [showHamburgerModal, setShowHamburberModal] = useState(false);
    const [showUserModal, setShowUserModal] = useState(false);

    return (
        <header className="w-full py-3 px-4">
            <div className="w-full flex items-center justify-end gap-1">
                {headerLinks.map((link) => (
                    <Link
                        className={`text-white p-3 rounded-full duration-150 ${
                            link.id !== 3 ? "hover:underline " : "hover:bg-[#0000001a]"
                        }`}
                        href={link.to}
                        key={link.id}
                        target="_blank">
                        {link.text}
                    </Link>
                ))}
                <div className="relative">
                    <button
                        className={`text-white p-2 hover:bg-[#0000001a] rounded-full ${
                            showHamburgerModal ? "bg-[#0000001a]" : ""
                        }`}
                        onClick={() => {
                            setShowHamburberModal(!showHamburgerModal);
                            setShowUserModal(false);
                        }}>
                        <RiMenuFill size={25} />
                    </button>
                    <div
                        className={`absolute top-12 right-2 bg-[#202124] rounded-[30px] border-[10px]  border-[#373839] ${
                            showHamburgerModal ? "" : "hidden"
                        }`}>
                        <div className="text-white p-2 overflow-y-auto h-[300px] grid grid-cols-3 w-[300px] pt-8 gap-x-8 gap-y-10">
                            {googleApps.map((app) => (
                                <Link href={"#"} key={app.id} className="text-center">
                                    <span className="flex justify-center mb-1">{app.icon}</span>
                                    <p>{app.title}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
