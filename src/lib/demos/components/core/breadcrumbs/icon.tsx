import { Breadcrumbs, Breadcrumb } from "@/lib/components/core/default/breadcrumbs";
import { HomeIcon } from "@/lib/icons";

export default function Demo() {
  return (
    <Breadcrumbs>
      <Breadcrumb href="#">
        <HomeIcon />
        Home
      </Breadcrumb>
      <Breadcrumb href="#">Components</Breadcrumb>
      <Breadcrumb href="#">Breadcrumbs</Breadcrumb>
    </Breadcrumbs>
  );
}
