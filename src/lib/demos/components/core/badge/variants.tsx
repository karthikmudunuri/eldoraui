import { Badge } from "@/lib/components/core/default/badge";

export default function Demo() {
  return (
    <div className="flex flex-col items-start gap-2">
      <Flex>
        <Badge variant="neutral">Neutral</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="primary">Primary</Badge>
      </Flex>
      <Flex>
        <Badge variant="success">Success</Badge>
        <Badge variant="success-subtle">Success Subtle</Badge>
        <Badge variant="success-outline">Success Outline</Badge>
      </Flex>
      <Flex>
        <Badge variant="danger">Danger</Badge>
        <Badge variant="danger-subtle">Danger Subtle</Badge>
        <Badge variant="danger-outline">Danger Outline</Badge>
      </Flex>
      <Flex>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="warning-subtle">Warning Subtle</Badge>
        <Badge variant="warning-outline">Warning Outline</Badge>
      </Flex>
      <Flex>
        <Badge variant="accent">Accent</Badge>
        <Badge variant="accent-subtle">Accent Subtle</Badge>
        <Badge variant="accent-outline">Accent Outline</Badge>
      </Flex>
    </div>
  );
}

const Flex = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <div {...props} className="flex items-center gap-2" />
);
