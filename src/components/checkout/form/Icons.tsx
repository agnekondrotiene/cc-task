import React from "react";
import { ReactComponent as ComodoIcon } from "assets/security_comodo.svg";
import { ReactComponent as McAfeeIcon } from "assets/security_mcafee.svg";
import { ReactComponent as NortonIcon } from "assets/security_nortonsecured.svg";
import { ReactComponent as VeriSignIcon } from "assets/security_verisign.svg";

export const Icons = () => {
  return (
    <div className="flex justify-center">
      <div>
        <NortonIcon />
      </div>
      <div>
        <VeriSignIcon />
      </div>
      <div>
        <McAfeeIcon />
      </div>
      <div>
        <ComodoIcon />
      </div>
    </div>
  );
};
