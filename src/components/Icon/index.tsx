import React from "react";
import { IProps } from "./type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Icon(props: IProps) {
  const { icon, size = "1x" } = props;
  return <FontAwesomeIcon icon={icon} size={size}></FontAwesomeIcon>;
}
