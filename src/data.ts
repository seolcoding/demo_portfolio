import { Project, TimelineItem, SkillCategory } from './types';

export const projectsData: Project[] = [
  {
    id: 'project-1',
    title: 'AI 반려식물 관리 서비스 기획',
    subtitle: '반려식물 케어 가이드 및 진단 솔루션',
    period: '2024.01 ~ 2024.04',
    role: '팀장 / 서비스 기획',
    teamSize: 4,
    problem: '반려식물 초보자는 현재 식물의 상태를 정확하게 진단하고 적절한 관리 방법을 판단하기 어렵다.',
    research: '초보 식물 집사 8명을 대상으로 1:1 심층 사용자 인터뷰 진행 및 통찰 도출',
    action: '복잡한 아이디어 단계에서 수립된 초기 기능 14개를 린하게 핵심 8개 기능으로 대폭 압축 및 화면 흐름도 상세 설계',
    result: {
      text: '청년 스타트업 아이디어 경진대회 총 12팀 중 최종 3위 수상 (장려상)',
      metrics: [
        { label: '초기 도출 기능', before: '14개', after: '8개', change: '핵심 기능 집중' },
        { label: '사용자 인터뷰 수', before: '0명', after: '8명', change: '정성 조사 완료' }
      ],
      badge: '경진대회 3위 (장려상)'
    }
  },
  {
    id: 'project-2',
    title: '동네 소상공인 주문예약 서비스 기획',
    subtitle: '골목 상권 상인들을 위한 스마트 오더 시스템',
    period: '2022.09 ~ 2022.12',
    role: '서비스 기획 · 사용자 조사',
    teamSize: 4,
    problem: '소상공인이 매장 운영과 함께 동시다발적으로 발생하는 수동 주문 및 예약 처리에 큰 관리 부담을 느낀다.',
    research: '동네 소상공인 심층 인터뷰 5명 진행 및 핵심 고객 설문 조사 32명 분석',
    action: '요구사항 분석을 통해 복잡한 기능 12개를 핵심 7개 기능으로 우선순위 축소, 점주용 주문 관리 단계를 3단계로 간소화하여 사용성 극대화',
    result: {
      text: '프로젝트 수업 최종 평가 A 획득, 전체 8개 팀 중 발표 부문 2위 선정',
      metrics: [
        { label: '점주 관리 화면', before: '기존 다단계', after: '3단계', change: '동선 간소화' },
        { label: '기능 우선순위화', before: '12개', after: '7개', change: '복잡도 41% 감소' }
      ],
      badge: '학점 A / 발표 2위'
    }
  },
  {
    id: 'project-3',
    title: '청년 취업정보 콘텐츠 운영',
    subtitle: '취업 준비생 대상 소셜 채널 활성화 프로젝트',
    period: '2023.06 ~ 2023.09',
    role: '콘텐츠 기획 · 운영 지원',
    teamSize: 5,
    problem: '소셜 채널 내 단순 홍보성 정보 위주의 구성으로 인해 유저 참여도와 도달 범위가 정체되는 문제 해결 필요.',
    research: '유저 관심사 키워드 분석 및 취업 준비생 피드백 모니터링',
    action: '기존 홍보 콘텐츠 비중을 줄이고 실질적인 취업정보 콘텐츠 비중을 15%에서 40%로 전면 확대 편성 및 유저 반응 추적',
    result: {
      text: '콘텐츠 중심의 개편을 통해 단기간에 주요 반응 지표 및 공유 지수 폭발적 성장 견인',
      metrics: [
        { label: '평균 조회수', before: '1,250회', after: '1,680회', change: '+34%' },
        { label: '콘텐츠 저장수', before: '34회', after: '57회', change: '+68%' },
        { label: '콘텐츠 공유수', before: '12회', after: '21회', change: '+75%' }
      ],
      badge: '지표 성장 우수'
    }
  }
];

export const timelineData: TimelineItem[] = [
  {
    id: 'timeline-1',
    period: '2023.04 ~ 2023.12',
    title: '커리어루트 서비스운영팀 인턴',
    subtitle: '인턴십 프로그램 수료 (8개월)',
    description: [
      '일일 서비스 운영 데이터 수집 및 패턴 정리',
      '고객 피드백(VOC) 및 자주 묻는 문의 카테고리별 분류 체계 고도화',
      '경쟁사 신규 기능 트렌드 리서치 및 서비스 분석 보고서 작성',
      '소셜 채널 활성화를 위한 SNS 정보성 콘텐츠 기획 및 제작 지원'
    ],
    type: 'intern'
  },
  {
    id: 'timeline-2',
    period: '2021.04 ~ 2022.03',
    title: '고객센터 상담원 (계약직)',
    subtitle: '고객 응대 및 VOC 수집 (12개월)',
    description: [
      '전화 및 이메일 인바운드 문의 응대 및 실시간 문제 해결 지원',
      '고객 관점에서의 서비스 사용 애로사항 체계적 기록 및 관련 부서 전달',
      '핵심 트러블슈팅 매뉴얼 수정 및 제안 참여'
    ],
    type: 'experience'
  },
  {
    id: 'timeline-3',
    period: '2018.03 ~ 2023.02',
    title: '한국대학교 경영학과 졸업',
    subtitle: '학사 학위 취득',
    description: [
      '학점: 3.6 / 4.5',
      '마케팅 및 소비자행동론 관련 다수 프로젝트 수행',
      '비즈니스 모델 분석 및 기획 소모임 활동'
    ],
    type: 'education'
  }
];

export const skillsData: SkillCategory[] = [
  {
    title: '서비스 기획',
    items: ['요구사항 정의서(PRD) 작성', '핵심 기능 정의 및 우선순위 선정', '유저 스토리 기반 화면 설계']
  },
  {
    title: '조사 · 리서치',
    items: ['사용자 1:1 인터뷰 설계 및 퍼소나 모델링', '구조화된 설문 분석 및 통계 유추', '경쟁 제품 정량/정성 벤치마킹']
  },
  {
    title: '협업 · PM',
    items: ['논리적인 회의록 작성 및 공유', '기획 산출물 아카이빙 및 일정 리스크 트래킹', '구조화된 발표 자료 장표 설계']
  },
  {
    title: '마케팅 실무',
    items: ['트렌드 맞춤 소셜 콘텐츠 기획', '사용자 여정 기반 이탈 영역 분석', '데이터 기반 가설 수립 및 개선 제안']
  }
];

export const toolsData = [
  { name: 'Figma', category: 'Design & Wireframe', desc: '화면 설계서 작성, 프로토타이핑, 컴포넌트 협업' },
  { name: 'Notion', category: 'Documentation', desc: 'PRD 요구사항 문서화, 회의록 작성, 업무 칸반보드 관리' },
  { name: 'Google Analytics', category: 'Data Analysis', desc: '퍼널 전환 분석, 유저 잔존율 트래킹, 지표 시각화' },
  { name: 'PowerPoint / Sheets', category: 'Business Tools', desc: '경영진/팀 발표 자료 구성, 데이터 정렬 및 간이 정량 분석' },
  { name: 'ChatGPT / Gemini', category: 'AI Productivity', desc: '시장 조사 초안 분석, 유저 인터뷰 질문지 설계 아이데이션' }
];

export const certificationsData = [
  'SQLD (SQL 개발자)',
  'ADsP (데이터분석 준전문가)',
  'GAIQ (Google Analytics Individual Qualification)'
];

export const contactData = {
  email: 'example@email.com',
  phone: '010-0000-0000',
  linkedin: 'linkedin.com/in/dalmi-seo',
  github: 'github.com/dalmi-seo'
};
