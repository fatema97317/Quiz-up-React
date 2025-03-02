// import logo from './logo.svg';
import './App.css';
import React , { useState} from 'react';

let data = [
  {question : "what is your name?" , answer : "fatema" },
  {question : "what is your lastname?" , answer : "Mirzadeh" },
  {question : "how old are you?" , answer : "23" },
  {question : "when is ypur DOB ?" , answer : "2002" },
  {question : "where do you live?" , answer : "Afghanistan"}
]
function App(){
 let [showIndex , setShow ] = useState(null);
 console.log(showIndex);
 
  return(
    <div className='div1' >
  {data.map((d , index)=> 
  <div className='div2' key={index} onClick={()=> setShow(showIndex === index ? null : index)}>
   {(showIndex === index) ? <p>{d.answer}</p>: (<p>{d.question}</p>)}
 
   </div>


  )
 } 
    </div>
  )
}












export default App;
