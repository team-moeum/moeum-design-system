# @moeum/icons

Figma의 아이콘을 [`SVGR`](https://react-svgr.com/)을 활용하여 컴포넌트로 자동 변환

## 설치

```bash
$ npm install @moeum/icons
$ yarn add @moeum/icons
$ pnpm add @moeum/icons
```

## Figma Plugin 가이드

**Step 1. `디자이너` Plugin 실행합니다.**

Figma에서 [Icona(Awesome Icon Extractor)](https://www.figma.com/community/plugin/1246320822364150095/icona-awesome-icon-extractor) 플러그인을 실행합니다.

<br />

![Image](https://github.com/user-attachments/assets/ba4737d2-884f-4a58-9b4a-8bab9d003797)

<br />

**Step 2. `디자이너` Github Repo URL과 API Key(필요 권한: repo, workflow)를 입력합니다.**

![Image](https://github.com/user-attachments/assets/ec899ac3-5355-4d5c-ab32-9e6e2b33ce1c)

<br />

**Step 3. `디자이너` Frame의 이름 앞에 "icona-frame" prefix를 추가합니다.**
예: "icona-frame-social", "icona-frame-common" 등

![Image](https://github.com/user-attachments/assets/7bb070e5-672d-4416-b154-0d7766cfe08c)

<br />

**Step 4. `디자이너` Deploy 버튼을 클릭합니다.**

<br />

![Image](https://github.com/user-attachments/assets/3d858df3-9829-4add-a6f0-bd712468ec68)

<br />

`0 icons found in icona-frame frame` 라고 되어있는 경우 아래 순서대로 해주세요.

1. `Step3`을 다시 확인
2. Plugin을 재시작

<br />

**Step 5. `개발자` PR 확인**

새로운 Pull Request가 생성되었는지 확인합니다.

<br />

**Step 6. `개발자` 검토 및 Merge**

icons.json 파일의 변경사항을 확인합니다.
문제가 없다면 PR을 Merge 합니다.
