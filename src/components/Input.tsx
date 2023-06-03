import { FormControl, IInputProps, Input as InputBase } from "native-base";

interface Props extends IInputProps {
  errorMessage?: string | null;
};

export const Input = ({ errorMessage = null, isInvalid, ...rest }: Props) => {


  const invalid = !!errorMessage || isInvalid;

  return (

    <FormControl isInvalid={invalid}>
      <InputBase
        bg="gray.700"
        h={14}
        px={4}
        borderWidth={0}
        fontSize="md"
        color="white"
        fontFamily="body"
        mt={2}
        placeholderTextColor="gray.300"
        isInvalid={invalid}
        _invalid={{
          borderWidth: 1,
          borderColor: "red.500"
        }}
        _focus={{
          bg: "gray.700",
          borderWidth: 1,
          borderColor: "green.500",
        }}
        {...rest}
      />

      <FormControl.ErrorMessage _text={{ color: "red.500" }}>{errorMessage}</FormControl.ErrorMessage>

    </FormControl>
  );
};
