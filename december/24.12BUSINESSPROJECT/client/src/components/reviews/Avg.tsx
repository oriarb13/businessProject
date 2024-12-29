import { useReviewsByBusinessId } from "@/hooks/tan-stack/useReview";

interface AvgProps {
  id: string;
}

const Avg = ({ id }: AvgProps) => {
  const { data: reviews, isLoading, isError } = useReviewsByBusinessId(id);

  if (isLoading) {
    return <div>Loading reviews...</div>;
  }

  if (isError) {
    return <div>Error loading reviews. Please try again later.</div>;
  }

  if (!reviews || reviews.length === 0) {
    return <div>No reviews available for this business.</div>;
  }

  // calc
  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  const avgRating = totalRating / reviews.length;

  //  color
  const ratingColor =
    avgRating < 2.5
      ? "text-red-500"
      : avgRating < 4
      ? "text-green-500"
      : "text-yellow-500";

  return (
    <div className={`text-xl font-bold ${ratingColor}`}>
      Average Rating: {avgRating.toFixed(1)} ⭐
    </div>
  );
};

export default Avg;