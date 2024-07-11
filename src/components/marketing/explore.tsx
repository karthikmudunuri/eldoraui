import { DocsList } from "@/components/docs/docs-list";
import { cn } from "@/lib/utils/classes";

export const Explore = ({ className }: { className: string }) => {
  const categories = [
    { title: "Inputs", slug: "components/inputs", href: "/components/inputs" },
    {
      title: "Menus and selection",
      slug: "components/menus-and-selection",
      href: "/components/menus-and-selection",
    },
    {
      title: "Dates",
      slug: "components/dates",
      href: "/components/dates",
    },
    {
      title: "Colors",
      slug: "components/colors",
      href: "/components/colors",
    },
  ];
  return (
    <div className={className}>
      <h2 className="text-3xl font-semibold">Explore</h2>
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
