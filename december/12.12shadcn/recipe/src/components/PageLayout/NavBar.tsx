import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { ModeToggle } from "./mode-toggle";

const components: (
  | "ModeToggle"
  | { title: string; href: string; description: string }
)[] = [
  {
    title: "Home",
    href: "/home",
    description:
      "The main page of the application, introducing the app and its features.",
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
  },
  {
    title: "Profile Page",
    href: "/profile",
    description:
      "View and edit your profile information, such as name and email.",
  },
  "ModeToggle",
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu className="flex items-center justify-center p-4 bg-sky-500/100 dark:bg-gray-800">
      <NavigationMenuList className="flex justify-center space-x-6">
        {components.map((component) =>
          component === "ModeToggle" ? (
            <NavigationMenuItem key="mode-toggle">
              <ModeToggle />
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem key={component.href}>
              <NavigationMenuLink
                href={component.href}
                className={`${navigationMenuTriggerStyle()} text-center text-gray-800 hover:bg-sky-600 dark:hover:bg-gray-700 rounded-lg p-2`}
              >
                {component.title}
              </NavigationMenuLink>
            </NavigationMenuItem>
          )
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
