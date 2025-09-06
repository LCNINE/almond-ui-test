#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 컴포넌트 메타데이터 정의
const components = [
  {
    name: "category-button",
    dependencies: [],
    registryDependencies: [],
  },
  {
    name: "checkbox",
    dependencies: [],
    registryDependencies: [],
  },
  {
    name: "icon-button",
    dependencies: ["lucide-react"],
    registryDependencies: [],
  },
  {
    name: "square-button",
    dependencies: [],
    registryDependencies: [],
  },
  {
    name: "input",
    dependencies: ["clsx", "tailwind-merge"],
    registryDependencies: [],
  },
  {
    name: "radio-group",
    dependencies: ["@radix-ui/react-radio-group", "clsx", "tailwind-merge"],
    registryDependencies: [],
  },
  {
    name: "tabs",
    dependencies: ["clsx", "tailwind-merge"],
    registryDependencies: [],
  },
  {
    name: "rating",
    dependencies: ["lucide-react", "clsx", "tailwind-merge"],
    registryDependencies: [],
  },
  {
    name: "icon-text",
    dependencies: ["lucide-react", "clsx", "tailwind-merge"],
    registryDependencies: [],
  },
  {
    name: "section-title",
    dependencies: [],
    registryDependencies: [],
  },
  {
    name: "rounded-base-card",
    dependencies: ["clsx", "tailwind-merge"],
    registryDependencies: [],
  },
  {
    name: "image-wrapper",
    dependencies: ["clsx", "tailwind-merge"],
    registryDependencies: [],
  },
  {
    name: "linked-wrapper",
    dependencies: [],
    registryDependencies: [],
  },
];

// 각 컴포넌트에 대한 메타데이터 JSON 파일 생성
components.forEach((component) => {
  const metadata = {
    name: component.name,
    type: "registry:ui",
    dependencies: component.dependencies,
    registryDependencies: component.registryDependencies,
    files: [
      {
        path: `components/ui/${component.name}.tsx`,
        type: "registry:ui",
        target: `components/ui/${component.name}.tsx`,
      },
    ],
    tailwind: {
      config: {},
    },
  };

  // JSON 파일 저장
  const outputPath = path.join(
    __dirname,
    "..",
    "registry",
    "ui",
    `${component.name}.json`,
  );
  fs.writeFileSync(outputPath, JSON.stringify(metadata, null, 2));
  console.log(`✅ Generated: ${component.name}.json`);
});

// registry/styles 폴더 생성 및 기본 스타일 생성
const stylesDir = path.join(__dirname, "..", "registry", "styles");
if (!fs.existsSync(stylesDir)) {
  fs.mkdirSync(stylesDir, { recursive: true });
}

// 기본 스타일 메타데이터
const defaultStyle = {
  name: "default",
  label: "Default",
  cssVars: {
    light: {
      background: "0 0% 100%",
      foreground: "240 10% 3.9%",
      primary: "24 100% 50%",
      "primary-foreground": "0 0% 100%",
      secondary: "240 4.8% 95.9%",
      "secondary-foreground": "240 5.9% 10%",
      muted: "240 4.8% 95.9%",
      "muted-foreground": "240 3.8% 46.1%",
      accent: "240 4.8% 95.9%",
      "accent-foreground": "240 5.9% 10%",
      destructive: "0 84.2% 60.2%",
      "destructive-foreground": "0 0% 98%",
      border: "240 5.9% 90%",
      input: "240 5.9% 90%",
      ring: "24 100% 50%",
    },
    dark: {
      background: "240 10% 3.9%",
      foreground: "0 0% 98%",
      primary: "24 100% 50%",
      "primary-foreground": "240 5.9% 10%",
      secondary: "240 3.7% 15.9%",
      "secondary-foreground": "0 0% 98%",
      muted: "240 3.7% 15.9%",
      "muted-foreground": "240 5% 64.9%",
      accent: "240 3.7% 15.9%",
      "accent-foreground": "0 0% 98%",
      destructive: "0 62.8% 30.6%",
      "destructive-foreground": "0 0% 98%",
      border: "240 3.7% 15.9%",
      input: "240 3.7% 15.9%",
      ring: "24 100% 50%",
    },
  },
};

fs.writeFileSync(
  path.join(stylesDir, "default.json"),
  JSON.stringify(defaultStyle, null, 2),
);

console.log("\n✅ Registry generation complete!");
console.log("📁 Files generated in /registry/ui/ and /registry/styles/");
