import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { CircularProgress, Flex, useToast } from "@chakra-ui/react";
import useAddBooks from "../hooks/addBook";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
} from "@chakra-ui/react";
import { BookFormType } from "../types/book";
import useGetBooks from "../hooks/getBooks";

const BasicForm: FC = () => {
  const { mutate, isLoading, isSuccess } = useAddBooks();
  const { refetch } = useGetBooks();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<BookFormType>();

  const toast = useToast();

  function onSubmit(values: BookFormType) {
    mutate(values);
  }

  useEffect(() => {
    if (isSuccess) {
      refetch();
      toast({
        title: "Book Registered.",
        description: "We've registered your book for you.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
  }, [isSuccess]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={Boolean(errors.title)}>
        <FormLabel htmlFor="title">Book Tile</FormLabel>
        <Input
          id="title"
          placeholder="title"
          type="text"
          {...register("title", {
            required: "This is required",
            minLength: { value: 4, message: "Minimum length should be 4" },
          })}
        />
        <FormHelperText>title</FormHelperText>
        <FormErrorMessage>
          {errors.title && errors.title.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={Boolean(errors.price)}>
        <FormLabel htmlFor="price">Book Price</FormLabel>
        <Input
          id="price"
          placeholder="price"
          type="number"
          {...register("price", {
            required: "This is required",
          })}
        />
        <FormHelperText>price</FormHelperText>
        <FormErrorMessage>
          {errors.price && errors.price.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={Boolean(errors.author)}>
        <FormLabel htmlFor="author">Book Author</FormLabel>
        <Input
          id="author"
          placeholder="author"
          type="text"
          {...register("author", {
            required: "This is required",
            minLength: { value: 4, message: "Minimum length should be 4" },
          })}
        />
        <FormHelperText>author</FormHelperText>
        <FormErrorMessage>
          {errors.author && errors.author.message}
        </FormErrorMessage>
      </FormControl>

      {isLoading ? (
        <Flex align={"center"} justifyContent={"center"}>
          <CircularProgress isIndeterminate color="green.300" />
        </Flex>
      ) : (
        <Button
          mt={4}
          colorScheme="linkedin"
          isLoading={isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      )}
    </form>
  );
};

export default BasicForm;
