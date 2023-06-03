import { Center, Heading, Image, ScrollView, Text, VStack } from "native-base";

import BackgroundImg from "@assets/background.png";
import Logo from "@assets/logo.svg";

import { Button } from "@components/Button";
import { Input } from "@components/Input";

import { useNavigation } from "@react-navigation/native";

import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

type Props = {
  email: string;
  password: string;
};

const SignInSchema = yup.object({
  email: yup.string().required("Informe um e-mail").email("E-mail inválido"),
  password: yup.string().required("informe uma senha"),
});


export const SignIn = () => {
  const { navigate } = useNavigation<AuthNavigatorRoutesProps>();

  const { control, formState: { errors }, handleSubmit } = useForm<Props>({
    resolver: yupResolver(SignInSchema),
  });

  const handleCreateAnAccount = () => {
    navigate("signUp");
  };

  const handleSignIn = (data: Props) => {
    console.log(data);

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
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.email?.message}
              />)}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Senha"
                secureTextEntry
                onChangeText={onChange}
                value={value}
                errorMessage={errors.password?.message}
              />
            )}
          />


          <Button title="Acessar" mt={4} onPress={handleSubmit(handleSignIn)} />
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
