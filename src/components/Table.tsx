import { FC } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import useGetBooks from "../hooks/getBooks";
import { Book } from "../types/book";

const BasicTable: FC = () => {
  const { data: books } = useGetBooks();
  console.log(books);
  return (
    <TableContainer>
      <Table variant="striped">
        <TableCaption>Your Library</TableCaption>
        <Thead>
          <Tr>
            <Th>Id</Th>
            <Th>Title</Th>
            <Th isNumeric>Price</Th>
            <Th>Author</Th>
          </Tr>
        </Thead>
        <Tbody>
          {books?.map((book: Book) => (
            <Tr key={book.id}>
              <Td>{book.id}</Td>
              <Td>{book.title}</Td>
              <Td isNumeric>{book.price}</Td>
              <Td>{book.author}</Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Id</Th>
            <Th>Title</Th>
            <Th isNumeric>Price</Th>
            <Th>Author</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default BasicTable;
