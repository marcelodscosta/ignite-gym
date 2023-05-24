import { Button as ButtonBase, IButtonProps, Text } from "native-base";

interface Props extends IButtonProps {
  title: string;
  variant?: "solid" | "outline";
}

export const Button = ({ title, variant = "solid", ...rest }: Props) => {
  return (
    <ButtonBase
      width="full"
      height={14}
      background={variant === "outline" ? "transparent" : "green.700"}
      rounded="sm"
      borderWidth={variant === "outline" ? 1 : 0}
      borderColor="green.500"
      _pressed={{
        bg: variant === "outline" ? "gray.500" : "green.500",
      }}
      {...rest}
    >
      <Text
        color={variant === "outline" ? "green.500" : "white"}
        fontFamily="heading"
        fontSize="sm"
      >
        {title}
      </Text>
    </ButtonBase>
  );
};
