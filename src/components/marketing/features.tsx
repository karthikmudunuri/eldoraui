import React from "react";
import Balancer from "react-wrap-balancer";

interface CallToActionProps {
  className?: string;
}

export const Features = async (props: CallToActionProps) => {
  const { className } = props;

  return (
    <div className={className}>
      <section className="flex items-start gap-20">
        <div className="h-[300px] w-2/3 rounded-lg bg-bg-muted"></div>
        <div>
          <h2 className="text-3xl font-bold tracking-tighter lg:text-5xl">
            <Balancer>
              Make apps that looks great on{" "}
              <span className="bg-gradient bg-clip-text text-transparent">mobile</span>.
            </Balancer>
          </h2>
          <p className="mt-4 text-lg text-fg-muted">
            Our source code is available on GitHub - feel free to read, review, or contribute to it
            however you want!
          </p>
        </div>
      </section>
      {/* <section className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="mx-auto mt-8 max-w-2xl text-3xl font-bold tracking-tighter lg:text-5xl">
          <span className="bg-gradient bg-clip-text text-transparent">Accessibility</span> that's
          truly first-class.
        </h2>
        <p className="mt-4 text-lg text-fg-muted">
          Our source code is available on GitHub - feel free to read, review, or contribute to it
          however you want!
        </p>
      </section> */}
    </div>
  );
};
