import { useLocation } from "react-router-dom";
import { NavigationMenuDemo } from "./NavBar";
import { AppSidebar } from "./SideBar1";
import { useState, useEffect } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";

type PageLayoutProps = {
  children: React.ReactNode;
};

const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    const handleChange = () => setMatches(media.matches);
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, [query]);

  return matches;
};

const PageLayout = ({ children }: PageLayoutProps) => {
  const location = useLocation();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const noNav = ["/login", "/signup", ""];

  return (
    <div className="flex flex-col items-center ">
      {!noNav.includes(location.pathname) && (
        <>
          {isMobile ? (
            <SidebarProvider>
              <AppSidebar />
            </SidebarProvider>
          ) : (
            <NavigationMenuDemo />
          )}
        </>
      )}

      <div
        className={`flex justify-center items-center w-full ${
          isMobile ? "pt-16" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
