import { CircularProgress } from "@chakra-ui/progress";
import { FC, Suspense } from "react";
import Table from "./components/Table";
import { Flex } from "@chakra-ui/react";
import BasicModal from "./components/Modal";
const App: FC = () => (
  // centering by chakraUI
  <>
    <Flex align={"center"} justifyContent={"center"}>
      <BasicModal>test1</BasicModal>
    </Flex>
    <Flex align={"center"} justifyContent={"center"}>
      <Suspense
        fallback={<CircularProgress isIndeterminate color="green.300" />}
      >
        <Table />
      </Suspense>
    </Flex>
  </>
);

export default App;
