# Almond UI Registry 사용 가이드

## 개요

Almond UI는 shadcn/ui 형식의 registry를 제공하여, 필요한 컴포넌트만 선택적으로 설치할 수 있습니다.

## 설치 방법

### 1. 프로젝트 초기 설정

먼저 프로젝트에 shadcn-ui CLI를 설치합니다:

```bash
npx shadcn@latest init
```

### 2. Almond UI Registry 추가

`components.json` 파일에 Almond UI registry를 추가합니다:

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/global.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "registries": {
    "almond-ui": {
      "url": "https://raw.githubusercontent.com/LCNINE/almond-ui/main/registry"
    }
  }
}
```

### 3. 컴포넌트 설치

개별 컴포넌트를 설치하려면:

```bash
npx shadcn@latest add [registry-name]:[component-name]

# 예시
npx shadcn@latest add almond-ui:category-button
npx shadcn@latest add almond-ui:input
npx shadcn@latest add almond-ui:tabs
```

## 사용 가능한 컴포넌트

### Buttons

- `category-button` - 카테고리 선택 버튼
- `checkbox` - 체크박스
- `icon-button` - 아이콘 버튼
- `square-button` - 정사각형 버튼

### Forms

- `input` - 입력 필드
- `radio-group` - 라디오 그룹

### Base Components

- `tabs` - 탭 컴포넌트
- `rating` - 평점 컴포넌트
- `icon-text` - 아이콘과 텍스트 조합
- `section-title` - 섹션 타이틀
- `rounded-base-card` - 둥근 카드
- `image-wrapper` - 이미지 래퍼
- `linked-wrapper` - 링크 래퍼

## 컴포넌트 사용 예시

### Category Button

```tsx
import CategoryButton from "@/components/ui/category-button";

export default function Example() {
  return (
    <CategoryButton
      imageSrc="/images/category.jpg"
      title="카테고리명"
      onClick={() => console.log("clicked")}
    />
  );
}
```

### Input

```tsx
import Input from "@/components/ui/input";

export default function Example() {
  return (
    <Input
      label="라벨"
      placeholder="입력하세요"
      variant="underline"
      state="default"
    />
  );
}
```

### Tabs

```tsx
import { Tabs } from "@/components/ui/tabs";

export default function Example() {
  return (
    <Tabs defaultValue="tab1">
      <Tabs.List>
        <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
        <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">Content 1</Tabs.Content>
      <Tabs.Content value="tab2">Content 2</Tabs.Content>
    </Tabs>
  );
}
```

## 커스터마이징

각 컴포넌트는 Tailwind CSS 클래스를 사용하여 스타일을 커스터마이징할 수 있습니다:

```tsx
<CategoryButton
  className="transition-transform hover:scale-105"
  imageSrc="/images/custom.jpg"
  title="커스텀"
/>
```

## 의존성

Almond UI 컴포넌트들은 다음 패키지들을 사용합니다:

- `@radix-ui/react-*` - Radix UI 프리미티브
- `class-variance-authority` - 조건부 클래스 유틸리티
- `clsx` - 클래스명 유틸리티
- `tailwind-merge` - Tailwind 클래스 병합
- `lucide-react` - 아이콘

## 문제 해결

### 컴포넌트가 설치되지 않는 경우

1. `components.json` 파일의 registry URL이 올바른지 확인
2. 네트워크 연결 상태 확인
3. shadcn-ui CLI 버전 업데이트: `npm update shadcn`

### 스타일이 적용되지 않는 경우

1. Tailwind CSS 설정 확인
2. `global.css`에 Tailwind 지시어 포함 여부 확인
3. 컴포넌트 import 경로 확인

## 기여하기

새로운 컴포넌트를 추가하거나 기존 컴포넌트를 개선하려면:

1. Fork the repository
2. Create your feature branch
3. Add your component to `/registry/ui/`
4. Update registry index
5. Submit a pull request

## 라이선스

MIT License
