import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import NotFound from "./pages/notfound/NotFound";
import Home from "./pages/Home";
import RecipeList from "./pages/ReipeList/ReipeList";
import AddRecipe from "./pages/AddRecipe/AddRecipe";
import SearchPage from "./pages/SearchPage/SearchPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import RecipePage from "./pages/RecipePage/RecipePage";
import PageLayout from "./components/PageLayout/PageLayout";
import { UserProfileProvider } from "@/context/UserProfileContext";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();
  const state = location.state as { backgroundLocation?: Location };

  return (
    <UserProfileProvider>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <PageLayout>
          <Routes location={state?.backgroundLocation || location}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/recipe-list" element={<RecipeList />} />
            <Route path="/add-recipe" element={<AddRecipe />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          {/* modal */}
          {state?.backgroundLocation && (
            <Routes>
              <Route path="/recipe/:title" element={<RecipePage />} />
            </Routes>
          )}
        </PageLayout>
      </ThemeProvider>
    </UserProfileProvider>
  );
}

export default App;
