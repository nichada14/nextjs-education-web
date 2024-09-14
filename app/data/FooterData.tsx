import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

interface Courses {
    id: number;
    title: string;
    link: string
}

interface Links {
    id: number;
    title: string;
    link: string;
}

interface Icons {
    id: number;
    icon: React.ReactNode;
    link: string;
}


export const CoursesData: Courses[] = [
    {
        id: 1,
        title: "Web Development",
        link: "#"
    },
    {
        id: 2,
        title: "Software Development",
        link: "#"
    },
    {
        id: 3,
        title: "Apps Development",
        link: "#"
    },
    {
        id: 4,
        title: "E-learning",
        link: "#"
    },
]

export const LinkData: Links[] = [
    {
        id: 1,
        title: "Home",
        link: "#"
    },
    {
        id: 2,
        title: "Services",
        link: "#"
    },
    {
        id: 3,
        title: "About",
        link: "#"
    },
    {
        id: 4,
        title: "Contact",
        link: "#"
    },
]

export const IconData: Icons[] = [
    {
        id: 1,
        icon: <FaWhatsapp />,
        link: "#"
    },
    {
        id: 2,
        icon: <FaInstagram />,
        link: "#"
    },
    {
        id: 3,
        icon: <TbWorldWww />,
        link: "#"
    },
    {
        id: 4,
        icon: <FaYoutube />,
        link: "#"
    },
]