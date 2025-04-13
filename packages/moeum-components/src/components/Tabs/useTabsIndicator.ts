import { useEffect, useState, useCallback, RefObject } from "react";
import { UseTabsIndicatorProps } from "./Tabs.type";

/**
 * 탭 인디케이터의 위치를 계산하고 관리하는 커스텀 훅
 * @param {UseTabsIndicatorProps} props - 탭 인디케이터 설정
 * @returns {Object} indicatorStyle - 인디케이터의 스타일 객체
 */
const useTabsIndicator = ({ listRef }: UseTabsIndicatorProps) => {
  const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({});

  // 활성화된 탭의 위치를 기반으로 인디케이터의 위치를 계산합니다.
  const updateIndicatorPosition = useCallback((listRef: RefObject<HTMLDivElement>) => {
    const activeTab = listRef.current?.querySelector('[data-state="active"]');
    if (!activeTab) return;

    const { offsetLeft, offsetWidth } = activeTab as HTMLElement;
    setIndicatorStyle({
      transform: `translateX(${offsetLeft}px)`,
      width: `${offsetWidth}px`
    });
  }, []);

  useEffect(() => {
    if (!listRef.current) return;

    // 초기 인디케이터 위치 설정
    updateIndicatorPosition(listRef);

    /**
     * 탭의 상태 변화를 감지하는 MutationObserver
     * data-state 속성이 변경될 때마다 인디케이터 위치를 업데이트합니다.
     */
    const mutationObserver = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.type === "attributes" && mutation.attributeName === "data-state") {
          updateIndicatorPosition(listRef);
        }
      });
    });

    /**
     * 탭의 크기 변화를 감지하는 ResizeObserver
     * 윈도우 리사이즈나 탭 크기 변경 시 인디케이터 위치를 업데이트합니다.
     */
    const resizeObserver = new ResizeObserver(() => {
      updateIndicatorPosition(listRef);
    });

    // 모든 탭 트리거에 옵저버 적용
    const triggers = listRef.current.querySelectorAll<HTMLElement>('[role="tab"]');
    triggers.forEach(trigger => {
      mutationObserver.observe(trigger, { attributes: true });
      resizeObserver.observe(trigger);
    });

    return () => {
      mutationObserver.disconnect();
      resizeObserver.disconnect();
    };
  }, [listRef, updateIndicatorPosition]);

  return {
    indicatorStyle
  };
};

export { useTabsIndicator };
