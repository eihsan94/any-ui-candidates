import { Button, MantineProvider, Text } from '@mantine/core';
export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div className="flex flex-col items-center h-screen w-screen justify-center">
        <Text className="text-3xl mb-4">
          Mantine with Tailwind
        </Text>
        <Button variant="default">
          Button Mantine tailwind
        </Button>
      </div>
    </MantineProvider>
  );
}