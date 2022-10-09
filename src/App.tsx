import { CircularProgress } from "@chakra-ui/progress";
import { FC, Suspense } from "react";
import Table from "./components/Table";
import { Flex } from "@chakra-ui/react";
const App: FC = () => (
  // centering by chakraUI
  <Flex align={"center"} justifyContent={"center"}>
    <Suspense fallback={<CircularProgress isIndeterminate color="green.300" />}>
      <Table />
    </Suspense>
  </Flex>
);

export default App;
