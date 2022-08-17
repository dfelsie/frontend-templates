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
  isActionButton?: boolean;
};
export default function Button({ onClick, children, isActionButton }: Props) {
  return (
    <button
      className={
        isActionButton ? sharedStyles.actionButton : localStyles.button
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
}
