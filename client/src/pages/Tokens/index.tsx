import { FC } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import Container from "../../components/Container";
import UserTokens from "./UserTokens";
import Staking from "./Staking";

const Tokens: FC = () => {
  return (
    <Container>
      <Tabs defaultValue="tokens" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger className="w-full" value="tokens">
            Bought Tokens
          </TabsTrigger>
          <TabsTrigger className="w-full" value="staking">
            Staked Tokens
          </TabsTrigger>
        </TabsList>
        <TabsContent value="tokens">
          <UserTokens />
        </TabsContent>
        <TabsContent value="staking">
          <Staking />
        </TabsContent>
      </Tabs>
    </Container>
  );
};

export default Tokens;
