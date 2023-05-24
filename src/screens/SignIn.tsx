import { Image, VStack, Text, Center, Heading } from "native-base";

import BackgroundImg from "@assets/background.png";
import Logo from "@assets/logo.svg";

import { Input } from "@components/Input";

export const SignIn = () => {
  return (
    <VStack flex={1} bg="gray.700" paddingLeft={10} paddingRight={10}>
      <Image
        source={BackgroundImg}
        alt="Pessoas treinando"
        resizeMode="contain"
        position="absolute"
      />
      <Center marginTop={24} marginBottom={24}>
        <Logo />
        <Text color="gray.100" fontSize="sm">
          Treine sua mente e o seu corpo
        </Text>
      </Center>

      <Center>
        <Heading
          color="gray.100"
          fontSize="xl"
          fontFamily="heading"
          marginBottom={6}
        >
          Acesse sua conta
        </Heading>

        <Input
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Input placeholder="Senha" secureTextEntry />
      </Center>
    </VStack>
  );
};
