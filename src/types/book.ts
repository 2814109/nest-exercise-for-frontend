export type Book = {
  id: string;
  title: string;
  price: number;
  author: string;
};

export type BookFormType = Omit<Book, "id">;
