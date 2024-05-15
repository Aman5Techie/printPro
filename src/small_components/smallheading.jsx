import React from "react";
import PropTypes from "prop-types";

const Smallheading = ({name}) => {
  return (
    <>
      <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
        <p className="block antialiased font-sans text-base uppercase text-blue-gray-400">
          {name}
        </p>
      </th>
    </>
  );
};

Smallheading.propTypes = {
    name : PropTypes.string
};

export default Smallheading;
