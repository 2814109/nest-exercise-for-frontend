import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { CircularProgress, Flex, useToast } from "@chakra-ui/react";
import useAddBooks from "../hooks/addBook";
import { Button, Box } from "@chakra-ui/react";
import { BookFormType } from "../types/book";
import useGetBooks from "../hooks/getBooks";
import FormItem from "./form/Item";
const BasicForm: FC = () => {
  const { mutate, isLoading, isSuccess } = useAddBooks();
  const { refetch } = useGetBooks();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<BookFormType>();

  const toast = useToast();

  const onSubmit = (values: BookFormType) => {
    mutate(values);
  };

  useEffect(() => {
    if (isSuccess) {
      refetch();
      reset();
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
      <Box m={4}>
        <FormItem error={errors.title} keyString="title" register={register} />
      </Box>

      <Box m={4}>
        <FormItem
          error={errors.price}
          keyString="price"
          register={register}
          typeKey="number"
        />
      </Box>

      <Box m={4}>
        <FormItem
          error={errors.author}
          keyString="author"
          register={register}
        />
      </Box>

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
