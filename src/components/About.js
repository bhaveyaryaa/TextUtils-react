import React, { useState } from 'react'


 function More(props) {
    // const[ myStyle,setmyStyle]= useState( {
    //     color: 'white',
    //     backgroundColor:'black'

    // })

   // const[btntext,setbtntext]=useState("enable light mode")
   
   let myStyle ={
     color: props.mode === 'dark' ? 'white' : 'black',
     backgroundColor: props.mode === 'dark' ? 'rgb(20 112 65)' : 'white',
     
   }
   
    // const toggleStyle = () => {
    //     if (myStyle.color === 'white') {
    //         setmyStyle( {
    //     color: 'black',
   //     backgroundColor:'white'
   

    //         })
    //         setbtntext("enable dark mode")
    //     }
    //     else {
    //         setmyStyle( {
    //     color: 'white',
    //     backgroundColor:'black'

    //         })
    //         setbtntext("enable light mode")
    //     }
    // }
  return (
      <div className="container" >
          <h1 className="my-2" style={{color:props.mode==='dark'?'white':'black'}}> About Us </h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button"  style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analyze your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body"  style={myStyle}>
         It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button"  style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
               <strong>Free to use</strong>

      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body"  style={myStyle}>
       It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button"  style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
               <strong>Browser compatible</strong>

      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body"  style={myStyle}>
     It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. 
      </div>
    </div>
  </div>
     </div>
          {/* <div className="container my-3">
              <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
          </div> */}
    </div>
  )
}
export default More