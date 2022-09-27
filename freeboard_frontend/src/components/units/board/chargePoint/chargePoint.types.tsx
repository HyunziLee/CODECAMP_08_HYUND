import { ChangeEvent } from "react";

export interface IChargePointProps {
  data: {
    email: string;
    name: string;
    _id: string;
    picture: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
  };
  onClickPrice: () => void;
  priceList: number[];
  onSelect: (index: number) => (event: ChangeEvent<HTMLButtonElement>) => void;
  selectPrice: number;
  isClick: boolean[];
}
