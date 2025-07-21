
---
[README](https://github.com/dkssud-dus/webRedesign-National_Museum_Foundation_of_Korea/blob/main/README.md) | [README_ko](https://github.com/dkssud-dus/webRedesign-National_Museum_Foundation_of_Korea/blob/main/README_ko.md)

<br/>

`#RedesignProject` `#GovernmentWebsite` `#Solo` `#DesktopOnly` 
# **Website Redesign Project Details:**
### 국립박물관문화재단 National Museum Foundation of Korea

<br/>
<br/>
<br/>

## Table of Contents

1. [Project Overview](#1-Project-Overview)   
2. [Core Features](#2-Core-Features)   
3. [Page-wise Features](#3-Page-wise-Features)    
   
</br>
</br>
</br>

---

## 1. Project Overview
### 1.1. Background
국립박물관문화재단은 대한민국의 기관으로, 국립중앙박물관 및 전국 소속박물관의 전시와 국립중앙박물관 내 전문공연장 극장 '용'의 공연을 기획하고 발굴하는 사업을 펼치고 있다. 또한, 박물관이 소장한 문화유산을 모티브로 만든 상품 브랜드인 뮷즈 (MU:DS)를 운영하고 있으며 박물관의 전시 도록과 연구·조사 보고서를 발간하고 있다. 그러나 기존 웹사이트는 상기한 사업 내용을 효과적으로 전달하지 못했고, 브랜드 가치나 사용자의 몰입을 고려한 설계 또한 부족했다.

</br>

기존 웹사이트에 대한 분석은 다음과 같다.

</br>

<details>
<summary>기존 웹사이트 보기</summary>

</br>

<img width="1920" height="1980" alt="image" src="https://github.com/user-attachments/assets/446528b1-d30e-4733-b061-2bb2ec5f4794" />

</br>
</br>
</br>

</details>

</br>

1. **정보 구조 혼란**     
  1.1. '기관 소개' 메인 페이지가 별도로 존재하여 정보 흐름의 단절   
  1.2. 내비게이션 메뉴 구조가 사용자 여정에 맞춰 구성되어 있지 않음      

</br>

2. **브랜드 메시지 미약**   
  2.1. 재단의 정체성 및 사업, 가치를 설명하는 콘텐츠 부족   
  2.2. 사용자가 "여기가 어떤 기관인지" 직관적으로 알기 어려움

</br>

3. **UI/UX 비일관성**    
  3.1. 전반적으로 슬라이드 사용이 과도하며 콘텐츠간 여백이 부족함     
  3.2. 인터랙션 (호버, 클릭 등)의 피드백 부족으로 사용성 저하      

</br>
</br>
</br>

#### 이 프로젝트의 목표는 하기의 네 가지로 구성하였다.
1. **메인 페이지 구조 개선**      
  기존에 분리되어 있던 '기관 소개'와 메인 콘텐츠를 하나의 구조로 통합하여, 사용자가 자연스럽게 정보 흐름을 따라갈 수 있도록 구성한다.

</br>

2. **브랜드 정체성 강화**    
  국립박물관문화재단의 역할과 가치를 명확히 드러내고, MU:DS 브랜드 등 주요 사업의 메시지를 시각적으로 효과 있게 전달한다.
   
</br>

3. **사용자 경험 향상 (UX)**          
  비효율적인 레이아웃을 개선하고, 여백, 타이포그래피 등 가독성과 탐색 편의성을 높인다.
   
</br>

4. **내비게이션 구조 재정비**       
  사용자 여정에 맞춘 메뉴 구조로 정보 접근성을 높이고, 반복되는 콘텐츠는 구조적으로 재정리한다.

</br>
</br>
</br>

### 1.2. Keywords
1. **정제된**      
  지나치게 화려하거나 과한 인터랙션이 아닌, 절제되고 품위 있는 레이아웃         
    
</br>

2. **몰입감 있는**     
  문화·예술 콘텐츠를 깊이 있게 보여주며, 사용자의 탐색 경험을 끊김 없이 이어감    
    
</br>

3. **정보 중심**    
  UI가 콘텐츠 전달을 방해하지 않고 정보 중심의 시선 흐름을 유도        
    
</br>
</br>
</br>

---

## 2. Core Features
### 콘텐츠 필터링
1. 공연과 전시 콘텐츠를 날짜, 카테고리, 태그 기준으로 필터링
2. 공지사항, 이벤트 콘텐츠를 태그 기준으로 필터링
3. 사용자가 원하는 정보를 빠르게 탐색하도록 도우며, 전체 콘텐츠 구조의 체계적 정리를 가능케 함
   
</br>
</br>
</br>

### 검색
1. 키워드 입력을 통해 원하는 콘텐츠를 직접 탐색
2. 사용자 목적 지향 탐색에 필수적, 필터 기능과 함께 UX 흐름 강화
   
</br>
</br>
</br>

### 공통 컴포넌트 기반 UI 구성
1. 반복 사용되는 UI 요소(슬라이드, 버튼, 카드 등)를 컴포넌트화하여 디자인 일관성과 코드 재사용성을 확보

</br>
</br>
</br>

#### → `REACT.js`의 학습을 통해 구현하도록 하였다.
프로젝트 진행 중 공부 내용은 `Notion`에 정리하였다 (한국어).

<details>
<summary>공부 정리본 보기</summary>
  
</br>
  
1. [props: 컴포넌트에 텍스트 받아오기](https://buttoned-gibbon-63a.notion.site/props-233f5057cabe80b6a997fd650af2d2cc?source=copy_link)
2. [useState: 드롭다운 내비게이션 만들기 ](https://buttoned-gibbon-63a.notion.site/useState-232f5057cabe808eabacc5cbbe84a371?source=copy_link)
3. [useState: 모달 만들기](https://buttoned-gibbon-63a.notion.site/useState-232f5057cabe8081a40ddda4bc5bad45?source=copy_link)
4. [useState: 탭구조 만들기
](https://buttoned-gibbon-63a.notion.site/useState-236f5057cabe80649394c7ab38852024?source=copy_link)
5. [useState: 버튼 클릭 시 인풋 텍스트 변경하기](https://buttoned-gibbon-63a.notion.site/233f5057cabe80338ea6feff9e4b8821?source=copy_link)
6. [useEffect: 날짜 순 정렬하기](https://buttoned-gibbon-63a.notion.site/234f5057cabe80f0ae80eeadaf093a76?source=copy_link)
7. [useEffect: 현재 날짜에 해당하는 요소 필터링하기](https://buttoned-gibbon-63a.notion.site/234f5057cabe80bf84fef132891fe488?source=copy_link)
8. [useState / useEffect: 오늘 날짜 기준으로 달력 표시하기](https://buttoned-gibbon-63a.notion.site/234f5057cabe8014adb8e44d48994d61?source=copy_link)
9. [useState / useEffect: 콜백 함수 활용해서 슬라이드 액티브 시 텍스트 변경하기](https://buttoned-gibbon-63a.notion.site/234f5057cabe80ce97cef11ee8ed210a?source=copy_link)
10. [useState / useEffect: 필터링 버튼 컴포넌트화 하기](https://buttoned-gibbon-63a.notion.site/233f5057cabe803bb08be4effa2def35?source=copy_link)
11. [Router: <Link> 컴포넌트화해서 버튼 만들기 ](https://buttoned-gibbon-63a.notion.site/Link-233f5057cabe8084b42fd599fdff4969?source=copy_link) 
12. [Calendar: 달력 그리기](https://buttoned-gibbon-63a.notion.site/React-Calendar-236f5057cabe807fa9b2dcb392e40cc0?source=copy_link)

</br>
</br>
</br>

</details>

</br>
</br>
</br>

---

## 3. Page-wise Features

### 3.1. Main Page

---

### 3.1.1. 
이미지

<br/>

#### 목적        
1. 

<br/>
   
#### 구현 요약 
1.  

<br/>
<br/>
<br/>

---

### 3.2. Sub Pages (6)

---

### 3.2.1. Name
이미지

#### 목적
1.  

<br/>

#### 구현 요약
1.  

</br>
</br>
</br>

---
