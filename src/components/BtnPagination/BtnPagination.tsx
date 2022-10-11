import { Btn } from "./styles/styles";

interface IBtnPaginationProps {
  position: "top" | "bottom";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const defaultProps = {
  onClick: undefined,
};

export default function BtnPagination({
  position,
  onClick,
}: IBtnPaginationProps) {
  return <Btn position={position} onClick={onClick} />;
}

BtnPagination.defaultProps = defaultProps;
