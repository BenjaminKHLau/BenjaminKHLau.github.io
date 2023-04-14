import resume from "../pics/01BenjaminLauResumeREAL.pdf"
// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

function Resume(){


    return (
        <div id="resume">
        {/* Resume section is a work in progress */}


        <object data={resume} type="application/pdf" width="70%" height="100%">
      <p>Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a></p>
  </object>

{/* <Document file={resume}>
      <Page pageNumber={1} />
    </Document> */}
        </div>
    )
}

export default Resume;
