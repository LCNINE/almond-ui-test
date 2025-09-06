import { useState } from "react";
import Rating from "@/components/ui/rating";

export default function RatingDemo() {
  const [rating1, setRating1] = useState(3);
  const [rating2, setRating2] = useState(0);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="mb-2 text-sm font-medium">읽기 전용 (4.5점)</h3>
        <Rating value={4.5} readonly />
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium">
          상호작용 가능 (현재: {rating1}점)
        </h3>
        <Rating value={rating1} onChange={setRating1} />
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium">
          큰 크기 (현재: {rating2}점)
        </h3>
        <Rating value={rating2} onChange={setRating2} size="lg" />
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium">비활성화</h3>
        <Rating value={3} disabled />
      </div>
    </div>
  );
}
