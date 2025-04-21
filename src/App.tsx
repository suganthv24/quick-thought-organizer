
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NotesGrid from "@/components/NotesGrid";

const queryClient = new QueryClient();

function RequireAuth({ children }: { children: React.ReactNode }) {
  // Fake auth logic with localStorage
  const loggedIn = typeof window !== "undefined" && localStorage.getItem("isLoggedIn") === "true";
  return loggedIn ? children : <Navigate to="/login" replace />;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={
            <RequireAuth>
              {/* Dashboard is the NotesGrid in a container */}
              <div className="min-h-screen bg-[#F5F6FA] font-sans">
                <div className="container mx-auto p-4 max-w-6xl">
                  <header className="py-6 mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <h1 className="text-3xl font-semibold text-[#202124] tracking-tight">NoteGenius+</h1>
                    <button
                      className="bg-gray-200 px-5 py-2 rounded-full"
                      onClick={() => {
                        localStorage.removeItem("isLoggedIn");
                        window.location.href = "/";
                      }}
                    >
                      Log Out
                    </button>
                  </header>
                  <NotesGrid />
                </div>
              </div>
            </RequireAuth>
          } />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
