import { FaBookReader } from "react-icons/fa";
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineAccessTime } from "react-icons/md";

interface Banner {
    id: number;
    title: string;
    icon: React.ReactNode;
}

export const BannerData: Banner[] = [
    {
        id: 1,
        title: "10,000+ Courses",
        icon: <FaBookReader />
    },
    {
        id: 2,
        title: "Expert Instuction",
        icon: <GrUserExpert />
    },
    {
        id: 3,
        title: "Lifetime Access",
        icon: <MdOutlineAccessTime />
    },
]