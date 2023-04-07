import resume from "../pics/01BenjaminLauResumeREAL.pdf"



function Resume(){


    return (
        <div id="resume">
        {/* Resume section is a work in progress */}


        <object data={resume} type="application/pdf" width="100%" height="100%">
      <p>Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a></p>
  </object>
        </div>
    )
}

export default Resume;
