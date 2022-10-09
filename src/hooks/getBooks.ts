import { useQuery } from "@tanstack/react-query";
import { request, gql } from "graphql-request";
const endpoint = import.meta.env.VITE_ENDPONT;

const useGetBooks = () => {
  const query = gql`
    query {
      books {
        id
        title
        author
        price
      }
    }
  `;

  return useQuery(["books"], async () => {
    const { books } = await request(endpoint, query);
    return books;
  });
};

export default useGetBooks;
