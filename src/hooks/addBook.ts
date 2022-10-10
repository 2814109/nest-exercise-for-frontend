import { useMutation } from "@tanstack/react-query";
import { request, gql } from "graphql-request";
import { BookFormType } from "../types/book";
const endpoint = import.meta.env.VITE_ENDPONT;

const useAddBooks = () => {
  const query = gql`
    mutation AddBook($title: String!, $price: Int!, $author: String!) {
      addBook(newBook: { title: $title, price: $price, author: $author }) {
        title
      }
    }
  `;

  return useMutation(["add-books"], async (variables: BookFormType) => {
    const { addBook } = await request(endpoint, query, {
      title: variables.title,
      price: Number(variables.price),
      author: variables.author,
    });
    return addBook;
  });
};

export default useAddBooks;
