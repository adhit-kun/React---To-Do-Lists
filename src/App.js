import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrashCan} from '@fortawesome/free-solid-svg-icons';
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import {faPen} from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function App() {
 
  const [todo, setodo] = useState([
      {'id': 1, 'title': "task1", 'status': true},
      {'id': 2, 'title': "task2", 'status': false}
    ]);

  const [nList, sList] = useState('');
  const [uList, suList] = useState('');
  
  return (
    <div className="container App">
      <h2> Todo </h2>
      <br /><br />
    
      <br /><br />

      <div className="row">
        <div className="col">
          <input 
            value={nList}
            onChange={ (e) => sList(e.target.value)}
            className="form-control form-control-lg"
          />
        </div>
        <div className="col-auto">
          <button
            className="btn btn-lg"
          >Add Task</button>
        </div>
      </div>

      <br />


      {todo && todo.length ? '' : 'No Task...' }
      
      {todo && todo
      .sort((max, min) => max.id > min.id ? 1 :-1)
      .map((list, index) => {
        return(
          <React.Fragment key={list.id}>
            <div className='col listBG'>
              
              
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
