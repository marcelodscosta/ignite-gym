import { Image, VStack, Text, Center, Heading, ScrollView } from "native-base";

import BackgroundImg from "@assets/background.png";
import Logo from "@assets/logo.svg";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

import { useNavigation } from "@react-navigation/native";

import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

export const SignUp = () => {
  const { navigate } = useNavigation<AuthNavigatorRoutesProps>();

  const handleGoBackLogin = () => {
    navigate("signIn");
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} bg="gray.700" paddingLeft={10} paddingRight={10}>
        <Image
          source={BackgroundImg}
          alt="Pessoas treinando"
          resizeMode="contain"
          position="absolute"
        />
        <Center marginTop={24} marginBottom={12}>
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
            Crie sua conta
          </Heading>

          <Input placeholder="Nome" />

          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input placeholder="Senha" secureTextEntry />
          <Input placeholder="confirmar a Senha" secureTextEntry />

          <Button title="Criar e acessar" />
        </Center>

        <Button
          marginTop={8}
          title="Voltar para o login"
          variant="outline"
          onPress={handleGoBackLogin}
        />
      </VStack>
    </ScrollView>
  );
};
