import { useReviewsByBusinessId } from "@/hooks/tan-stack/useReview";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { IReview } from "@/types/Type";
import OneReview from "./OneReview";
import AddReview from "./AddReview";

interface AllReviewsProps {
  id: string;
}

const AllReviews = ({ id }: AllReviewsProps) => {
  const { data: reviews, isLoading, isError } = useReviewsByBusinessId(id);

  if (isLoading) {
    return <div>Loading reviews...</div>;
  }

  if (isError) {
    return <div>Error loading reviews. Please try again later.</div>;
  }
  console.log(reviews);

  return (
    <div className="p-4">
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">Show Reviews</Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="w-full max-w-sm mx-auto">
            <DrawerHeader>
              <DrawerTitle>reviews:</DrawerTitle>
              <DrawerDescription>
                there is {reviews?.length} review right now
              </DrawerDescription>
            </DrawerHeader>
          </div>
          <div className="p-4 pb-0">
            <DrawerFooter>
              <div className="p-4 max-h-[53vh] overflow-y-auto">
                {reviews && reviews.length > 0 ? (
                  reviews.map((review: IReview) => (
                    <OneReview review={review} key={review._id} />
                    // <div key={review._id}>{review.content}</div>
                  ))
                ) : (
                  <div>No reviews yet.</div>
                )}
              </div>
              <AddReview businessId={id} />

              <DrawerClose asChild>
                <Button variant="outline">close</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default AllReviews;
