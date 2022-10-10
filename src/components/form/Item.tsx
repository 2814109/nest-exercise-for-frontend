import { FC } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";
import { FieldError, UseFormRegister } from "react-hook-form";

type Props = {
  keyString: string;
  typeKey?: "text" | "number";
  error: FieldError | undefined;
  register: UseFormRegister<any>;
};

// TODO: manage to multiple validate by register
const FormItem: FC<Props> = ({
  keyString,
  error,
  register,
  typeKey = "text",
}) => {
  return (
    <FormControl isInvalid={Boolean(error)}>
      <FormLabel htmlFor={keyString}>{keyString.toUpperCase()}</FormLabel>
      <Input
        id={keyString}
        placeholder={keyString}
        type={typeKey}
        {...register(keyString, {
          required: "This is required",
        })}
      />
      <FormErrorMessage>{error && error.message}</FormErrorMessage>
    </FormControl>
  );
};

export default FormItem;
