import type { Meta, StoryObj } from "@storybook/react";
import { useFunnel } from "./useFunnel";
import { RouterProvider } from "../../hooks/useRouter";
import { WindowRouter } from "../../router/windowRouter";

enum FUNNEL {
  onBoarding = "온보딩",
  agreement = "약관동의",
  information = "정보입력",
  registration = "가입"
}

function FunnelComponent({ initialStep = FUNNEL.onBoarding }) {
  const { onBoarding, agreement, information, registration } = FUNNEL;
  const funnelSteps = [onBoarding, agreement, information, registration] as const;

  const [Funnel] = useFunnel(funnelSteps, {
    initialStep,
    stepQueryKey: "step"
  });

  return (
    <Funnel>
      <Funnel.Step name={onBoarding}>
        <div>온보딩 스텝입니다</div>
      </Funnel.Step>
      <Funnel.Step name={agreement}>
        <div>약관동의 스텝입니다</div>
      </Funnel.Step>
      <Funnel.Step name={information}>
        <div>정보입력 스텝입니다</div>
      </Funnel.Step>
      <Funnel.Step name={registration}>
        <div>가입완료 스텝입니다</div>
      </Funnel.Step>
    </Funnel>
  );
}

function FunnelWithRouter({ initialStep }: { initialStep?: FUNNEL }) {
  const router = new WindowRouter();

  return (
    <RouterProvider value={router}>
      <FunnelComponent initialStep={initialStep} />
    </RouterProvider>
  );
}
const meta = {
  title: "Components/Funnel",
  component: FunnelWithRouter,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    initialStep: {
      control: "select",
      options: Object.values(FUNNEL),
      description: "퍼널의 초기 단계를 설정합니다"
    }
  }
} satisfies Meta<typeof FunnelWithRouter>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 온보딩 스텝
export const Primary: Story = {
  args: {
    initialStep: FUNNEL.onBoarding
  }
};

// 약관동의 스텝
export const AgreementStep: Story = {
  args: {
    initialStep: FUNNEL.agreement
  }
};

// 정보입력 스텝
export const InformationStep: Story = {
  args: {
    initialStep: FUNNEL.information
  }
};

// 가입완료 스텝
export const RegistrationStep: Story = {
  args: {
    initialStep: FUNNEL.registration
  }
};
