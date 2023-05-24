import { Center, IInputProps, Input as InputBase } from "native-base";

interface Props extends IInputProps {
  title: string;
}

export const Input = ({ ...rest }: IInputProps) => {
  return (
    <InputBase
      bg="gray.700"
      h={14}
      px={4}
      borderWidth={0}
      fontSize="md"
      color="white"
      fontFamily="body"
      marginBottom={4}
      placeholderTextColor="gray.300"
      _focus={{
        bg: "gray.700",
        borderWidth: 1,
        borderColor: "green.500",
      }}
      {...rest}
    />
  );
};
