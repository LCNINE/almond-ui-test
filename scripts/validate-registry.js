#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const registryPath = path.join(__dirname, "..", "registry");
let errors = [];
let warnings = [];

console.log("🔍 Validating Almond UI Registry...\n");

// 1. 메인 registry.json 검증
const mainRegistryPath = path.join(__dirname, "..", "registry.json");
if (fs.existsSync(mainRegistryPath)) {
  try {
    const registry = JSON.parse(fs.readFileSync(mainRegistryPath, "utf8"));
    console.log("✅ Main registry.json found and valid");

    // Registry URL 확인
    if (registry.registries && registry.registries["almond-ui"]) {
      console.log(`📍 Registry URL: ${registry.registries["almond-ui"].url}`);
    }
  } catch (error) {
    errors.push(`❌ Main registry.json is invalid: ${error.message}`);
  }
} else {
  errors.push("❌ Main registry.json not found");
}

// 2. registry/index.json 검증
const indexPath = path.join(registryPath, "index.json");
if (fs.existsSync(indexPath)) {
  try {
    const index = JSON.parse(fs.readFileSync(indexPath, "utf8"));
    console.log(`✅ Registry index.json found with ${index.length} components`);

    // 각 컴포넌트 검증
    index.forEach((component) => {
      const componentJsonPath = path.join(
        registryPath,
        "ui",
        `${component.name}.json`,
      );
      const componentTsxPath = path.join(
        registryPath,
        "ui",
        `${component.name}.tsx`,
      );

      // JSON 메타데이터 확인
      if (fs.existsSync(componentJsonPath)) {
        try {
          const metadata = JSON.parse(
            fs.readFileSync(componentJsonPath, "utf8"),
          );
          console.log(`  ✅ ${component.name}: metadata valid`);
        } catch (error) {
          errors.push(
            `  ❌ ${component.name}: metadata invalid - ${error.message}`,
          );
        }
      } else {
        warnings.push(`  ⚠️  ${component.name}: metadata file not found`);
      }

      // 컴포넌트 파일 확인
      if (!fs.existsSync(componentTsxPath)) {
        warnings.push(`  ⚠️  ${component.name}: component file not found`);
      }
    });
  } catch (error) {
    errors.push(`❌ Registry index.json is invalid: ${error.message}`);
  }
} else {
  errors.push("❌ Registry index.json not found");
}

// 3. 폴더 구조 검증
const requiredDirs = ["ui", "examples", "styles"];
requiredDirs.forEach((dir) => {
  const dirPath = path.join(registryPath, dir);
  if (fs.existsSync(dirPath)) {
    const files = fs.readdirSync(dirPath);
    console.log(`✅ /${dir} directory found with ${files.length} files`);
  } else {
    warnings.push(`⚠️  /${dir} directory not found`);
  }
});

// 4. 예제 파일 검증
const examplesDir = path.join(registryPath, "examples");
if (fs.existsSync(examplesDir)) {
  const examples = fs
    .readdirSync(examplesDir)
    .filter((f) => f.endsWith(".tsx"));
  console.log(`✅ Found ${examples.length} example files`);
  examples.forEach((example) => {
    console.log(`  - ${example}`);
  });
}

// 5. 스타일 파일 검증
const stylesDir = path.join(registryPath, "styles");
if (fs.existsSync(stylesDir)) {
  const styles = fs.readdirSync(stylesDir).filter((f) => f.endsWith(".json"));
  console.log(`✅ Found ${styles.length} style configurations`);
  styles.forEach((style) => {
    console.log(`  - ${style}`);
  });
}

// 결과 출력
console.log("\n" + "=".repeat(50));
console.log("📊 Validation Summary\n");

if (errors.length === 0 && warnings.length === 0) {
  console.log("🎉 All validations passed! Your registry is ready to use.");
} else {
  if (errors.length > 0) {
    console.log("❌ Errors found:");
    errors.forEach((error) => console.log(error));
  }

  if (warnings.length > 0) {
    console.log("\n⚠️  Warnings:");
    warnings.forEach((warning) => console.log(warning));
  }

  console.log("\n💡 Fix the issues above before publishing your registry.");
}

console.log("\n📌 Next steps:");
console.log("1. Commit and push your changes to GitHub");
console.log("2. The registry will be available at:");
console.log(
  "   https://raw.githubusercontent.com/LCNINE/almond-ui/main/registry",
);
console.log("3. Users can then install components using:");
console.log("   npx shadcn@latest add almond-ui:[component-name]");

process.exit(errors.length > 0 ? 1 : 0);
