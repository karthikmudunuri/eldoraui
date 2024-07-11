import { Button } from "@/lib/components/core/default/button";
import { UploadIcon } from "@/lib/icons";

export default function Demo() {
  return (
    <div className="flex items-center justify-center gap-4">
      <Button size="sm" shape="square" aria-label="upload">
        <UploadIcon />
      </Button>
      <Button size="md" shape="square" aria-label="upload">
        <UploadIcon />
      </Button>
      <Button size="lg" shape="square" aria-label="upload">
        <UploadIcon />
      </Button>
      <Button size="sm" shape="circle" aria-label="upload">
        <UploadIcon />
      </Button>
      <Button size="md" shape="circle" aria-label="upload">
        <UploadIcon />
      </Button>
      <Button size="lg" shape="circle" aria-label="upload">
        <UploadIcon />
      </Button>
    </div>
  );
}
