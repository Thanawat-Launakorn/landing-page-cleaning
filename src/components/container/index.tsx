import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Container({ children }: Props) {
  return <div className=" w-full pt-10 overflow-x-hidden z-10">{children}</div>;
}
