import { CircularProgress } from "@chakra-ui/progress";
import { FC, Suspense } from "react";
import Table from "./components/Table";
import { Flex } from "@chakra-ui/react";
import BasicModal from "./components/Modal";
import BasicForm from "./components/Form";
const App: FC = () => (
  // centering by chakraUI
  <>
    <Flex align={"center"} justifyContent={"center"} m={5}>
      <BasicModal buttonTitle="Create Book">
        <BasicForm />
      </BasicModal>
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
