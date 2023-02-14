import React, {createContext, useState} from 'react'

export const CursorContext=createContext({

    cursorText:"",
    setCursorText:()=>{},
    cursorVariant:"default",
    setCursorVariant:()=>{},
    projectEnter:()=>{},
    projectLeave:()=>{},
    ClientEnter:()=>{},
    ClientLeave:()=>{},
    memberEnter:()=>{},
    memberLeave:()=>{},
    dragMe:()=>{},
    dragMeLeave:()=>{},
    readMoreEnter:()=>{},
    readMoreLeave:()=>{},
})

const CursorManager = (props) => {
    const [cursorText, setCursorText] = useState("")
    const [cursorVariant, setCursorVariant] = useState("default")
 
  function projectEnter(event) {
    setCursorText(`View All`);
    setCursorVariant("project");
  }


  function projectLeave(event) {
    setCursorText("");
    setCursorVariant("default");
  }
  function ClientEnter(event) {
    setCursorText("View Client");
    setCursorVariant("project");
  }
  function ClientLeave(event) {
    setCursorText("");
    setCursorVariant("default");
  }
  function NavbarEnter(event) {
    setCursorText("");
    setCursorVariant("Navbar");
  }
  function NavbarLeave(event) {
    setCursorText("");
    setCursorVariant("default");
  }
  function memberEnter(event) {
    setCursorText(`Email Me`);
    setCursorVariant("project");
  }

  function readMoreEnter(event) {
    setCursorText(`Read More`);
    setCursorVariant("readmore");
  }
  function readMoreLeave(event) {
    setCursorText("");
    setCursorVariant("default");
  }


  function memberLeave(event) {
    setCursorText("");
    setCursorVariant("default");
  }

  function dragMe(event) {
    setCursorText(`Drag Me`);
    setCursorVariant("drag");
  }


  function dragMeLeave(event) {
    setCursorText("");
    setCursorVariant("default");
  }

  return (
    <CursorContext.Provider value={{cursorText, setCursorText, cursorVariant, setCursorVariant, projectEnter, projectLeave, ClientEnter, ClientLeave, NavbarEnter, NavbarLeave, memberEnter, memberLeave, dragMe, dragMeLeave, readMoreEnter, readMoreLeave}}>{props.children}</CursorContext.Provider>
  )
}

export default CursorManager