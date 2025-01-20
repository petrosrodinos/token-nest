import { FC } from "react";
import TokenCardLayout from "../../components/TokenCards/index";
import ContentHeader from "../../components/ContentHeader";
import Container from "../../components/Container";
import MarketCard from "../../components/TokenCards/MarketCard";
import { token } from "../../constants/tokens";

const Market: FC = () => {
  return (
    <Container>
      <ContentHeader
        title="Select Your Token"
        description="Choose a token to invest in from the available options."
      />

      <div className="p-6 gap-5 flex justify-center flex-wrap">
        <TokenCardLayout token={token}>
          <MarketCard token={token} />
        </TokenCardLayout>
        <TokenCardLayout token={token}>
          <MarketCard token={token} />
        </TokenCardLayout>
        <TokenCardLayout token={token}>
          <MarketCard token={token} />
        </TokenCardLayout>
        <TokenCardLayout token={token}>
          <MarketCard token={token} />
        </TokenCardLayout>
        <TokenCardLayout token={token}>
          <MarketCard token={token} />
        </TokenCardLayout>
      </div>
    </Container>
  );
};

export default Market;
