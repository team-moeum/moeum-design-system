# @moeum/figma-componentgen-plugin

Figma의 특정 화면을 공통 컴포넌트, 아이콘이 적용된 React 컴포넌트 코드로 자동 변환

## 변환

`FigmaNode -> Layer(도메인) -> LayerNode(중간) -> Component(도메인) -> ComponentNode(중간) -> String`

- FigmaNode -> Layer: 도메인 객체로 변환

  - Layer -> LayerNode: 중간 표현으로 변환

- LayerNode -> Component: 다른 도메인 객체로 변환

  - Component -> ComponentNode: 중간 표현으로 변환

- Component -> String: 최종 출력 형식으로 변환
