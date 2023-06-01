import { Center, Heading } from "native-base";

type Props = {
  title: string;
}

export const ScreenHeader = ({ title }: Props) => {
  return (
    <Center bg="gray.600" pt={16} pb={6} mb={12}>
      <Heading
        color="gray.100"
        fontFamily="heading"
        fontSize="xl">
        {title}
      </Heading>
    </Center>
  );
};