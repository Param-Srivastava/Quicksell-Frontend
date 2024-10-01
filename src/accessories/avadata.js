import { ReactComponent as Done } from "../assets/Done.svg";
import { ReactComponent as Cancelled } from "../assets/Cancelled.svg";
import { ReactComponent as Backlog } from "../assets/Backlog.svg";
import { ReactComponent as Progress } from "../assets/in-progress.svg";
import { ReactComponent as High } from "../assets/high.svg";
import { ReactComponent as Medium } from "../assets/med.svg";
import { ReactComponent as Low } from "../assets/low.svg";
import { ReactComponent as Nopr } from "../assets/nopr.svg";
import { ReactComponent as Urgent } from "../assets/urgent.svg";
import {ReactComponent as Regcircle } from "../assets/To-do.svg"

const bgColors = ["#B57136", "#868728", "#4D9446", "#5F80E4"];

export const cardpriorities = [
    { title: "no priority", color: "gray", icon: <Nopr /> },
    { title: "low", color: "lightgray", icon: <Low /> },
    { title: "medium", color: "gray", icon: <Medium /> },
    { title: "high", color: "black", icon: <High /> },
    { title: "urgent", color: "red", icon: <Urgent /> }
];

export const status = [
    { title: "backlog", color: "black", icon: <Backlog /> },
    { title: "todo", color: "lightgrey", icon: <Regcircle /> }, 
    { title: "in progress", color: "#EBCB62", icon: <Progress /> },
    { title: "done", color: "#606ACB", icon: <Done /> },
    { title: "cancelled", color: "gray", icon: <Cancelled /> },
];

export const Icstatus = {
    backlog: {
        color: "black",
        icon: <Backlog />,
    },
    todo: {
        color: "lightgrey",
        icon: <Regcircle />, 
    },
    "in progress": {
        color: "#EBCB62",
        icon: <Progress />,
    },
    done: {
        color: "#606ACB",
        icon: <Done />,
    },
    cancelled: {
        color: "gray",
        icon: <Cancelled />,
    },
};

export const inigenerate = (name) => {
    return name.split(' ').map(word => word.charAt(0)).join('');
};

export const inrancol = () => {
    const randomIndex = Math.floor(Math.random() * bgColors.length);
    return bgColors[randomIndex];
};
