###### Other Language
[English](https://github.com/dkssud-dus/webRedesign-National_Museum_Foundation_of_Korea/blob/main/README_en.md) | [한국어](https://github.com/dkssud-dus/webRedesign-National_Museum_Foundation_of_Korea/blob/main/README.md) | [日本語](https://github.com/dkssud-dus/webRedesign-National_Museum_Foundation_of_Korea/blob/main/README_ja.md)

<br/><br/><br/>

# 국립박물관문화재단
![MainVisual](https://github.com/user-attachments/assets/0f863024-ea62-40c6-b099-cdb24e5a8a4e)

<br/><br/>

**기관 정체성 강화와 사용자 여정 개선을 목표로 한 국립박물관문화재단 개인 프로젝트**
> 해당 프로젝트는 기관의 핵심 메시지를 명확히 전달하고 사용자가 필요한 정보를 빠르게 찾을 수 있도록 재설계한 개인 리디자인 작업입니다. 메인 페이지에서 기관 정체성과 주요 안내를 우선 노출하고, 6개의 서브페이지로 세부 콘텐츠를 계층화했으며 검색·필터·달력 기반의 탐색 기능을 통해 정보 접근성을 개선했습니다. 컴포넌트화된 UI(모달·스와이퍼·탭 등)로 유지보수성을 높였고, React 기반으로 구현해 Netlify로 배포하였습니다.

<br/><br/><br/>

## Link
- 바로가기 (Web-site): https://dainty-zabaione-f6aaff.netlify.app/
- 기획서 (Figma Slide): https://www.figma.com/deck/bS0jrjF6AMhiay3JRl1A24/-webRedesign--National-Museum-Foundation-of-Korea--Project-Brief-?node-id=1-111&t=HBlHutlHUPdRHe44-1
- 디자인 시안 (Figma): https://www.figma.com/design/Y5N7O28Im9YE5pOPUX2djZ/-webRedesign--National-Museum-Foundation-of-Korea--Design-Brief-?node-id=4-3&t=tnwQCvldoxyCI5VA-1

<br/>

## Table of Contents
- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Environment & Contribution](#environment--contribution)
- [Contact](#contact)

<br/>

## Overview
### Background
국립박물관문화재단은 대한민국의 기관으로, 국립중앙박물관 및 전국 소속박물관의 전시와 국립중앙박물관 내 전문공연장 극장 '용'의 공연을 기획하고 발굴하는 사업을 펼치고 있다. 또한, 박물관이 소장한 문화유산을 모티브로 만든 상품 브랜드인 뮷즈 (MU:DS)를 운영하고 있으며 박물관의 전시 도록과 연구·조사 보고서를 발간하고 있다. 그러나 기존 웹사이트는 상기한 사업 내용을 효과적으로 전달하지 못했고, 브랜드 가치나 사용자의 몰입을 고려한 설계 또한 부족했다.

<br/>

**정보 구조 혼란**     
- '기관 소개' 메인 페이지가 별도로 존재하여 정보 흐름의 단절   
- 내비게이션 메뉴 구조가 사용자 여정에 맞춰 구성되어 있지 않음      

**브랜드 메시지 미약**   
- 재단의 정체성 및 사업, 가치를 설명하는 콘텐츠 부족   
- 사용자가 "여기가 어떤 기관인지" 직관적으로 알기 어려움
  
**UI/UX 비일관성**    
- 전반적으로 슬라이드 사용이 과도하며 콘텐츠간 여백이 부족함     
- 인터랙션 (호버, 클릭 등)의 피드백 부족으로 사용성 저하      

<br/>

### Purpose
**메인 페이지 구조 개선**      
- 기존에 분리되어 있던 '기관 소개'와 메인 콘텐츠를 하나의 구조로 통합하여, 사용자가 자연스럽게 정보 흐름을 따라갈 수 있도록 구성한다.

**브랜드 정체성 강화**    
- 국립박물관문화재단의 역할과 가치를 명확히 드러내고, MU:DS 브랜드 등 주요 사업의 메시지를 시각적으로 효과 있게 전달한다.

**사용자 경험 향상 (UX)**          
- 비효율적인 레이아웃을 개선하고, 여백, 타이포그래피 등 가독성과 탐색 편의성을 높인다.

**내비게이션 구조 재정비**       
- 사용자 여정에 맞춘 메뉴 구조로 정보 접근성을 높이고, 반복되는 콘텐츠는 구조적으로 재정리한다.

<br/>

### Keywords
`정제된`
- 지나치게 화려하거나 과한 인터랙션이 아닌, 절제되고 품위 있는 레이아웃   
  
`몰입감 있는`
- 문화·예술 콘텐츠를 깊이 있게 보여주며, 사용자의 탐색 경험을 끊김 없이 이어감

`정보 중심`
- UI가 콘텐츠 전달을 방해하지 않고 정보 중심의 시선 흐름을 유도

<br/>

### Schedule
- 2025.07.10. - 2025.07.20.
- Total 35 Hours
  
<br/>

### Before & After
| Before | After |
|--------|-------|
| <img width="1920" height="1980" alt="image" src="https://github.com/user-attachments/assets/86dca8b2-c63a-459d-a01d-b8ab7ce7d082" /> | <img width="1920" height="5735" alt="image" src="https://github.com/user-attachments/assets/530d29ba-1ab7-4d54-a3ad-0061375a3cdc" /> |

</br>

<details>
<summary>Sub Pages (6)</summary>

#### 오시는길
| Before | After |
|--------|-------|
| <img width="1920" height="2175" alt="image" src="https://github.com/user-attachments/assets/ee56e9bf-2e77-4003-ac29-0a22aaa0a6b7" /> | <img width="1920" height="2216" alt="image" src="https://github.com/user-attachments/assets/869601c0-db3d-4af9-b881-ee6831552d2a" />  |

</br>

#### 공연·전시
| Before | After |
|--------|-------|
| <img width="1920" height="1798" alt="image" src="https://github.com/user-attachments/assets/59b636f7-2b39-49f6-a2de-0af8ef6faaba" /> <img width="1920" height="1218" alt="image" src="https://github.com/user-attachments/assets/58d76331-ea69-4785-8caa-334f11b52b2a" /> | <img width="1920" height="2389" alt="image" src="https://github.com/user-attachments/assets/9edc54d6-2218-41e5-819a-bc181d96e2c9" /> |

</br>

#### 연간일정
| Before | After |
|--------|-------|
| <img width="1920" height="1511" alt="image" src="https://github.com/user-attachments/assets/f8559711-1b52-4e30-9575-902e55f18ba7" /> | <img width="1920" height="1939" alt="image" src="https://github.com/user-attachments/assets/5875d9c5-f3ba-4feb-b84c-40e3cc23c046" />  |

</br>

#### 이벤트
| Before | After |
|--------|-------|
| <img width="1920" height="1748" alt="image" src="https://github.com/user-attachments/assets/cdf7eabe-2994-4102-bfe8-9db4c43af8c1" /> | <img width="1920" height="2522" alt="image" src="https://github.com/user-attachments/assets/2d79a8f7-ab17-4eca-891a-83729d7816fb" />  |

</br>

#### 공지사항
| Before | After |
|--------|-------|
| <img width="1920" height="1979" alt="image" src="https://github.com/user-attachments/assets/fb75aeb8-3974-4fb9-91f3-3f5dccd010c0" /> | <img width="1920" height="2529" alt="image" src="https://github.com/user-attachments/assets/2b6d5eed-a33a-4691-8d24-831e6d450696" />  |

</br>

#### 1.2.6. 404 (Error)
| Before | After |
|--------|-------|
| <img width="1920" height="919" alt="image" src="https://github.com/user-attachments/assets/6cfd9800-06bb-4625-8e55-585b718bcefd" /> | <img width="1920" height="1459" alt="image" src="https://github.com/user-attachments/assets/86f36874-0926-437b-9476-4b64cf060ed2" />  |

</br>

</details>

</br>

<br/>

## Tech Stack
**Design / Prototyping** 
- Figma
- Notion
  
**Frontend** 
- React
  - React Router    
  - React Swiper    
  - React Calendar   
  - React Bootstrap Icons
- SCSS (CSS Preprocessor)

**Development Environment** 
- VS Code

**Deployment / CI**
- Netlify  

<br/>

> `React`의 학습과 함께한 프로젝트로, 학습 기록은 Notion에 정리하였다.

<details>
   
<summary>Notion Link</summary>
  
</br>
  
- [props: 컴포넌트에 텍스트 받아오기](https://buttoned-gibbon-63a.notion.site/props-233f5057cabe80b6a997fd650af2d2cc?source=copy_link)
- [useState: 드롭다운 내비게이션 만들기 ](https://buttoned-gibbon-63a.notion.site/useState-232f5057cabe808eabacc5cbbe84a371?source=copy_link)
- [useState: 모달 만들기](https://buttoned-gibbon-63a.notion.site/useState-232f5057cabe8081a40ddda4bc5bad45?source=copy_link)
- [useState: 탭구조 만들기
](https://buttoned-gibbon-63a.notion.site/useState-236f5057cabe80649394c7ab38852024?source=copy_link)
- [useState: 버튼 클릭 시 인풋 텍스트 변경하기](https://buttoned-gibbon-63a.notion.site/233f5057cabe80338ea6feff9e4b8821?source=copy_link)
- [useEffect: 날짜 순 정렬하기](https://buttoned-gibbon-63a.notion.site/234f5057cabe80f0ae80eeadaf093a76?source=copy_link)
- [useEffect: 현재 날짜에 해당하는 요소 필터링하기](https://buttoned-gibbon-63a.notion.site/234f5057cabe80bf84fef132891fe488?source=copy_link)
- [useState / useEffect: 오늘 날짜 기준으로 달력 표시하기](https://buttoned-gibbon-63a.notion.site/234f5057cabe8014adb8e44d48994d61?source=copy_link)
- [useState / useEffect: 콜백 함수 활용해서 슬라이드 액티브 시 텍스트 변경하기](https://buttoned-gibbon-63a.notion.site/234f5057cabe80ce97cef11ee8ed210a?source=copy_link)
- [useState / useEffect: 필터링 버튼 컴포넌트화 하기](https://buttoned-gibbon-63a.notion.site/233f5057cabe803bb08be4effa2def35?source=copy_link)
- [Router: <Link> 컴포넌트화해서 버튼 만들기 ](https://buttoned-gibbon-63a.notion.site/Link-233f5057cabe8084b42fd599fdff4969?source=copy_link) 
- [Calendar: 달력 그리기](https://buttoned-gibbon-63a.notion.site/React-Calendar-236f5057cabe807fa9b2dcb392e40cc0?source=copy_link)

</br>

</details>

</br>

<br/>

## Features
### Core Feature
`콘텐츠 필터링`
- 공연과 전시 콘텐츠를 `날짜`, `카테고리`, `태그` 기준으로 `필터링`
- 공지사항, 이벤트 콘텐츠를 `태그` 기준으로 `필터링`
- 사용자가 원하는 정보를 빠르게 탐색하도록 도우며, 전체 콘텐츠 구조의 체계적 정리를 가능케 함

`검색`
- `키워드 입력`을 통해 원하는 콘텐츠를 직접 탐색
- 사용자 목적 지향 탐색에 필수적, 필터 기능과 함께 UX 흐름 강화
  
`공통 컴포넌트 기반 UI 구성`
- 반복 사용되는 UI 요소(슬라이드, 버튼, 카드 등)를 `컴포넌트화`하여 디자인 일관성과 코드 재사용성을 확보

<br/>

### [Main Page](https://dainty-zabaione-f6aaff.netlify.app/)

<details>
  <summary>Click to expand</summary>

<br/>

![Header](https://github.com/user-attachments/assets/89758df8-3ba8-4adb-95af-7d7c9a4d9b36)

### Header
**Purpose**
- 메인 페이지 구조 개선 및 IA 구조 개선 (내비게이션 콘텐츠 재구성)

**Summary**
- **메인 페이지와 기관 페이지를 통합**하도록 하였다.        
- `로고`, `내비게이션`, `로그인`, `글로벌`, `전체 메뉴(리스트)`의 구성으로 단순하게 일렬 배치하였다.       
- `내비게이션`은 호버 시 하단에 내부 메뉴가 등장하도록 하였다.      
   최대한 정보 깊이를 단순화하고자 하였으며, 이때 내비게이션 콘텐츠를 새로 정리하였다.     
  - **최대 2뎁스 (하단 내부 메뉴) 유지**            
  - `문화상품` 메뉴로 서적 / 온라인 상품 내부 메뉴 배치           
  - 개별 메뉴였던 공연과 전시를 `공연 / 전시`로 통합        
  - `이용안내` 내부 메뉴로 `대관` 이동           
  - `열린 경영`의 경우 일반 사용자는 거의 접속하지 않으므로, 내부에서 콘텐츠를 확인할 수 있도록 할 예정이다. (미구현)  

<br/><br/>

![Login](https://github.com/user-attachments/assets/4749cd50-29ac-4c3a-bb02-f031802ff036)

### 로그인
**Purpose**
- 기존에는 `로그인`이 내부 페이지로 존재하였으나, `모달`로 디자인해 언제 어느 페이지에서도 바로 로그인이 가능하도록 한다.

**Summary**
- `input`을 활용한 로그인 화면 구현
- 다른 서비스로 로그인 아이콘 호버 시, 아이콘 배경과 텍스트 색이 해당 브랜드의 컬러로 변경
- `X` 버튼과 오버레이 클릭시 모달이 닫히도록 하였다.

<br/><br/>

![Sitemap](https://github.com/user-attachments/assets/fcfc7942-7f17-404a-a0be-b6b252c62753)

### 전체 메뉴
**Purpose**
- 기존의 `전체 메뉴`는 정보 구조가 복잡했으며, 기관 페이지의 내비게이션이 먼저 등장해 사용자가 정보를 찾는데 어려움이 있었다.
- 개선 후의 `내비게이션`의 순서대로 메뉴를 재배치하고, 한 눈에 들어올 수 있도록 개선한다.

**Summary**
- 호버 시 메뉴의 색상이 변경되도록 하였다.
- `Router`의 `NavLink`를 활용하여 사용자가 어느 페이지에 있는지 직관적으로 알 수 있도록 하였다.
- `X` 버튼과 오버레이 클릭시 모달이 닫히도록 하였다.
  
<br/><br/>

![MainVisual](https://github.com/user-attachments/assets/0f863024-ea62-40c6-b099-cdb24e5a8a4e)

### Main Visual
**Purpose**
- 기관 이미지와 목적에 부합하는 캐치프레이즈와 이미지의 등장으로 브랜드 가치를 강조한다.
- 관람 관련 정보를 안내한다.

**Summary**
- 상단에 `input`과 `button`을 활용해 검색창과 태그를 구현, 사용자가 원하는 정보를 빨리 찾을 수 있도록 하였다.
- 국립박물관문화재단이 위치한 건물의 전경 사진을 배경으로 두고, 캐치프레이즈를 제작해 브랜드 가치를 강조하도록 하였다.
- 관람 시간 및 관람료, 휴관일 안내 블록과 오시는길 `Link` 버튼으로 관람 관련 정보록 안내하도록 하였다.
  - 해당 `Link` 버튼은 컴포넌트화하였으며, 이후 메인페이지에서 `props`를 사용하여 이름과 `to=""`가 변경되도록 하였다.
  
<br/><br/>

![ExhibitionsPerformanceSection](https://github.com/user-attachments/assets/17bc160a-b124-4364-8f46-054f23613a37)

### 공연·전시
**Purpose**
- 기존 메인 비주얼로 사용되던 공연 및 전시의 알림을 섹션으로 분리한다.
- 스와이프가 불가능하던 기존 `슬라이드`를 개선해 사용자의 조작 편의성을 고려한다.

**Summary**
- `Swiper`를 사용하여 한 번에 공연이나 전시를 확인할 수 있도록 하였다.            
  - 해당 `Swiper`는 컴포넌트화하였으며, 이후 서브페이지에서도 불러와 사용할 수 있도록 하였다.     
- `전체` / `공연` / `전시` 의 탭구조를 활용하여 원하는 카테고리로 필터링할 수 있도록 하였다.     
  - 해당 탭 버튼은 컴포넌트화하였으며, 메인 페이지 뿐만 아니라 서브 페이지에서도 다양하게 필터링 버튼으로 활용할 수 있도록 하였다.           
- `더보기` 버튼과 `슬라이드`는 클릭 시 서브 페이지로 이동될 수 있도록 하였다.
- 하단에는 오늘이 개관일인지 알 수 있는 간단한 줄 달력을 배치하였으며, 서브 페이지로 이동하여 구체적인 공연과 전시를 확인할 수 있도록 하였다. 
  
<br/><br/>

![NoticesSection](https://github.com/user-attachments/assets/7c37a4b2-d882-4df5-8b93-95a097e5536f)

### 공지사항
**Purpose**
- 기존의 열 가지 게시물이 보이던 게시판 형태의 섹션을 개선, 정보 개수를 줄이고 여백을 추가하여 가독성을 높인다.

**Summary**
- 컴포넌트로 만든 탭 버튼을 활용하여 `전체` / `공지` / `공고` / `보도` / `채용` 의 카테고리를 필터링할 수 있도록 하였다.
- `더보기` 버튼과 게시물을 클릭하면 서브 페이지도 이동할 수 있도록 하였다.
  
<br/><br/>

![EventsSection](https://github.com/user-attachments/assets/c1878461-96fb-4dca-9fc9-d026e1777cff)

### 이벤트·소식
**Purpose**
- 기존의 이미지 중심이던 두 가지의 `슬라이드`를 하나로 통합하고, 이미지를 강조하면서 텍스트로 간단한 정보도 전달할 수 있도록 한다.

**Summary**
- `Swiper`를 활용해 이미지 슬라이드를 제작하였다.
- 활성화된 슬라이드와 일치하는 텍스트가 좌측에 등장하도록 하였다.
- `이미지`와 `더보기` 버튼 클릭 시 서브 페이지로 이동할 수 있도록 하였다.
  
<br/><br/>

![GoodsSection](https://github.com/user-attachments/assets/adae60d1-bae7-4035-8ac1-7698c8bb0c51)

### 뮤지엄 굿즈, 일상에 스며들다
**Purpose**
- 과다하게 사용되던 `슬라이드`의 개수를 줄이고 레이아웃을 개선해 상품을 한 번에 보여줄 수 있도록 한다.

**Summary**
- `Grid`를 활용하여 이미지를 강조하는 레이아웃을 구성하였다.
- 호버 시 오버레이가 등장하며 상품 이름과 가격이 등장하도록 하였다.
- 각 상품과 온라인 스토어 클릭 시 `새 창 보기`로 404 페이지로 이동하도록 하였다.
  
<br/><br/>

![SocialSection](https://github.com/user-attachments/assets/74f89a53-0733-4a66-b775-bf5158130ca7)

### 우리들의 이야기
**Purpose**
- 존재감이 미미하던 SNS 아이콘들을 섹션으로 분리, 브랜드와 브랜드 SNS를 홍보할 수 있도록 한다.

**Summary**
- 좌측에는 SNS 아이콘과 제목을 배치하였으며, 호버 시 아이콘 배경이 해당 SNS 브랜드의 컬러로 변화한다.
- 우측에는 `Swiper`를 활용해 네이버 블로그 게시물을 배치하였으며, 호버 시 해당 게시물의 제목이 등장하도록 하였다.
  
<br/><br/>

![Footer](https://github.com/user-attachments/assets/85f4d396-521b-4190-b65f-a26800aa7e26)

### Footer
**Purpose**
- 최대한 깔끔하게 정보를 전달하며 페이지를 마무리하는 느낌을 줄 수 있도록 한다.

**Summary**
- 가운데 정렬으로 정보를 배치하도록 하였다.
  
<br/>

</details>

<br/>

### [Sub Page: 오시는 길](https://dainty-zabaione-f6aaff.netlify.app/directions)

<details>
  <summary>Click to expand</summary>

<br/>

![PageDirection](https://github.com/user-attachments/assets/844d237d-bcb8-4ac8-ad47-abd503613ede)

**Purpose**
- 기존의 이미지와 줄글 설명이 대부분이었던 페이지를 개선한다.

**Summary**
- 이미지 대신 구글 지도 `iframe`을 배치, 실제 지도를 확인하며 사용자가 방문을 할 수 있도록 하였다.
- 탭구조를 활용하여 원하는 교통 수단의 정보만 간편하게 확인할 수 있도록 하였다.
- 하단에는 주요 건물 위치 정보 카드를 배치하도록 하였다.

<br/>

</details>

<br/>

### [Sub Page: 공연·전시](https://dainty-zabaione-f6aaff.netlify.app/exhibitionPerformance)

<details>
  <summary>Click to expand</summary>

<br/>

![PageExhibitionsPerformances](https://github.com/user-attachments/assets/d32acaaa-3c79-4323-93ce-8b582eea4c40)

**Purpose**
- 기존에는 월간공연 / 기획공연 / 문화행사 / 현재전시 / 예정전시 / 지난전시가 모두 독자적인 서브 페이지로 존재했다.    
- 전시와 공연 메뉴의 통합, `필터링 기능` 강화와 `검색 기능` 추가를 통해 한 페이지에서 정보를 확인할 수 있도록 개선한다.    
  - 단, 이때에도 사용자가 한꺼번에 많은 정보를 받아들여야 하는 상황이 없도록 페이지 내부의 정보 개수를 최소화한다. 

**Summary**
- 컴포넌트로 `검색 박스`를 제작해 상단에 배치하여 정보를 검색할 수 있도록 하였다.
- `진행 중` / `예정` / `종료` 의 버튼이 존재하며, 공연과 전시 정보를 1차적으로 `필터링`할 수 있도록 하였다.
- 기존에 만들어둔 `공연·전시` 데이터 속 `Tag`를 활용해, 2차적으로 `필터링`할 수 있도록 하였다.
- 이때 `필터링` 결과는 메인 페이지에서 제작한 컴포넌트인 `Swiper`에 등장하도록 하였다.

<br/>

</details>

<br/>

### [Sub Page: 연간 일정](https://dainty-zabaione-f6aaff.netlify.app/schedule)

<details>
  <summary>Click to expand</summary>

<br/>

![PageSchedule](https://github.com/user-attachments/assets/70f151ae-cbb2-4d53-aeec-35849ece2c66)

**Purpose**
- 기존의 해당 선택 월(月)의 콘텐츠를 리스트로 보여주었던 콘텐츠 구조를 개선한다.  

**Summary**
- 달력과 콘텐츠를 2단 구성하였다.
- 달력은 npm의 `React-Calender`를 사용하여 불러올 수 있도록 하였다.
- 불러온 달력은 `오늘 날짜` / `선택 날짜` / `지난 날짜` / `휴관일` / `공휴일`을 표시할 수 있도록 하였다.
- 달력에서 날짜를 선택하면 우측의 리스트에 해당 날짜의 콘텐츠가 리스트로 등장할 수 있도록 하였다.
- 페이지 접근 시 `오늘 날짜`가 선택되어있도록 하였다. 


<br/>

</details>

<br/>

### [Sub Page: 이벤트](https://dainty-zabaione-f6aaff.netlify.app/events)

<details>
  <summary>Click to expand</summary>

<br/>

![PageEvents](https://github.com/user-attachments/assets/2f410fd5-175c-47e1-af0f-8445967b9773)

**Purpose**
- 카테고리를 더 쉽게 확인할 수 있도록 하며, 카드의 여백과 개수를 고려한다. 

**Summary**
- 상단의 `검색` 컴포넌트를 불러오되, `진행 중` / `예정` / `종료`의 버튼 대신 전체 보기만 만들도록 하였다.
- 좌측은 카테고리 버튼을 불러와 배치하여 `필터링 기능`을 직관적으로 사용자가 확인할 수 있도록 하였다.
- 우측은 카드의 형태를 활용해 이미지를 강조하는 앨범 형태로 제작하였으며, 기존의 4열 구성을 3열 구성으로 개편하였다.


<br/>

</details>

<br/>

### [Sub Page: 공지사항](https://dainty-zabaione-f6aaff.netlify.app/notices)

<details>
  <summary>Click to expand</summary>

<br/>

![PageNotices](https://github.com/user-attachments/assets/49af2cb4-3033-4236-964d-68290bfd9234)

**Purpose**
- 카테고리를 더 쉽게 확인할 수 있도록 하며, 리스트의 여백과 개수를 고려한다. 

**Summary**
- 상단의 `검색` 컴포넌트를 불러오되, `진행 중` / `예정` / `종료`의 버튼 대신 전체 보기만 만들도록 하였다.
- 좌측은 카테고리 버튼을 불러와 배치하여 `필터링 기능`을 직관적으로 사용자가 확인할 수 있도록 하였다.
- `페이지네이션`을 활용해 리스트를 10개씩 확인할 수 있도록 하였다.

<br/>

</details>

<br/>

### [Sub Page: 404 (Error)](https://dainty-zabaione-f6aaff.netlify.app/*)

<details>
  <summary>Click to expand</summary>

<br/>

![Page404](https://github.com/user-attachments/assets/4169ed55-092f-4d98-9103-9f2add0713d5)

**Purpose**
- 다른 페이지로의 이동이 요구되는 페이지이므로, 기관 이미지를 유지하되 친절한 톤으로 안내한다.  

**Summary**
- 단순히 `404`라는 글자를 보여주는 것이 아닌, 깨진 항아리 등의 이미지를 사용해 기관 이미지를 나타내고자 하였다.
- 안내 메세지는 상세하고 친근하게 작성하였으며, 사용자의 기분과 예상되는 다음 행동을 고려하였다.


<br/>

</details>

<br/>



## Environment & Contribution
- OS: Windows 11, Windows 10
- Viewpoint: Desktop(1980px)
- Contribute: 100% 개인 작업 (기획, 디자인, 개발)

<br/>

> Description

<br/>

## Contact
- GitHub: https://github.com/dkssud-dus
- Email: chae3929@gmail.com
- LinkedIn: https://www.linkedin.com/in/dkssud-chaeyeon/


<br/><br/><br/>
