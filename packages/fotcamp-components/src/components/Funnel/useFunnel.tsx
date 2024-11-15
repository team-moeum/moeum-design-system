import { useCallback, useMemo } from "react";
import { Funnel, Step } from "./Funnel";
import { useQueryParam } from "./useQueryParam";
import { FunnelProps, NonEmptyArray } from "./Funnel.type";
import { useRouter } from "../../hooks/useRouter";

type RouteFunnelProps<Steps extends NonEmptyArray<string>> = Omit<
  FunnelProps<Steps>,
  "steps" | "step"
>;

const DEFAULT_STEP_QUERY_KEY = "funnel-step";

export const useFunnel = <Steps extends NonEmptyArray<string>>(
  steps: Steps,
  options?: {
    stepQueryKey?: string;
    initialStep?: Steps[number];
  }
) => {
  const router = useRouter();
  const stepQueryKey = options?.stepQueryKey ?? DEFAULT_STEP_QUERY_KEY;

  if (steps.length === 0) {
    throw new Error("steps가 비어있습니다.");
  }

  const FunnelComponent = useMemo(
    () =>
      Object.assign(
        function RouteFunnel(props: RouteFunnelProps<Steps>) {
          const step = useQueryParam<Steps[number]>(stepQueryKey) ?? options?.initialStep;

          if (!step) {
            throw new Error(
              `표시할 스텝을 ${stepQueryKey} 쿼리 파라미터에 지정해주세요. 쿼리 파라미터가 없을 때 초기 Step을 렌더하려면 useFunnel의 두 번째 파라미터 options에 initialStep을 지정해주세요.`
            );
          }

          return <Funnel<Steps> steps={steps} step={step} {...props} />;
        },
        {
          Step
        }
      ),
    []
  );

  const setStep = useCallback(
    (step: Steps[number]) => {
      router.setQuery({ [stepQueryKey]: step });
    },
    [stepQueryKey, router]
  );

  return [FunnelComponent, setStep] as const;
};
