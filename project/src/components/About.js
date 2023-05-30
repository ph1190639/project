import React from 'react'

export default function About(props) {

    let myStyle={
        color: props.mode==='dark'?'white':'black',
        backgroundColor: props.mode==='dark'?'#042333':'white'
    }

  return (
    <div className="container my-5" style={myStyle}>
        <h2>About Us</h2>

            <div className="accordion" id="accordionExample">
            <div class="accordion-item" style={myStyle}>
                <h2 class="accordion-header">
                <button class="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyze Your Text</strong>
                </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    TextUtils give you a way to analyze your text quickly and efficiently. Be it word count, character count .... 
                </div>
                </div>
            </div>
            <div class="accordion-item" style={myStyle}>
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free To Use</strong>
                </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    This TextUtils is a free woprd counter tool that provi9des instant character count & word count statistics for a giventext.  TextUtils reports the number of words characters This is suitable for writing text with word/ character limit. 
                </div>
                </div>
            </div>
            <div class="accordion-item" style={myStyle}>
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    This word counter software in web browser suh as chrome, Firefox, Safari , opera and many more. It suits to count characters in facebook, blog, books, excel document, pdf document, essays and many more .
                </div>
                </div>
            </div>
            </div>
      
    </div>
  )
}