"use client";

import React from "react";
import { createContext, useContext, useState } from "react";
import { cn } from "@/lib/utils";

// Context for managing tab state
interface TabsContextType {
  activeTab: string;
  setActiveTab: (value: string) => void;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

const useTabsContext = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tab components must be used within a Tabs component");
  }
  return context;
};

// Root Tabs component
interface TabsProps {
  defaultValue: string;
  children: React.ReactNode;
  className?: string;
  onValueChange?: (value: string) => void;
}

const Tabs = ({
  defaultValue,
  children,
  className,
  onValueChange,
}: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    onValueChange?.(value);
  };

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab: handleTabChange }}>
      <div className={cn("w-full", className)}>{children}</div>
    </TabsContext.Provider>
  );
};

// TabsList component
interface TabsListProps {
  children: React.ReactNode;
  className?: string;
}

const TabsList = ({ children, className }: TabsListProps) => {
  return (
    <div
      className={cn("flex items-center border-b border-gray-200", className)}
    >
      {children}
    </div>
  );
};

// TabsTrigger component
interface TabsTriggerProps {
  value: string;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

const TabsTrigger = ({
  value,
  children,
  className,
  disabled = false,
}: TabsTriggerProps) => {
  const { activeTab, setActiveTab } = useTabsContext();
  const isActive = activeTab === value;

  return (
    <button
      onClick={() => !disabled && setActiveTab(value)}
      disabled={disabled}
      className={cn(
        "typo-order-regular-bold relative min-w-0 flex-1 px-4 py-3 font-medium",
        "hover:text-gray-900 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:outline-none",
        "disabled:cursor-not-allowed disabled:opacity-50",
        isActive
          ? "text-primary font-bold"
          : "text-gray-500 hover:text-gray-700",
        className,
      )}
    >
      {children}
      {isActive && (
        <div className="absolute right-0 bottom-0 left-0 h-0.5 bg-orange-400 transition-all duration-200" />
      )}
    </button>
  );
};

// TabsContent component
interface TabsContentProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

const TabsContent = ({ value, children, className }: TabsContentProps) => {
  const { activeTab } = useTabsContext();

  if (activeTab !== value) return null;

  return <div className={cn("mt-4", className)}>{children}</div>;
};

const TabsCompound = Object.assign(Tabs, {
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
});

export { TabsCompound as Tabs };
