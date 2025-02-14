# @moeum/figma-token

Figma Variables을 [`style-dictionary`](https://amzn.github.io/style-dictionary/#/quick_start?id=node)를 활용한 디자인 토큰 코드로 변환

## Token 규칙

[style-dictionary](https://amzn.github.io/style-dictionary/#/quick_start?id=node)을 이용하여 Token을 생성하고 기본적으로 `--seed-{컴포넌트}-{properties}_{value}_{theme}`의 모양을 취합니다.

## 사용 예시

```css
:root {
  --button-small-padding-x: 16px;
  --button-small-padding-y: 8px;
  --button-small-font-size: 14px;
  --button-small-height: 32px;
}
```
