import { Plus, Edit, Trash, MessageCircle } from "lucide-react";
import FloatingActions from "@/components/System/FloatingActions";

export default {
  title: "System/FloatingActions",
  component: FloatingActions,
  tags: ["autodocs"],
};

export const Default = () => (
  <div style={{ minHeight: "150vh", padding: 32, background: "#f9f9f9" }}>
    <h2>스크롤해서 FloatingActions가 고정되는지 확인해보세요!</h2>
    <p style={{ marginBottom: 1000 }}>
      아래로 스크롤해도 FloatingActions가 화면 하단에 고정되어 있어야 합니다.
    </p>
    <FloatingActions>
      <FloatingActions.Item as={<Plus size={24} />} />
      <FloatingActions.Item as={<Edit size={24} />} />
    </FloatingActions>
  </div>
);

export const BottomLeft = () => (
  <FloatingActions position="bottom-left">
    <FloatingActions.Item
      as={
        <button
          className="bg-destructive flex h-12 w-12 items-center justify-center rounded-full text-white shadow"
          aria-label="삭제"
        >
          <Trash size={24} />
        </button>
      }
    />
    <FloatingActions.Item
      as={
        <button
          className="bg-muted flex h-12 w-12 items-center justify-center rounded-full text-black shadow"
          aria-label="메시지"
        >
          <MessageCircle size={24} />
        </button>
      }
    />
  </FloatingActions>
);

export const FloatingDemo = () => (
  <div style={{ minHeight: "200vh", padding: 32, background: "#f9f9f9" }}>
    <h2>FloatingActions Floating Test</h2>
    <p>
      아래로 스크롤해도 화면 하단(오른쪽)에 FloatingActions가 계속 떠 있으면
      정상입니다.
      <br />
      (아래로 많이 스크롤해보세요!)
    </p>
    <FloatingActions position="bottom-right">
      <FloatingActions.Item as={<Plus size={24} />} />
      <FloatingActions.Item as={<Edit size={24} />} />
    </FloatingActions>
    <div style={{ height: 1200, background: "#eee", margin: "32px 0" }}>
      <p style={{ padding: 16 }}>
        여기는 더미 컨텐츠입니다. 스크롤을 만들어줍니다.
      </p>
    </div>
  </div>
);
