import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Suspense } from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes/router";
import CustomBackdrop from "./components/CustomBackdrop";

function App() {

  const queryClient = new QueryClient();
  console.log("---------------------------app build-----------------------",import.meta.env.VITE_VARIABLE)
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<CustomBackdrop open={true}/>}>
        <RouterProvider router={router} />
      </Suspense>
    </QueryClientProvider>
  )
}

export default App