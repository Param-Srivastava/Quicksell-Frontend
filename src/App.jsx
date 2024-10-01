import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Accboard from './components/Accboard/Accboard';
import { status, cardpriorities } from './accessories/avadata';

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const defaultGroup = localStorage.getItem('selectedGroup');
  const defaultOrder = localStorage.getItem('selectedOrder');

  const [group, setGroup] = useState(defaultGroup ? defaultGroup : 'status');
  const [order, setOrder] = useState(defaultOrder ? defaultOrder : 'priority');


  const handleGroupChange = (groupSelected) => {
    setGroup(groupSelected);
    localStorage.setItem("selectedGroup", groupSelected);
  }
  const handleOrderChange = (orderSelected) => {
    setOrder(orderSelected);
    localStorage.setItem("selectedOrder", orderSelected);
  }

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    try {
      const res = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      const data = await res.json();
      setTickets(data.tickets);
      setUsers(data.users);
    } catch (error) {
      console.log("Can't fetch data, please check API status!", error);
    }
  }

  return (
    <div className="App scroll-container">
      <Navbar group={group} order={order} onGroupchange={handleGroupChange} onOrderChange={handleOrderChange} />
      <div className='boards_container'>
        <div className='app_boards'>
          {
            group === 'status' && status.map((opt, id) => (
              <Accboard order={order} data={opt} key={id} tickets={tickets} users={users} group={group} />
            ))
          }
          {
            group === 'user' && users.map((opt) => (
              <Accboard order={order} data={opt} key={opt.id} tickets={tickets} users={users} group={group} userId={opt?.id} />
            ))
          }
          {
            group === 'priority' && cardpriorities.map((opt, id) => (
              <Accboard order={order} data={opt} level={id} key={id} tickets={tickets} users={users} group={group} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
