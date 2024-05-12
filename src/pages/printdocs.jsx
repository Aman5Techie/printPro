import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import Inputfile from "../small_components/inputfile";
import Loading from "../small_components/loading";
import Pdfviewer from "../small_components/pdfviewer";
import axios from "axios";
import { upload } from "../rotues";
const Printdocs = () => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [file, setfile] = useState(null);
  const [name, setname] = useState();
  const [pages, setpage] = useState(0);
  const [amount, setamount] = useState(null);

  async function submitform(event) {
    event.preventDefault();
    const formdata = new FormData();
    formdata.append("title",name);
    formdata.append("pdf",file);
    try {
      console.log(formdata);
      const {data} = await axios.post(upload,formdata);
      console.log(data);
      
    } catch (error) {
      console.log(error);
    }

  }
  function onDocumentLoadSuccess({ numPages }) {
    setpage(numPages);
  }

  return (
    <div className="bg-gray-100 h-screen  py-5 px-44   ">
      <div className="max-w-4xl bg-white rounded-lg shadow-md mx-4 ">
        <div className=" justify-center container mx-auto   items-center">
          <form
            action=""
            onSubmit={(e) => {
              submitform(e);
            }}
          >
            <div className="  bg-gray-800 text-white py-4 rounded-t-lg px-4">
              <h1 className="text-3xl font-semibold uppercase ">
                Upload File HERE
              </h1>
            </div>
            <div className="flex justify-center py-2">
              <input
                type="text"
                placeholder="Name"
                className=" border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                onChange={(e) => {
                  setname(e.target.value);
                }}
              />
            </div>
            <Inputfile setfile={setfile} />
            <div className="flex justify-center ">
              <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
                <Pdfviewer>
                  {Array.from({ length: pages }, (_, index) => {
                    return <Page key={index} pageNumber={index + 1} />;
                  })}
                </Pdfviewer>
              </Document>
            </div>

            <div className="flex justify-center py-3">
              <h1 className="font-medium"> Total Number Of pages in PDF : </h1>
              {pages != 0 ? (
                <h1 className="font-medium px-2">{pages}</h1>
              ) : (
                <Loading />
              )}
            </div>
            <div className="flex justify-center space-x-4 py-2">
              <div
                onClick={() => {
                  setamount(pages * 2);
                }}
                className="text-white  bg-[#2D3436] font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 focus:outline-none focus:ring-4 focus:ring-gray-500 "
              >
                @2 Rs
              </div>
              <div
                onClick={() => {
                  setamount(pages * 5);
                }}
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                @5 Rs
              </div>
            </div>
            <div className="flex justify-center py-5 ">
              {file == null || amount == null ? (
                <h1>
                  {" "}
                  {file == null ? "Upload file" : "Select Type"} To Continue
                </h1>
              ) : (
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Pay Rs. {amount} to Continue
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Printdocs;
