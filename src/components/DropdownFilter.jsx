import React from "react";
import Form from "react-bootstrap/Form";

const DropdownFilter = ({ data, capturedFuction }) => {
  return (
    <div className="cont-dropdown">
      <Form.Select
        aria-label="Floating label select example"
        className="dropdown-filter"
        onChange={capturedFuction}
      >
        <option value={""}>All categories</option>
        {data.map((name, index) => (
          <option key={index} value={name}>
            {name}
          </option>
        ))}
      </Form.Select>
    </div>
  );
};

export default DropdownFilter;
