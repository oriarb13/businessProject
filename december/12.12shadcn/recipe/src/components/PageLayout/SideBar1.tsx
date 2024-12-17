import { Home, Search, Menu } from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";

const components: { title: string; href: string; description: string; icon?: React.ComponentType }[] = [
  {
    title: "Home",
    href: "/home",
    description: "The main page of the application, introducing the app and its features.",
    icon: Home, 
  },
  {
    title: "Recipe List",
    href: "/recipe-list",
    description: "Displays a list of all recipes available in the application.",
  },
  {
    title: "Add Recipe",
    href: "/add-recipe",
    description: "A page where users can add a new recipe to the collection.",
  },
  {
    title: "Search Page",
    href: "/search",
    description: "Search for recipes by keywords or filter by categories.",
    icon: Search,
  },
  {
    title: "Profile Page",
    href: "/profile",
    description: "View and edit your profile information, such as name and email.",
  },
];

export function AppSidebar() {
  const { toggleSidebar, open } = useSidebar();

  return (
    <SidebarProvider>
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-white">
        <button onClick={toggleSidebar} className="text-black">
          <Menu size={24} />
        </button>
      </div>

      <Sidebar
        className={`w-64 bg-sky-500/100 text-black fixed top-0 left-0 h-full z-50 transition-transform ${
          open ? "transform-none" : "-translate-x-full"
        }`}
      >
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel className="mb-2 text-lg font-bold text-black">Menu</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {components.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a
                        href={item.href}
                        className="flex items-center gap-2 px-4 py-2 text-black transition rounded-md hover:bg-sky-600"
                      >
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
}
