import { Image, VStack, Text, Center, Heading, ScrollView } from "native-base";

import BackgroundImg from "@assets/background.png";
import Logo from "@assets/logo.svg";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

import { useNavigation } from "@react-navigation/native";

import { AuthNavigatorRoutesProps } from "../Routes/auth.routes";

export const SignIn = () => {
  const { navigate } = useNavigation<AuthNavigatorRoutesProps>();

  const handleCreateAnAccount = () => {
    navigate("signUp");
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} bg="gray.700" paddingLeft={10} paddingRight={10}>
        <Image
          defaultSource={BackgroundImg}
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

          <Button title="Acessar" />
        </Center>

        <Center marginTop={24}>
          <Text
            color="gray.100"
            fontSize="sm"
            marginBottom={3}
            fontFamily="body"
          >
            Ainda não tem acesso?
          </Text>
          <Button
            title="Criar Conta"
            variant="outline"
            onPress={handleCreateAnAccount}
          />
        </Center>
      </VStack>
    </ScrollView>
  );
};
