import React, {
  MouseEventHandler,
  ReactNode,
  useEffect,
  useState,
} from "react";
import localStyles from "./Button.module.css";
import sharedStyles from "../../sharedStyles.module.css";
type Props = {
  //onClick?: (e?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
export default function Button({ onClick, children }: Props) {
  return (
    <button className={localStyles.button} onClick={onClick}>
      {children}
    </button>
  );
}
