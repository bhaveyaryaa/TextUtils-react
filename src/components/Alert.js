import React from 'react'

function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return word.charAt(0).toUpperCase() + lower.slice(1);
    }
    
  return (
      props.alert && <div id="alert" className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">   
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert"
              aria-label="Close" ></button>
   </div>
  )
}

// function close_alert(){
//     if(document.getElementById("alert").style.display != "none"){
//         document.getElementById("alert").style.display = "none";
//     }
// }

export default Alert
