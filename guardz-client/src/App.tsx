import { isAxiosError } from 'axios';
import './App.css'
import { HomePage } from './pages/homePage/HomePage'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: (failureCount, error) => {
          if (
            isAxiosError(error)
          ) {
            console.log(`Aborting retry due to ${error.response?.status} status`);
            return false;
          }

          if (failureCount > 1) {
            return false;
          }

          return true;
        },
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <HomePage />
    </QueryClientProvider>
  )
}

export default App
