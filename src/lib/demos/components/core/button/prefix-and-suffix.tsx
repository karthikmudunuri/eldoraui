import { Button } from "@/lib/components/core/default/button";
import { UploadIcon } from "@/lib/icons";

export default function Demo() {
  return (
    <div className="flex items-center gap-2">
      <Button prefix={<UploadIcon />}>Upload</Button>
      <Button suffix={<UploadIcon />}>Upload</Button>
    </div>
  );
}
