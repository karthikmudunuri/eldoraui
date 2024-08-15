import { DocsList } from "@/components/docs/docs-list";
import { cn } from "@/lib/utils/classes";

export const Explore = ({ className }: { className: string }) => {
  const categories = [
   
    {
      title: "Special Animations",
      slug: "components/special-animations",
      href: "/components/special-animations",
    },
    {
      title: "Sections",
      slug: "components/sections",
      href: "/components/sections",
    },
    {
      title: "Text animations",
      slug: "components/text",
      href: "/components/text",
    },
    {
      title: "Background animations",
      slug: "components/backgrounds",
      href: "/components/backgrounds",
    },
    {
      title: "Templates",
      slug: "templates",
      href: "/templates",
    },
   
  ];
  return (
    <div className={className}>
      
     
      <div className="mt-6 -space-y-2">
        {categories.map((category, index) => (
          <div key={index}>
            <h3 className="category-xl pl-6 font-mono text-xl tracking-widest text-fg-muted">
              {category.title}
            </h3>
            <div
              className={cn("border-muted border-l px-6 pb-8 pt-4", {
                "pb-0": index === categories.length - 1,
              })}
            >
              <DocsList
                name={category.slug}
                href={category.href}
                limit={4}
                className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
