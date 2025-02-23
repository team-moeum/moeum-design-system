# moeum-design-system

디자인 토큰부터 컴포넌트 생성까지, Figma에서 코드까지 자동화된 완전한 디자인 시스템 파이프라인

<br />

<a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fteam-moeum%2Fmoeum-design-system&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false"/></a>

<br />

## Packages

### Design Token 생성 패키지

- Figma Variables을 [`style-dictionary`](https://amzn.github.io/style-dictionary/#/quick_start?id=node)를 활용한 디자인 토큰 코드로 변환
- 색상, 타이포그래피, 스페이싱 등 디자인 토큰 관리
- [디자인 토큰 가이드](./packages/figma-token/README.md)

### Icon 컴포넌트 생성 패키지

- Figma의 아이콘을 [`SVGR`](https://react-svgr.com/)을 활용하여 컴포넌트로 자동 변환
- [아이콘 사용 가이드](./packages/moeum-icons/README.md)

### 공통 컴포넌트 패키지

- Design Token과 Icon을 활용한 재사용 가능한 컴포넌트 제공
- [공통 컴포넌트 가이드](https://team-moeum.github.io/moeum-design-system/)

### Figma Code 변환 패키지

- Figma의 특정 화면을 공통 컴포넌트, 아이콘이 적용된 React 컴포넌트 코드로 자동 변환
- [Figma Code 변환 가이드](./packages/figma-componentgen-plugin/README.md)

<br />

## 시작하기

### 요구사항

- Node.js v20
- Figma 계정 및 Github Token

### 사용 예시

```ts
// Icon 사용
import { ArrowIcon } from "@moeum/icons";

// 컴포넌트 사용
import { Button, Input } from "@moeum/components";
```

<br />

## Bug Report

If you find a bug, please report it to me using the [issues](https://github.com/team-moeum/moeum-design-system/issues) page on Github.

<br />

## Contribute

You're free to contribute to this project by submitting [issues](https://github.com/team-moeum/moeum-design-system/issues) and/or [PRs](https://github.com/team-moeum/moeum-design-system/pulls).
