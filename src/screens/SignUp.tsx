import { Center, Heading, Image, ScrollView, Text, VStack } from "native-base";

import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as yup from 'yup';

import BackgroundImg from "@assets/background.png";
import Logo from "@assets/logo.svg";

import { Button } from "@components/Button";
import { Input } from "@components/Input";

import { useNavigation } from "@react-navigation/native";

import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
}

const SignUpSchema = yup.object({
  name: yup.string().required("Informe o nome"),
  email: yup.string().required("Informe o E-mail").email("E-mail inválido"),
  password: yup.string().required("informe a senha").min(6, "A senha deve ter no mínimo 6 dígitos"),
  password_confirm: yup.string().required("Confirme a senha").oneOf([yup.ref('password')], 'A confirmação da senha não confere')
});

export const SignUp = () => {

  const { navigate } = useNavigation<AuthNavigatorRoutesProps>();

  const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
    resolver: yupResolver(SignUpSchema)
  });

  const handleSignUp = (data: FormDataProps) => {
    console.log(data);
  };

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

          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Nome"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.name?.message}
              />
            )} />

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
              />
            )} />

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
            )} />

          <Controller
            control={control}
            name="password_confirm"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="confirmar a Senha"
                secureTextEntry
                onChangeText={onChange}
                value={value}
                onSubmitEditing={handleSubmit(handleSignUp)}
                returnKeyType="send"
                errorMessage={errors.password_confirm?.message}
              />
            )} />

          <Button
            title="Criar e acessar"
            onPress={handleSubmit(handleSignUp)}
            mt={2}
          />

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

