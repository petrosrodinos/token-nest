import { FC } from "react";
import TokenCardLayout from "../../components/TokenCards/index";
import ContentHeader from "../../components/ContentHeader";
import Container from "../../components/Container";
import MarketCard from "../../components/TokenCards/MarketCard";
import { useSupabase } from "../../hooks/useSupabase";
import { useEffect } from "react";
import { Spinner } from "../../components/ui/spinner";
import { AlertCircle } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "../../components/ui/alert";

const Market: FC = () => {
  const { getTokens, data, error, loading } = useSupabase();

  useEffect(() => {
    getTokens();
  }, []);

  return (
    <Container>
      <ContentHeader
        title="Select Your Token"
        description="Choose a token to invest in from the available options."
      />
      <Spinner loading={loading} color="blue" />
      {(error || data?.length == 0) && (
        <Alert className="mt-2" variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Warning</AlertTitle>
          <AlertDescription>Could not get tokens,try again later.</AlertDescription>
        </Alert>
      )}
      <div className="p-6 gap-5 flex justify-center flex-wrap">
        {data?.map((token: any) => (
          <TokenCardLayout key={token.id} token={token}>
            <MarketCard token={token} />
          </TokenCardLayout>
        ))}
        {/* <TokenCardLayout token={token}>
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
        </TokenCardLayout> */}
      </div>
    </Container>
  );
};

export default Market;
