import {
  Breadcrumbs,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@/lib/components/core/default/breadcrumbs";
import { ChevronRightSquareIcon } from "@/lib/icons";

export default function Demo() {
  return (
    <Breadcrumbs>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Home</BreadcrumbLink>
        <ChevronRightSquareIcon />
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Components</BreadcrumbLink>
        <ChevronRightSquareIcon />
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink>Breadcrumbs</BreadcrumbLink>
        <ChevronRightSquareIcon />
      </BreadcrumbItem>
    </Breadcrumbs>
  );
}
