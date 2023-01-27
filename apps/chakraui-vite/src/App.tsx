import { ChakraProvider, Button, Text } from "@chakra-ui/react";

export default function App() {
  return (
    <ChakraProvider>
      <div className="flex flex-col items-center h-screen w-screen justify-center">
        <Text className="text-3xl mb-4">
          Chakaraui with Tailwind
        </Text>
        <Button>
          Button Chakaraui tailwind
        </Button>
      </div>
      </ChakraProvider>
  );
}