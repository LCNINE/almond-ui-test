# 📝 Almond UI Library 협업 규칙 (v3)

---

## 1. 멤버십/일반 할인 데이터 구조

- **멤버십 할인 관련 필드는 반드시 `membership` 접두사**를 붙입니다.
  - 예: `membershipDiscountPrice`, `membershipDiscountRate`, `isMembershipDiscount`
- **할인율은 `number` 타입으로 소수점 없이 표현하며**, 퍼센트 기호는 UI에서 포맷합니다.
- **일반 할인 컬럼이 있을 경우**, `discountPrice`, `discountRate` 등 구분해서 명시합니다.
- **UI 컴포넌트는 숫자 데이터로 받아 포맷을 직접 처리**해야 하며, 파싱된 문자열은 사용하지 않습니다.

---

## 2. Next.js 및 React SPA 호환 렌더링 전략

### 2-1. 이미지: ImageWrapper 사용

- **Next.js 환경에서는 자동으로 `next/image`를 사용하고**, 일반 React(CRA 등) 환경에서는 `<img>`로 fallback 됩니다.
- 사이즈, object-fit 등 레이아웃 스타일은 내부에서 통일되며, 외부에서는 `src`, `alt` 정도만 지정하면 됩니다.

```tsx
<ImageWrapper
  src="/images/thumb.jpg"
  alt="썸네일"
  fill
  sizes="65px"
  className="object-cover"
/>
```

<LinkWrapper href="/product/123">
  상품명 또는 썸네일
</LinkWrapper>

---

## 3. 공통 컴포넌트 설계 원칙 (WishCard, OrderCard 등)

- **링크는 반드시 `productLink`로 문자열 href만 전달**합니다.
- **이미지는 반드시 `imageSrc`, `imageAlt`로 전달**합니다.
- 내부에서는 `ImageWrapper`, `LinkWrapper`를 사용해 프레임워크 환경에 맞게 자동 대응합니다.

```tsx
<WishCard
  productName="고속도로 꼬깔콘"
  originalPrice={37860}
  productLink="/product/123"
  imageSrc="/images/thumb.png"
  imageAlt="꼬깔콘 썸네일"
  onAddToCart={() => alert("장바구니 담기")}
  onDelete={() => alert("삭제")}
/>
```

---

## 4. 컴포넌트 스타일 규칙

- **컨테이너 컴포넌트는 padding, border 등 레이아웃을 책임집니다.**
- **내부 요소는 spacing(gap, margin 등)을 적절히 관리합니다.**
- **스타일은 내부 Tailwind CSS 기준으로 통일**되며, 외부에서 className 덮어쓰는 방식은 지양합니다.
- **불필요한 중첩 DOM, 중복 스타일 선언은 피하고, 레이아웃 책임을 명확히 분리합니다.**

---

## 5. 향후 확장 예정 규칙 항목

- ✅ **접근성(A11y)**: ARIA 속성, 키보드 포커스, role 대응 방식 정의 예정
- ✅ **다국어(i18n)**: 텍스트 전달 방식 및 언어 리소스 처리 규칙 추가 예정
- ✅ **variant 기반 UI 분기**: `variant="sold-out"` 등 UI 표현 제어 방식 도입 예정
- ✅ **디자인 토큰 적용 방식**: Tailwind 커스텀 테마 적용 규칙 도입 예정

---

이 문서는 Almond UI 컴포넌트 라이브러리의 재사용성과 유지보수성을 높이기 위한 공식 규칙입니다.

---

# 🌰 Almond UI - Modern Design System

shadcn/ui 스타일의 registry를 제공하여 필요한 컴포넌트만 선택적으로 설치할 수 있습니다.

## 🚀 빠른 시작

### shadcn CLI를 통한 설치 (권장)

```bash
# 1. shadcn-ui 초기화
npx shadcn@latest init

# 2. components.json에 Almond UI registry 추가
# "registries": {
#   "almond-ui": {
#     "url": "https://raw.githubusercontent.com/LCNINE/almond-ui/main/registry"
#   }
# }

# 3. 컴포넌트 설치
npx shadcn@latest add almond-ui:category-button
npx shadcn@latest add almond-ui:input
npx shadcn@latest add almond-ui:tabs
```

### 🔄 업데이트 가이드

#### Registry 제공자 (almond-ui 개발자)

- 컴포넌트 수정 후 일반적인 git workflow를 따릅니다:
  ```bash
  git add .
  git commit -m "feat: Update component styles"
  git push origin main
  ```

#### Registry 사용자

컴포넌트 업데이트가 필요할 때 다음 명령어를 사용합니다:

1. **특정 컴포넌트만 업데이트**

   ```bash
   # 예: category-button 컴포넌트 업데이트
   npx shadcn@latest add almond-ui:category-button --overwrite
   ```

   - `--overwrite`: 로컬 수정사항을 registry 버전으로 덮어씁니다
   - 옵션을 생략하면 로컬 수정사항이 보존됩니다

2. **전체 컴포넌트 업데이트**
   ```bash
   npx shadcn@latest refresh
   ```
   - 모든 컴포넌트를 최신 버전으로 업데이트합니다
   - 대규모 디자인 시스템 변경 시 사용

⚠️ **주의사항**

- 업데이트 전 반드시 변경사항을 확인하세요
- 프로젝트에 맞게 컴포넌트를 수정했다면 `--overwrite` 사용 시 수정사항이 사라질 수 있습니다
- 중요한 변경사항이 있다면 먼저 테스트 환경에서 업데이트를 시도하세요

### NPM 패키지로 설치

> 타입문제로 yarn환경에서는 비추천.

```bash
npm install almond-ui-lib
```

## 📦 사용 가능한 컴포넌트

- **Buttons**: CategoryButton, CheckBox, IconButton, SquareButton
- **Forms**: Input, RadioGroup
- **Base**: Tabs, Rating, IconText, SectionTitle, RoundedBaseCard
- **Products**: ProductCard
- **Carts**: CartCard, CartSummaryCard
- **Orders**: OrderInfoCard, OrderProductCards, ShipmentProductCard
- **Wishs**: WishCard
- **System**: FloatingActions
- **Tags**: Tag
- **Toggle**: Toggle

자세한 사용법은 [Registry 사용 가이드](./docs/registry-usage.md)를 참고하세요.

---
