import { DocsSidebar } from "@/components/docs/docs-sidebar";
import { SearchDocs } from "@/components/docs/search-docs";
import { ScrollArea } from "@/lib/components/core/default/scroll-area";
import { docsConfig } from "@/config/docs-config";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="min-h-[90vh] border-b">
      <div className="container items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6">
        <aside className="z-30 hidden space-y-2 pt-6 md:sticky md:top-0 md:block">
          <SearchDocs />
          <ScrollArea className="h-screen pb-8">
            <DocsSidebar items={docsConfig.nav} />
          </ScrollArea>
        </aside>
        {children}
      </div>
    </div>
  );
}
