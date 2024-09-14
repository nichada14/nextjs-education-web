import { BiSupport } from "react-icons/bi";
import { CiMobile3 } from "react-icons/ci";
import { IoMdHappy } from "react-icons/io";
import { IoPulseOutline } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";
import { TbWorldWww } from "react-icons/tb";

interface Service {
    id: number;
    title: string;
    link: string;
    icon: React.ReactNode;
    delay: number;
}

export const ServicesData: Service[] = [
    {
        id: 1,
        title: "Web Development",
        link: "#",
        icon: <TbWorldWww />,
        delay: 0.2,
    },
    {
        id: 2,
        title: "Mobile Development",
        link: "#",
        icon: <CiMobile3 />,
        delay: 0.3,
    },
    {
        id: 3,
        title: "Software Development",
        link: "#",
        icon: <RiComputerLine />,
        delay: 0.4,
    },
    {
        id: 4,
        title: "Satisfied clients",
        link: "#",
        icon: <IoMdHappy />,
        delay: 0.5,
    },
    {
        id: 5,
        title: "SEO optimization",
        link: "#",
        icon: <IoPulseOutline />,
        delay: 0.6,
    },
    {
        id: 6,
        title: "24/7 support",
        link: "#",
        icon: <BiSupport />,
        delay: 0.7,
    },

]