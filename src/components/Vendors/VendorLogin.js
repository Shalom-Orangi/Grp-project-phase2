import React, { useState } from "react";
import Vendor from "./Vendor";
import Login from "./Login";

const VendorLogin = () => {
  const [login, setLogin] = useState(false);
  return (
    <div>
      {login ? <Vendor /> : <Login login={login} setLogin={setLogin} />}
      <button onClick={() => setLogin(!login)}>Toggle</button>
    </div>
  );
};

export default VendorLogin;
