import { Button } from 'antd';
import 'antd/dist/reset.css';

export default function App() {
  return (

      <div className="flex flex-col items-center h-screen w-screen justify-center">
        <div className="text-3xl mb-4">
          antd with Tailwind
        </div>
        <Button className='mt-1'>
          Button antd tailwind
        </Button>
      </div>

  );
}