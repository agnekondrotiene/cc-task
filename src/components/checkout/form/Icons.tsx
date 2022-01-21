import React from "react";
import { ReactComponent as ComodoIcon } from "assets/security_comodo.svg";
import { ReactComponent as McAfeeIcon } from "assets/security_mcafee.svg";
import { ReactComponent as NortonIcon } from "assets/security_nortonsecured.svg";
import { ReactComponent as VeriSignIcon } from "assets/security_verisign.svg";

export const Icons = () => {
  return (
    <div className="flex justify-center">
      <div>
        <NortonIcon className="h-[40px] w-[70px] tablet:h-[49px] tablet:w-[91px]" />
      </div>
      <div>
        <VeriSignIcon className="h-[40px] w-[70px] tablet:h-[49px] tablet:w-[91px]" />
      </div>
      <div>
        <McAfeeIcon className="h-[40px] w-[70px] tablet:h-[49px] tablet:w-[91px]" />
      </div>
      <div>
        <ComodoIcon className="h-[40px] w-[70px] tablet:h-[49px] tablet:w-[91px]" />
      </div>
    </div>
  );
};
