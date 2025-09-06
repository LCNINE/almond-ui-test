"use client";

import { useState } from "react";
import { IconText } from "@/components/Base/IconText";
import {
  Home,
  Grid3X3,
  Search,
  Clock,
  User,
  ShoppingBag,
  Heart,
  RotateCcw,
  Settings,
} from "lucide-react";

export default {
  title: "Base/IconText",
  component: IconText,
  tags: ["autodocs"],
};

export const Playground = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [activeTopTab, setActiveTopTab] = useState("orders");

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-md space-y-8">
        {/* 상단 네비게이션 */}
        <div className="rounded-lg bg-white p-4 shadow-sm">
          <h3 className="mb-4 text-center text-lg font-semibold">
            상단 네비게이션
          </h3>
          <div className="grid grid-cols-4 gap-2">
            <IconText
              variant={activeTopTab === "orders" ? "active" : "default"}
              onClick={() => setActiveTopTab("orders")}
            >
              <IconText.Icon>
                <ShoppingBag />
              </IconText.Icon>
              <IconText.Text>주문목록</IconText.Text>
            </IconText>
            <IconText
              variant={activeTopTab === "wishlist" ? "active" : "default"}
              onClick={() => setActiveTopTab("wishlist")}
            >
              <IconText.Icon>
                <Heart />
              </IconText.Icon>
              <IconText.Text>찜한상품</IconText.Text>
            </IconText>
            <IconText
              variant={activeTopTab === "frequent" ? "active" : "default"}
              onClick={() => setActiveTopTab("frequent")}
            >
              <IconText.Icon>
                <RotateCcw />
              </IconText.Icon>
              <IconText.Text>자주산상품</IconText.Text>
            </IconText>
            <IconText
              variant={activeTopTab === "custom" ? "active" : "default"}
              onClick={() => setActiveTopTab("custom")}
            >
              <IconText.Icon>
                <Settings />
              </IconText.Icon>
              <IconText.Text>맞춤정보</IconText.Text>
            </IconText>
          </div>
        </div>

        {/* 하단 네비게이션 */}
        <div className="rounded-lg bg-white shadow-sm">
          <h3 className="border-b p-4 text-center text-lg font-semibold">
            하단 네비게이션
          </h3>
          <div className="grid grid-cols-5 border-t">
            <IconText
              variant={activeTab === "home" ? "active" : "default"}
              onClick={() => setActiveTab("home")}
            >
              <IconText.Icon>
                <Home />
              </IconText.Icon>
              <IconText.Text>홈</IconText.Text>
            </IconText>
            <IconText
              variant={activeTab === "category" ? "active" : "default"}
              onClick={() => setActiveTab("category")}
            >
              <IconText.Icon>
                <Grid3X3 />
              </IconText.Icon>
              <IconText.Text>카테고리</IconText.Text>
            </IconText>
            <IconText
              variant={activeTab === "search" ? "active" : "default"}
              onClick={() => setActiveTab("search")}
            >
              <IconText.Icon>
                <Search />
              </IconText.Icon>
              <IconText.Text>검색</IconText.Text>
            </IconText>
            <IconText
              variant={activeTab === "recent" ? "active" : "default"}
              onClick={() => setActiveTab("recent")}
            >
              <IconText.Icon>
                <Clock />
              </IconText.Icon>
              <IconText.Text>최근본</IconText.Text>
            </IconText>
            <IconText
              variant={activeTab === "my" ? "active" : "default"}
              onClick={() => setActiveTab("my")}
            >
              <IconText.Icon>
                <User />
              </IconText.Icon>
              <IconText.Text>마이</IconText.Text>
            </IconText>
          </div>
        </div>

        {/* 다양한 크기 예시 */}
        <div className="rounded-lg bg-white p-4 shadow-sm">
          <h3 className="mb-4 text-center text-lg font-semibold">
            다양한 크기
          </h3>
          <div className="space-y-4">
            <div>
              <p className="mb-2 text-sm text-gray-600">Small Size</p>
              <div className="flex gap-4">
                <IconText size="sm" variant="active">
                  <IconText.Icon>
                    <Home />
                  </IconText.Icon>
                  <IconText.Text>홈</IconText.Text>
                </IconText>
                <IconText size="sm">
                  <IconText.Icon>
                    <Search />
                  </IconText.Icon>
                  <IconText.Text>검색</IconText.Text>
                </IconText>
              </div>
            </div>
            <div>
              <p className="mb-2 text-sm text-gray-600">
                Medium Size (Default)
              </p>
              <div className="flex gap-4">
                <IconText variant="active">
                  <IconText.Icon>
                    <Home />
                  </IconText.Icon>
                  <IconText.Text>홈</IconText.Text>
                </IconText>
                <IconText>
                  <IconText.Icon>
                    <Search />
                  </IconText.Icon>
                  <IconText.Text>검색</IconText.Text>
                </IconText>
              </div>
            </div>
            <div>
              <p className="mb-2 text-sm text-gray-600">Large Size</p>
              <div className="flex gap-4">
                <IconText size="lg" variant="active">
                  <IconText.Icon>
                    <Home />
                  </IconText.Icon>
                  <IconText.Text>홈</IconText.Text>
                </IconText>
                <IconText size="lg">
                  <IconText.Icon>
                    <Search />
                  </IconText.Icon>
                  <IconText.Text>검색</IconText.Text>
                </IconText>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
