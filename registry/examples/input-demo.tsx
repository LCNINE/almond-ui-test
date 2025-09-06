import { useState } from "react";
import Input from "@/components/ui/input";

export default function InputDemo() {
  const [value, setValue] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  return (
    <div className="space-y-6">
      <Input
        label="기본 입력"
        placeholder="텍스트를 입력하세요"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <Input
        label="이메일"
        type="email"
        placeholder="email@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        variant="underline"
        state={error ? "error" : "default"}
      />

      <Input label="채워진 스타일" placeholder="입력하세요" variant="filled" />

      <Input
        label="비활성화"
        placeholder="입력 불가"
        disabled
        value="비활성화된 텍스트"
      />
    </div>
  );
}
