import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrashCan} from '@fortawesome/free-solid-svg-icons';
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import {faPen} from '@fortawesome/free-solid-svg-icons';
import './App.css';



function App() {
 
  const [todo, setodo] = useState([
      {'id': 1, 'title': "task1", 'status': true},
      {'id': 2, 'title': "task2", 'status': false}
    ]);

  const [nTask, sTask] = useState('');
  const [uTask, suTask] = useState('');
  
  return (
    <div className="container App">
      <h2> Todo </h2>
      <br /><br />
    

      {todo && todo.length ? '' : 'No Task...' }
      
      {todo && todo
      .sort((max, min) => max.id > min.id ? 1 :-1)
      .map((list, index) => {
        return(
          <React.Fragment key={list.id}>
            <div className='listBG center'>
              
              
              <div className={list.status ? 'done': ''}>
                <span className="listNumber"> {index + 1} </span>
                <span className="listText"> {list.title} </span>
              </div>

              <div className='iconW'>
                <span title='Complete/Ongoing'> 
                  <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
                </span>
                <span title='Change list'> 
                  <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                </span>
                <span title='Delete list'> 
                  <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                </span>

              </div>

            </div>
          </React.Fragment>

        );
      })}

    </div>
  );
  
}

export default App;
