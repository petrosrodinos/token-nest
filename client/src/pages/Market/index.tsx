import { FC } from "react";
import TokenCard from "../../components/TokenCard";

const Market: FC = () => {
  const token: any = {
    name: "Token Name",
    symbol: "TKN",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt8jdjLUPZk7HoxEG4C7qMG2723TlZQBkMig&s",
    tokensSold: 1000000,
  };
  return (
    <div>
      <div className="p-6 gap-5 flex justify-center flex-wrap">
        <TokenCard token={token} />
        <TokenCard token={token} />
        <TokenCard token={token} />
        <TokenCard token={token} />
      </div>
    </div>
  );
};

export default Market;
