import { FC } from "react";
import TokenCard from "../../components/TokenCard";
import ContentHeader from "../../components/ContentHeader";

const Market: FC = () => {
  const token: any = {
    name: "Token Name",
    symbol: "TKN",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt8jdjLUPZk7HoxEG4C7qMG2723TlZQBkMig&s",
    tokensSold: 1000000,
  };
  return (
    <div className="w-full mt-[60px] mr-2">
      <ContentHeader
        title="Select Your Token"
        description="Choose a token to invest in from the available options."
      />

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
