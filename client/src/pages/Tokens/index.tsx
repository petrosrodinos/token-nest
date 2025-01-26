import { FC } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import Container from "../../components/Container";
import UserTokens from "./UserTokens";
import Staking from "./Staking";
import ContentHeader from "../../components/ContentHeader";
import { useAccount } from "wagmi";
import Message from "../../components/Message";

const Tokens: FC = () => {
  const { isConnected } = useAccount();

  return (
    <Container>
      <ContentHeader
        title="Your Tokens"
        description="Here you can see the tokens you have bought and stake them."
      />
      <Tabs defaultValue="tokens" className="w-full mt-2">
        <TabsList className="w-full">
          <TabsTrigger className="w-full" value="tokens">
            Bought Tokens
          </TabsTrigger>
          <TabsTrigger className="w-full" value="staking">
            Staked Tokens
          </TabsTrigger>
        </TabsList>
        {isConnected && (
          <>
            <TabsContent value="tokens">
              <UserTokens />
            </TabsContent>
            <TabsContent value="staking">
              <Staking />
            </TabsContent>
          </>
        )}
        {!isConnected && (
          <Message
            variant="destructive"
            title="Warning"
            description="Please connect your wallet to view your tokens."
          />
        )}
      </Tabs>
    </Container>
  );
};

export default Tokens;
