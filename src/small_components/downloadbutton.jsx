import axios from "axios";
import { getPdf } from "../rotues";
import { saveAs } from "file-saver";

import PropTypes from 'prop-types';

const Downloadbutton = ({ id }) => {
  async function onClick() {
    const { data } = await axios.post(getPdf, { id: id });

    const buffer = data.pdf.data.data;
    const title = data.pdf.title;
    const new_buffer = new Uint8Array(buffer);
    const blob = new Blob([new_buffer], { type: "application/pdf" });
    saveAs(blob, `${title}.pdf`);
  }
  return (
    <button
      onClick={onClick}
      className="Btn flex items-center justify-center bg-gray-900 rounded-full w-12 h-12 shadow-md cursor-pointer relative transition duration-300 hover:bg-purple-600"
    >
      <svg
        className="svgIcon fill-current text-purple-300"
        viewBox="0 0 384 512"
        height="1.4em"
      >
        <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
      </svg>
      <span
        className="tooltip absolute right-0 opacity-0 bg-gray-900 text-white px-2 py-1 rounded whitespace-no-wrap transition duration-200 pointer-events-none"
        style={{ right: -105 }}
      ></span>
    </button>
  );
};

Downloadbutton.propTypes = {
  id : PropTypes.string
  
};

export default Downloadbutton;
