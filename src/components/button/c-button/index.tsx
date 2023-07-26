import { FC } from "react";

type Props = {
  prefix?: React.ReactNode;
  children: string;
  className?: string;
};

export const CButton: FC<Props> = ({ prefix, children, className }) => {
  return (
    <button
      className={`${className} hover:brightness-75 transition-all delay-75 ease-linear`}
    >
      <div className="flex flex-row items-center">
        <span className="mr-2">{prefix}</span>
        <h5>{children}</h5>
      </div>
    </button>
  );
};
