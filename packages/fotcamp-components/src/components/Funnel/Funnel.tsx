import { Children, isValidElement, ReactElement, useEffect } from "react";
import { FunnelProps, NonEmptyArray, StepProps } from "./Funnel.type";

export const Funnel = <Steps extends NonEmptyArray<string>>({
  steps,
  step,
  children
}: FunnelProps<Steps>) => {
  const validChildren = Children.toArray(children)
    .filter(isValidElement)
    .filter(i => steps.includes((i.props as Partial<StepProps<Steps>>).name ?? "")) as Array<
    ReactElement<StepProps<Steps>>
  >;

  const targetStep = validChildren.find(child => child.props.name === step);

  if (!targetStep) {
    throw new Error(`${step} Step Component를 찾지 못했습니다.`);
  }

  return <>{targetStep}</>;
};

export const Step = <Steps extends NonEmptyArray<string>>({
  onMounted,
  onUnMounted,
  children
}: StepProps<Steps>) => {
  useEffect(() => {
    onMounted?.();
    return () => {
      onUnMounted?.();
    };
  }, [onMounted, onUnMounted]);

  return <>{children}</>;
};
