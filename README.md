# Minha Saúde Feminina

O Minha Saúde Feminina é um aplicativo de apoio ao autocuidado da mulher que reúne acompanhamento do ciclo menstrual, registro de sintomas, lembretes, conteúdos educativos e canais de apoio em uma experiência leve, acolhedora e fácil de usar.

Protótipo mobile frontend em React Native com Expo para um aplicativo de saúde da mulher. O foco desta versão é demonstrar navegação, telas base e componentes reutilizáveis.

## Tecnologias

- React Native
- Expo SDK 55
- TypeScript
- React Navigation
- Dados mockados em arquivos locais
- Estilização com `StyleSheet`

## Estrutura

```text
src/
  components/
  data/
  navigation/
  screens/
  theme/
```

## Instalação

Requisitos principais:

- Node.js LTS
- npm
- Expo Go no celular, ou Android Studio/emulador para rodar no computador

Instale as dependências:

```bash
npm install
```

## Rodar o projeto

Inicie o Expo:

```bash
npm run start
```

Depois, use o QR Code no celular com Expo Go ou escolha uma das opções do terminal.

Para abrir direto no Android:

```bash
npm run android
```

Para abrir no navegador durante testes de layout:

```bash
npm run web
```

## Gerar APK Android

O arquivo `eas.json` já inclui um perfil `preview` configurado para gerar `.apk`.

1. Crie ou acesse uma conta Expo.
2. Faça login:

```bash
npx eas-cli login
```

3. Configure o projeto no EAS, se ainda não estiver configurado:

```bash
npx eas-cli build:configure
```

4. Gere o APK Android:

```bash
npx eas-cli build -p android --profile preview
```

Ao final do build, o EAS fornece um link para baixar e instalar o APK. Para publicação na Google Play, o formato recomendado costuma ser `.aab`, usando o perfil `production`.

## Observação de saúde

As informações do app são educativas e não substituem avaliação médica. Em caso de sintomas, dúvidas ou sinais de alerta, procure a UBS para confirmação e acompanhamento.
