import { useUserProfile } from "@/context/UserProfileContext";
import {
  Carousel,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  CarouselItem,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Link, useLocation } from "react-router-dom";

const Hero = () => {
  const { profile } = useUserProfile();
  const location = useLocation();
  

  return (
    <div className="relative">
      <Badge>
        <div className="p-1 text-4xl ">FAVORITE RECIPES</div>
      </Badge>
      <div className="relative">
        <Carousel orientation="horizontal" className="relative">
          <CarouselPrevious className="absolute z-20 -translate-y-1/2 top-1/2 -left-4" />
          <CarouselNext className="absolute z-20 -translate-y-1/2 top-1/2 -right-4" />
          <CarouselContent>
            {profile.fav.map((rec) => (
              <CarouselItem
                key={rec.id}
                className="flex flex-col justify-center pt-3 pb-20 text-center rounded-lg shadow-lg recs-center bg-grey-900 dark:bg-gray-800"
              >
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <div className="flex flex-col justify-center cursor-pointer recs-center">
                      <Link
                        to={`/recipe/${rec.id}`}
                        state={{ backgroundLocation: location }}
                        className="underline text-grey-500"
                      >
                        <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-gray-200">
                          {rec.title}
                        </h2>
                      </Link>
                      <img
                        src={rec.image}
                        alt={rec.title}
                        className="w-[85%] h-auto rounded-md max-h-70 mx-auto"
                      />
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="p-0 m-0 text-gray-800 bg-white rounded-md shadow-lg w-80 dark:text-gray-200 dark:bg-gray-700">
                    <p>
                      <strong>Difficulty:</strong> {rec.difficulty}
                    </p>
                    <p>
                      <strong>Created at:</strong> {rec.created_at}
                    </p>
                  </HoverCardContent>
                </HoverCard>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Hero;
