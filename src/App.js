import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrashCan} from '@fortawesome/free-solid-svg-icons';
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import {faPen} from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
 
  /** Begin State awal */ 
  const [todo, setodo] = useState([
      {'id': 1, 'title': "Belanja", 'status': true},
      {'id': 2, 'title': "Mancing", 'status': false}
    ]);

  const [newList, setList] = useState('');
  const [updateList, setupdateList] = useState('');
  
  /** End State awal */

  /** Begin event Handler */
  const addList = () => {
    if(newList){
      let id = todo.length + 1;
      let temp = {'id': id, 'title': newList, 'status': false};
      setodo([...todo, temp]);
      setList('');
    }
  }

  const deleteList = (id) => {
    let newList = todo.filter( list => list.id !== id);
    setodo(newList);
  }

  const ongoingList = (id) => {
    let newList = todo.map( list => {
      if( list.id === id ){
        return ({ ...list, status: !list.status})
      }
      return list;
    })
    setodo(newList);
  }

  const updatingList = () => {
    let filter = [...todo].filter( list => list.id !== updateList.id );
    let obj = [...filter, updateList]
    setodo(obj);
    setupdateList('');
  }

  const cancelingUpdate = () => {
    setupdateList('')
  }

  const editList = (e) => {
    let temp = {
      id : updateList.id,
      title : e.target.value,
      status : updateList.status ? true : false
    }
    setupdateList(temp);
  }
  /** End event Handler */
  
  /** Begin render */
  return (
    <div className="container App">
      <br /><br />
      <h2 className='headd'> To-Do Lists <span className='version'>Beta 0.3</span></h2>
      <br /><br />
    
      { updateList && updateList ? 
      (
          <div className="row">
          <div className="col">
            <input 
              value={ updateList && updateList.title }
              onChange={ (e) => editList(e)}
              className="form-control form-control-lg"
            />
          </div>
          <div className="col-auto">
            <button
              onClick={updatingList}
              className="btn btn-lg update"
            >Update</button>
            <button
              onClick={cancelingUpdate}
              className="btn btn-lg cancel"
            >Cancel</button>
          </div>
        </div>
      ) : 
      ( <div className="row">
          <div className="col">
        <input 
          value={newList}
          onChange={ (e) => setList(e.target.value)}
          className="form-control form-control-lg"
        />
        </div>
        <div className="col-auto">
          <button
            onClick={addList}
            className="btn btn-lg"
          >Add List</button>
        </div>
      </div>
      )}
     
      <br />

      {todo && todo.length ? '' : 'Why i am empty :( ' }
      
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
                <span title='Complete/Ongoing' onClick={() => ongoingList(list.id)}> 
                  <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
                </span>

                {list.status ? null : (
                  <span title='Change list' onClick={() => setupdateList({
                    id: list.id,
                    title : list.title,
                    status :list.status ? true : false})}> 
                  <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                </span>
                )}
                
                <span title='Delete list' onClick={() => deleteList(list.id)}> 
                  <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                </span>

              </div>

            </div>
          </React.Fragment>

        );
      })}

    </div>
  );
  /** End render */
  
}

export default App;
