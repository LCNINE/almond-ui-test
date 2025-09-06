import CategoryButton from "@/components/ui/category-button";

export default function CategoryButtonDemo() {
  return (
    <div className="flex gap-4">
      <CategoryButton
        imageSrc="/images/food.jpg"
        title="음식"
        onClick={() => console.log("음식 카테고리 클릭")}
      />
      <CategoryButton
        imageSrc="/images/fashion.jpg"
        title="패션"
        onClick={() => console.log("패션 카테고리 클릭")}
        as="a"
        href="/category/fashion"
      />
      <CategoryButton
        imageSrc="/images/electronics.jpg"
        title="전자제품"
        onClick={() => console.log("전자제품 카테고리 클릭")}
      />
    </div>
  );
}
