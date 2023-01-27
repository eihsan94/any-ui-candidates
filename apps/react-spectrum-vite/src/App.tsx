import {Button, defaultTheme, Provider} from '@adobe/react-spectrum';

export default function App() {
  return (
    <Provider theme={defaultTheme}>
      <div className="flex flex-col items-center h-screen w-screen justify-center">
        <div className="text-3xl mb-4">
        React Spectrum with tailwind
        </div>
      <Button
        variant="accent"
        >
        React Spectrum tailwind button
      </Button>
        </div>
    </Provider>
  );
}