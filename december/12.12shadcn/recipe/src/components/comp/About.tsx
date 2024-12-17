import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <div className="max-w-2xl p-4 mx-auto mt-8">
      <Badge className="mb-6 text-3xl font-bold ">
        About Us
      </Badge>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is this website?</AccordionTrigger>
          <AccordionContent>
            Our platform is designed to share and discover recipes from all
            kinds of cuisines and cultures. It's the perfect space for cooking
            enthusiasts to learn and share new recipes.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>How can I share recipes?</AccordionTrigger>
          <AccordionContent>
            Any user can register and upload recipes easily. The upload process
            is simple and allows adding images, categories, difficulty levels,
            and detailed instructions.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Who is this website for?</AccordionTrigger>
          <AccordionContent>
            This website is for anyone who loves cooking, exploring new recipes,
            or sharing their culinary creations with the world.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default About;
