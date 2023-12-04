import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function Header(){
  return(
    <div className="header">
      <h1>To-DO list</h1>
      <p>Add new duty</p>
    </div>
  )
}

function EditDuty(props){
  return <input type="text" autoFocus={true} onChange={evt=>props.changeHandler(evt)} value={props.value}/>
}

function BtnAdd({clickHandler}){
  return <button className="btn_add" onClick={clickHandler}>Add</button>
}

function ListDuty(props){
  const temp = props.duties.map((d) => <li>{d[0]}<BtnEdit clickHandler={props.editClickHandler} id={d[1]}/><BtnDelete id={d[1]} clickHandler={props.delClickHandler}/></li>)
  console.log(temp)
  return (
      <ul>
        {temp}
      </ul>
  )
}

function BtnEdit(props){
  function localClickHandler(){
    props.clickHandler(props.id)
  }
  return <button className="btn_edit" onClick={localClickHandler} id={props.id}>Edit</button>
}

function BtnDelete(props){
  function localClickHandler(){
    props.clickHandler(props.id)
  }
  return <button className="btn_delete" id={props.id} onClick={localClickHandler}>Delete</button>
}

function BtnSearch({clickHandler, id}){
  return <button className="btn_search" id={id}>Search</button>
}

let id = 0

export default function App(){
  const [duty, addDuty] = useState("")
  const [dutyList, appendDuty] = useState([])

  function changeHandler(evt){
    addDuty((old) => evt.target.value) // re-render
  }

  function addClickHandler(){
    const newList = dutyList.slice()
    newList.push([duty, id])
    id++
    appendDuty((old) => newList) // re-render
    addDuty((old) => "")
  }

  function delClickHandler(idDuty){
    appendDuty((old) => dutyList.filter(
      (elem)=>{
        return elem[1]!=idDuty
      }
    ))
  }

  function editClickHandler(idDuty){
    const newList = dutyList.map((d)=>(d[1]===idDuty?[prompt("Edit your duty").toString(),idDuty]:d))
    appendDuty((old)=>newList)
  }

  return (
    <>
      <Header/>
      <EditDuty changeHandler={changeHandler} value={duty}/>
      <BtnAdd clickHandler={addClickHandler}/>
      <ListDuty duties={dutyList} editClickHandler={editClickHandler} delClickHandler={delClickHandler}/>
    </>
  )
}