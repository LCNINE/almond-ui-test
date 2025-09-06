import { Tabs } from "@/components/ui/tabs";

export default function TabsDemo() {
  return (
    <Tabs defaultValue="tab1" className="w-full">
      <Tabs.List>
        <Tabs.Trigger value="tab1">탭 1</Tabs.Trigger>
        <Tabs.Trigger value="tab2">탭 2</Tabs.Trigger>
        <Tabs.Trigger value="tab3">탭 3</Tabs.Trigger>
        <Tabs.Trigger value="tab4" disabled>
          비활성화된 탭
        </Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content value="tab1">
        <div className="p-4">
          <h3 className="mb-2 text-lg font-semibold">첫 번째 탭 내용</h3>
          <p className="text-gray-600">이것은 첫 번째 탭의 내용입니다.</p>
        </div>
      </Tabs.Content>

      <Tabs.Content value="tab2">
        <div className="p-4">
          <h3 className="mb-2 text-lg font-semibold">두 번째 탭 내용</h3>
          <p className="text-gray-600">이것은 두 번째 탭의 내용입니다.</p>
        </div>
      </Tabs.Content>

      <Tabs.Content value="tab3">
        <div className="p-4">
          <h3 className="mb-2 text-lg font-semibold">세 번째 탭 내용</h3>
          <p className="text-gray-600">이것은 세 번째 탭의 내용입니다.</p>
        </div>
      </Tabs.Content>
    </Tabs>
  );
}
