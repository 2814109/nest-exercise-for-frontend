import { FC } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@chakra-ui/react";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
} from "@chakra-ui/react";

type FormType = {
  title: string;
  price: number;
  author: string;
};

const BasicForm: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormType>();

  const toast = useToast();

  function onSubmit(values: FormType) {
    console.log(values);
    toast({
      title: "Book Registered.",
      description: "We've registered your book for you.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  }
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

      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  );
};

export default BasicForm;
