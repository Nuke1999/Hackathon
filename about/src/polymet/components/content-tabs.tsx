import { ReactNode } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Tab {
  value: string;
  label: string;
  content: ReactNode;
}

interface ContentTabsProps {
  tabs: Tab[];
  defaultValue?: string;
}

export default function ContentTabs({ tabs, defaultValue }: ContentTabsProps) {
  // Use the first tab as default if not specified
  const activeDefault = defaultValue || tabs[0]?.value;

  return (
    <Tabs defaultValue={activeDefault} className="w-full">
      <TabsList className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 h-auto">
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value} className="py-2">
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value} className="pt-6">
          <div className="prose dark:prose-invert max-w-none">
            {tab.content}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
