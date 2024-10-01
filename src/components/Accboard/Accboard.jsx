import './Accboard.css'
import { IoMdAdd } from "react-icons/io";
import { SlOptions } from "react-icons/sl";
import Dispcard from '../dispcard/dispcard';
import Iconus from '../Iconus/Iconus';
import { inigenerate, inrancol, cardpriorities, Icstatus } from '../../accessories/avadata';

const Board = (props) => {
    const { tickets, users, group, level, userId, order, data } = props;

    let filteredTickets = [];
    if (group === 'status')
        filteredTickets = tickets.filter(ticket => ticket.status.toLowerCase() === data.title.toLowerCase());
    else if (group === 'priority')
        filteredTickets = tickets.filter(ticket => ticket.priority === level);
    else
        filteredTickets = tickets.filter(ticket => ticket.userId === userId);

    if (order === 'priority')
        filteredTickets = filteredTickets.slice().sort((a, b) => b.priority - a.priority);
    else
        filteredTickets = filteredTickets.slice().sort((a, b) => a.title.localeCompare(b.title));

    if (group === 'user') {
        return (
            <div className='board'>
                <div className='board_top'>
                    <div className="board_top_name">
                        <span><Iconus intials={inigenerate(data?.name)} available={data?.available} bgColor={inrancol()} /></span>
                        <p>{data?.name} </p>
                        <span>{filteredTickets.length}</span>
                    </div>
                    <div className="board_top_options">
                        <IoMdAdd />
                        <SlOptions />
                    </div>
                </div>
                <div className="board_container">
                    {
                        filteredTickets.map((ticket) => {
                            return (<Dispcard
                                ticket={ticket}
                                key={ticket.id}
                                icon={cardpriorities[ticket?.priority].icon}
                                group={group} statusIcon={Icstatus[ticket?.status.toLowerCase()].icon}
                                statusColor={Icstatus[ticket?.status.toLowerCase()].color}
                                bgColor={inrancol()}
                            />)
                        })
                    }
                </div>

            </div>
        )
    }
    if (group === 'priority') {
        return (
            <div className='board'>
                <div className='board_top'>
                    <div className="board_top_name">
                        <span style={{ color: data.color }}>{data.icon}</span>
                        <p>{data.title} </p>
                        <span>{filteredTickets.length}</span>
                    </div>
                    <div className="board_top_options">
                        <IoMdAdd />
                        <SlOptions />
                    </div>
                </div>
                <div className="board_container">
                    {
                        filteredTickets.map((ticket) => {
                            const user = users?.find(user => user.id === ticket.userId)
                            return (<Dispcard
                                ticket={ticket}
                                key={ticket.id}
                                user={user}
                                group={group}
                                statusIcon={Icstatus[ticket?.status.toLowerCase()].icon}
                                statusColor={Icstatus[ticket?.status.toLowerCase()].color}
                                bgColor={inrancol()}
                                icon="" />)
                        })
                    }
                </div>
            </div>
        )
    }
    return (
        <div className='board'>
            <div className='board_top'>
                <div className="board_top_name">
                    <span style={{ color: data.color }}>{data.icon}</span>
                    <p>{data.title} </p>
                    <span>{filteredTickets.length}</span>
                </div>
                <div className="board_top_options">
                    <IoMdAdd />
                    <SlOptions />
                </div>
            </div>
            <div className="board_container">
                {
                    filteredTickets.map((ticket) => {
                        const user = users?.find(user => user.id === ticket.userId)
                        return (<Dispcard
                            ticket={ticket}
                            key={ticket.id}
                            statusIcon=""
                            icon={cardpriorities[ticket?.priority].icon}
                            user={user}
                            group={group}
                            bgColor={inrancol()}
                            statusColor="" />)
                    })
                }
            </div>
        </div>
    )
}

export default Board