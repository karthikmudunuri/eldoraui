import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import WarpAnimationContainer from "@/registry/default/eldoraui/wrapanimationcontainer";

export default function WrapAnimationDemo() {
  return (
    <div className="grid place-items-center">
      <WarpAnimationContainer>
        <Card className="w-80">
          <CardContent className="flex flex-col gap-2 p-4">
            <CardTitle>Introducing Eldora UI 2.0!</CardTitle>
            <CardDescription>
              We are excited to announce the release of Eldora UI 2.0. With
              improved components, faster performance, and a more customizable
              design system, its never been easier to create stunning,
              responsive UIs. Start building with Eldora UI 2.0 today!
            </CardDescription>
          </CardContent>
        </Card>
      </WarpAnimationContainer>
    </div>
  );
}
