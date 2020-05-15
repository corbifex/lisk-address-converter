import React, { useEffect, useState } from "react";
import ReactJson from 'react-json-view'

import {convert} from "./utils";
export const Converter = ({publicKey}) => {

  const [result, setConversion] = useState({});
  useEffect(() => {
    if (publicKey) {
      setConversion(convert(publicKey));
    }
  }, [publicKey]);

  return (<div className="Result">
    <ReactJson src={result} theme="monokai" />
  </div>)
}
