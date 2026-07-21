import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  User, Mail, Phone, Calendar, Users, Award, 
  ArrowRight, Check, Copy, Printer, FileText, 
  ClipboardList, TrendingUp, Search, Lightbulb, 
  ExternalLink, Sparkles, BookOpen, ChevronRight,
  Info, Briefcase, GraduationCap, CheckCircle2, AlertCircle,
  Settings
} from 'lucide-react';
import { projectsData, timelineData, skillsData, toolsData, certificationsData, contactData } from './data';

type FilterType = 'all' | 'research' | 'prioritize' | 'metrics';

export default function App() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [selectedTimelineId, setSelectedTimelineId] = useState<string | null>(null);

  // Auto-clear toast notification
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setToastMessage(`"${text}" 가 클립보드에 복사되었습니다.`);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  // Planner's commentaries based on the chosen Recruiter Quick Filter
  const getCommentary = () => {
    switch (activeFilter) {
      case 'research':
        return {
          title: '🔍 정성 · 정량 사용자 조사 역량',
          text: '단순한 추측이 아닌 인터뷰와 설문을 기반으로 진짜 유저 문제를 정의합니다. 가설 수립 및 퍼소나 도출을 거쳐 구체적인 서비스 방향을 도출한 경험이 돋보입니다.',
          badge: '사용자 중심 (User-Centric)'
        };
      case 'prioritize':
        return {
          title: '✂️ 기능 우선순위 및 스펙 조율 역량',
          text: '한정된 자원 내에서 가치를 최대화하기 위해 기능 우선순위화 기법을 활용합니다. 무리한 기획을 린(Lean)하게 다듬어 실행 가능한 단위로 압축하는 데 탁월합니다.',
          badge: '린 기획 (Lean Scope)'
        };
      case 'metrics':
        return {
          title: '📈 지표 중심 성장 및 비즈니스 사고',
          text: '모든 기획의 끝은 비즈니스 지표의 개선입니다. 조회수, 저장수, 공유수 등 정량 데이터를 집요하게 추적하여 실제 서비스 성과를 견인하는 역할을 수행했습니다.',
          badge: '데이터 기반 (Data-Driven)'
        };
      default:
        return {
          title: '💡 서비스 기획자로서의 사고 과정',
          text: '채용 부서의 핵심 관심사를 클릭하시면 관련된 이력, 기획서의 핵심 액션, 데이터 수치 및 관련 세부 역량이 자동으로 강조되어 한눈에 확인하실 수 있습니다.',
          badge: '퀵 내비게이션'
        };
    }
  };

  const commentary = getCommentary();

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-slate-900 flex flex-col font-sans transition-colors duration-300 relative">
      
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white px-5 py-3 rounded-xl shadow-xl flex items-center gap-2.5 text-sm font-medium border border-slate-800 no-print"
          >
            <Check className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interactive Floating Recruiting Control - STAYS ON TOP */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-neutral-200/60 py-3 px-4 shadow-xs no-print">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 font-display">
              Recruiter Interactive Controller
            </p>
          </div>

          {/* Quick Filter Controls */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 w-full md:w-auto">
            <button
              id="filter-all"
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-1.5 text-xs font-bold transition-all duration-200 cursor-pointer rounded-full ${
                activeFilter === 'all'
                  ? 'bg-neutral-900 text-white shadow-xs'
                  : 'bg-neutral-100/70 text-neutral-600 hover:bg-neutral-200/70'
              }`}
            >
              기본 전체 보기
            </button>
            <button
              id="filter-research"
              onClick={() => setActiveFilter('research')}
              className={`px-4 py-1.5 text-xs font-extrabold transition-all duration-200 flex items-center gap-1.5 cursor-pointer rounded-full ${
                activeFilter === 'research'
                  ? 'bg-emerald-500 text-neutral-950 shadow-sm'
                  : 'bg-neutral-100/70 text-neutral-600 hover:bg-neutral-200/70'
              }`}
            >
              <Search className="w-3.5 h-3.5" />
              🔍 리서치 역량
            </button>
            <button
              id="filter-prioritize"
              onClick={() => setActiveFilter('prioritize')}
              className={`px-4 py-1.5 text-xs font-extrabold transition-all duration-200 flex items-center gap-1.5 cursor-pointer rounded-full ${
                activeFilter === 'prioritize'
                  ? 'bg-emerald-500 text-neutral-950 shadow-sm'
                  : 'bg-neutral-100/70 text-neutral-600 hover:bg-neutral-200/70'
              }`}
            >
              <ClipboardList className="w-3.5 h-3.5" />
              ✂️ 우선순위 조율
            </button>
            <button
              id="filter-metrics"
              onClick={() => setActiveFilter('metrics')}
              className={`px-4 py-1.5 text-xs font-extrabold transition-all duration-200 flex items-center gap-1.5 cursor-pointer rounded-full ${
                activeFilter === 'metrics'
                  ? 'bg-emerald-500 text-neutral-950 shadow-sm'
                  : 'bg-neutral-100/70 text-neutral-600 hover:bg-neutral-200/70'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              📈 정량 지표 성장
            </button>
          </div>
        </div>
      </header>

      {/* Recruiter Commentary Box */}
      <section className="bg-white border-b border-neutral-200/40 py-3.5 px-4 no-print">
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.15 }}
              className="flex flex-col md:flex-row md:items-center justify-between gap-3 text-neutral-700"
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 shrink-0 p-1.5 bg-emerald-50 rounded-xl">
                  <Lightbulb className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-neutral-900 flex items-center gap-2">
                    {commentary.title}
                    <span className="text-[10px] font-mono bg-emerald-50 text-emerald-700 border border-emerald-100 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                      {commentary.badge}
                    </span>
                  </h3>
                  <p className="text-xs text-neutral-500 mt-1 leading-relaxed text-balance">
                    {commentary.text}
                  </p>
                </div>
              </div>
              
              {activeFilter !== 'all' && (
                <button
                  onClick={() => setActiveFilter('all')}
                  className="text-[11px] font-bold text-emerald-600 hover:text-emerald-700 hover:underline shrink-0 text-left cursor-pointer"
                >
                  기본 필터로 돌아가기 &rarr;
                </button>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Main Container */}
      <main className="max-w-6xl w-full mx-auto p-4 md:p-6 lg:p-8 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 print-full-width">
        
        {/* LEFT COLUMN: Profile & Resume (cols-4) */}
        <div className="lg:col-span-5 flex flex-col gap-6 print-full-width">
          
          {/* Profile Card */}
          <div className="bento-card p-6 flex flex-col items-center text-center relative overflow-hidden print-card">
            
            {/* Elegant Profile Image */}
            <div className="relative mb-4 mt-2">
              <div className="w-24 h-24 rounded-3xl bg-neutral-100 border border-neutral-200/80 overflow-hidden shadow-xs relative flex items-center justify-center">
                <img 
                  src="https://raw.githubusercontent.com/seolcoding/demo_portfolio/main/seo-dalmi-profile.png" 
                  alt="서달미 프로필" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-lg flex items-center justify-center shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-neutral-950" />
                </div>
              </div>
            </div>

            {/* Profile Info */}
            <h1 className="text-2xl font-extrabold text-neutral-900 tracking-tight">서달미</h1>
            <p className="text-xs font-bold text-emerald-600 tracking-wider mt-1.5 uppercase font-mono">
              Service Planner &middot; PM Candidate
            </p>
            
            {/* Job Interest Tags */}
            <div className="flex flex-wrap justify-center gap-1.5 mt-3.5">
              {['서비스 기획', 'PM', '사업기획'].map((tag) => (
                <span 
                  key={tag} 
                  className="text-[11px] font-bold bg-neutral-100 text-neutral-600 px-3 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* One-Line Intro */}
            <blockquote className="text-sm font-medium text-neutral-600 mt-5 px-5 py-3.5 bg-neutral-50 rounded-2xl border-l-4 border-emerald-500 leading-relaxed text-balance relative">
              "사용자 조사에서 시작해 기능 우선순위까지 설계하는 서비스 기획자"
            </blockquote>

            {/* Print & Resume Actions */}
            <div className="grid grid-cols-2 gap-2.5 w-full mt-5 no-print">
              <button
                onClick={handlePrint}
                className="py-2.5 px-4 rounded-full border border-neutral-300 hover:bg-neutral-50 hover:border-neutral-400 text-xs font-bold text-neutral-800 flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
              >
                <Printer className="w-3.5 h-3.5 text-neutral-500" />
                PDF 다운로드
              </button>
              <a
                href="#contact-section"
                className="py-2.5 px-4 rounded-full bg-neutral-900 hover:bg-neutral-800 text-xs font-bold text-white flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-sm"
              >
                <Mail className="w-3.5 h-3.5 text-neutral-200 animate-pulse" />
                연락하기
              </a>
            </div>
          </div>

          {/* Timeline / Experience */}
          <div className="bento-card p-6 flex flex-col print-card">
            <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-400 border-b border-neutral-100 pb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-neutral-700" />
              RESUME
              <span className="text-[10px] font-bold text-emerald-600 font-mono ml-auto">Interactive Timeline</span>
            </h2>

            <div className="mt-5 relative border-l-2 border-neutral-150 pl-4 ml-2.5 space-y-6">
              {timelineData.map((item) => {
                const isSelected = selectedTimelineId === item.id;
                
                // Determine highlight based on active recruiter filter
                let filterHighlight = false;
                if (activeFilter === 'research' && (item.type === 'intern' || item.type === 'experience')) {
                  filterHighlight = true;
                } else if (activeFilter === 'metrics' && item.type === 'intern') {
                  filterHighlight = true;
                }

                return (
                  <div 
                    key={item.id} 
                    className={`relative transition-all duration-300 ${
                      filterHighlight ? 'bg-emerald-50/50 border border-emerald-500/20 p-3.5 rounded-2xl -ml-3.5 shadow-2xs' : ''
                    }`}
                  >
                    {/* Timeline Node Badge */}
                    <span className={`absolute -left-[25.5px] top-1 w-4.5 h-4.5 rounded-full flex items-center justify-center text-[9px] font-bold border-2 transition-all ${
                      filterHighlight 
                        ? 'bg-emerald-500 text-neutral-950 border-white ring-2 ring-emerald-100'
                        : isSelected
                          ? 'bg-neutral-900 text-white border-white shadow-sm'
                          : 'bg-white text-neutral-400 border-neutral-200'
                    }`}>
                      {item.type === 'education' ? '학' : item.type === 'intern' ? '인' : '경'}
                    </span>

                    {/* Timeline Title Info */}
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono font-bold text-neutral-400">{item.period}</span>
                      <h3 className="text-xs font-bold text-neutral-900 mt-0.5">{item.title}</h3>
                      <p className="text-[10px] text-neutral-400 mt-0.5">{item.subtitle}</p>
                    </div>

                    {/* Compact Details List */}
                    <ul className="mt-2 space-y-1.5 text-xs text-neutral-500 list-none pl-0">
                      {item.description.map((bullet, idx) => {
                        // Bold text matching recruiter keywords
                        let highlightBullet = false;
                        if (activeFilter === 'research' && (bullet.includes('데이터 수집') || bullet.includes('VOC') || bullet.includes('리서치') || bullet.includes('피드백'))) {
                          highlightBullet = true;
                        } else if (activeFilter === 'metrics' && (bullet.includes('데이터 수집') || bullet.includes('분류 체계'))) {
                          highlightBullet = true;
                        }

                        return (
                          <li key={idx} className="flex items-start gap-1.5 leading-relaxed">
                            <span className="text-neutral-300 mt-1 shrink-0">&bull;</span>
                            <span className={highlightBullet ? 'text-emerald-700 font-bold bg-emerald-50/80 px-1 rounded' : ''}>
                              {bullet}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Projects & Skills & Tools (cols-7) */}
        <div className="lg:col-span-7 flex flex-col gap-6 print-full-width">
          
          {/* Projects Section Title */}
          <div className="flex items-center justify-between no-print">
            <h2 className="text-base font-bold text-neutral-900 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-neutral-600" />
              핵심 프로젝트 기획 이력
            </h2>
            <span className="font-mono text-[10px] font-bold bg-neutral-100 text-neutral-500 px-2.5 py-1 rounded-full">3 Projects</span>
          </div>

          {/* Project Cards */}
          <div className="space-y-6 print-grid">
            {projectsData.map((project, projIdx) => {
              // Highlighting states based on recruiter quick filter
              const isResearchHighlighted = activeFilter === 'research';
              const isPrioritizeHighlighted = activeFilter === 'prioritize';
              const isMetricsHighlighted = activeFilter === 'metrics';

              return (
                <div 
                  key={project.id}
                  className="bento-card relative overflow-hidden print-card"
                >
                  <div className="p-5 md:p-6">
                    {/* Project Header Info */}
                    <div className="flex flex-wrap items-start justify-between gap-2 border-b border-neutral-100 pb-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono font-bold bg-neutral-100 text-neutral-600 px-2 py-0.5 rounded-md">
                            0{projIdx + 1}
                          </span>
                          <h3 className="text-sm font-extrabold text-neutral-900 font-display">{project.title}</h3>
                        </div>
                        <p className="text-xs text-neutral-400 mt-1 font-medium">{project.subtitle}</p>
                      </div>

                      <div className="flex flex-col items-end text-right">
                        <span className="text-[10px] font-mono font-bold text-neutral-400">{project.period}</span>
                        <span className="text-[10px] font-bold text-neutral-500 mt-0.5">
                          {project.role} &middot; 팀 {project.teamSize}명
                        </span>
                      </div>
                    </div>

                    {/* Step-by-Step Logic Alignment (Problem -> Research -> Action -> Result) */}
                    <div className="mt-4 space-y-3">
                      
                      {/* Step 1: PROBLEM (문제 정의) */}
                      <div 
                        className={`p-3 rounded-2xl border transition-all duration-200 ${
                          activeFilter === 'all'
                            ? 'bg-neutral-50 border-neutral-100'
                            : 'bg-neutral-50/40 opacity-40 scale-[0.99] border-neutral-100/50'
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          <span className="text-[9px] font-mono font-bold text-red-600 bg-red-50 border border-red-100/60 px-2 py-0.5 rounded-full mt-0.5 shrink-0 uppercase tracking-wider">
                            Problem
                          </span>
                          <div>
                            <h4 className="text-xs font-bold text-neutral-900">문제 정의</h4>
                            <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
                              {project.problem}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Step 2: RESEARCH (사용자 조사) - HIGH-LIGHTABLE */}
                      <div 
                        className={`p-3 rounded-2xl border transition-all duration-200 ${
                          isResearchHighlighted
                            ? 'bg-emerald-50/60 border-emerald-500/20 shadow-2xs'
                            : activeFilter === 'all'
                              ? 'bg-white border-neutral-200/50'
                              : 'bg-white opacity-40 scale-[0.99] border-neutral-100/50'
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full mt-0.5 shrink-0 uppercase tracking-wider border ${
                            isResearchHighlighted 
                              ? 'text-emerald-700 bg-emerald-100 border-emerald-200 animate-pulse' 
                              : 'text-amber-700 bg-amber-50 border-amber-100'
                          }`}>
                            Research
                          </span>
                          <div>
                            <h4 className="text-xs font-bold text-neutral-900 flex items-center gap-1.5">
                              사용자 조사 &amp; 인사이트
                              {isResearchHighlighted && (
                                <span className="text-[9px] text-emerald-700 font-mono font-bold bg-white border border-emerald-200 px-1.5 py-0.2 rounded-full">
                                  조사 역량 강조됨
                                </span>
                              )}
                            </h4>
                            <p className={`text-xs mt-1 leading-relaxed ${
                              isResearchHighlighted ? 'text-emerald-950 font-medium' : 'text-neutral-500'
                            }`}>
                              {project.research}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Step 3: ACTION (기획 및 조율) - HIGH-LIGHTABLE */}
                      <div 
                        className={`p-3 rounded-2xl border transition-all duration-200 ${
                          isPrioritizeHighlighted
                            ? 'bg-emerald-50/60 border-emerald-500/20 shadow-2xs'
                            : activeFilter === 'all'
                              ? 'bg-white border-neutral-200/50'
                              : 'bg-white opacity-40 scale-[0.99] border-neutral-100/50'
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full mt-0.5 shrink-0 uppercase tracking-wider border ${
                            isPrioritizeHighlighted 
                              ? 'text-emerald-700 bg-emerald-100 border-emerald-200 animate-pulse' 
                              : 'text-indigo-700 bg-indigo-50 border-indigo-100'
                          }`}>
                            Action
                          </span>
                          <div>
                            <h4 className="text-xs font-bold text-neutral-900 flex items-center gap-1.5">
                              기획 및 리스크 조율
                              {isPrioritizeHighlighted && (
                                <span className="text-[9px] text-emerald-700 font-mono font-bold bg-white border border-emerald-200 px-1.5 py-0.2 rounded-full">
                                  우선순위 역량 강조됨
                                </span>
                              )}
                            </h4>
                            <p className={`text-xs mt-1 leading-relaxed ${
                              isPrioritizeHighlighted ? 'text-emerald-950 font-medium' : 'text-neutral-500'
                            }`}>
                              {project.action}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Step 4: RESULT (성과 및 지표) - HIGH-LIGHTABLE */}
                      <div 
                        className={`p-3 rounded-2xl border transition-all duration-200 ${
                          isMetricsHighlighted
                            ? 'bg-emerald-50/60 border-emerald-500/20 shadow-2xs'
                            : activeFilter === 'all'
                              ? 'bg-white border-neutral-200/50'
                              : 'bg-white opacity-40 scale-[0.99] border-neutral-100/50'
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full mt-0.5 shrink-0 uppercase tracking-wider border ${
                            isMetricsHighlighted 
                              ? 'text-emerald-700 bg-emerald-100 border-emerald-200 animate-pulse' 
                              : 'text-emerald-700 bg-emerald-50 border-emerald-100'
                          }`}>
                            Result
                          </span>
                          <div className="w-full">
                            <h4 className="text-xs font-bold text-neutral-900 flex items-center justify-between gap-1.5">
                              <span>성과 및 비즈니스 결과</span>
                              {project.result.badge && (
                                <span className="bg-neutral-900 text-white text-[9px] font-bold px-2 py-0.5 rounded-full font-mono">
                                  {project.result.badge}
                                </span>
                              )}
                            </h4>
                            <p className={`text-xs mt-1 leading-relaxed ${
                              isMetricsHighlighted ? 'text-emerald-950 font-medium' : 'text-neutral-500'
                            }`}>
                              {project.result.text}
                            </p>

                            {/* Core Highlight Metrics */}
                            {project.result.metrics && (
                              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-3 pt-3 border-t border-neutral-100">
                                {project.result.metrics.map((metric, mIdx) => (
                                  <div 
                                    key={mIdx} 
                                    className={`p-2 rounded-xl border flex flex-col justify-center text-center transition-colors ${
                                      isMetricsHighlighted
                                        ? 'bg-white border-emerald-300 shadow-2xs'
                                        : 'bg-neutral-50/40 border-neutral-100'
                                    }`}
                                  >
                                    <span className="text-[9px] font-bold text-neutral-400 block truncate">{metric.label}</span>
                                    <div className="flex items-center justify-center gap-1 mt-0.5">
                                      <span className="text-[10px] text-neutral-300 line-through font-mono">{metric.before}</span>
                                      <span className="text-[10px] text-neutral-300 font-mono">&rarr;</span>
                                      <span className={`text-xs font-bold font-mono ${
                                        isMetricsHighlighted ? 'text-emerald-600' : 'text-neutral-850'
                                      }`}>
                                        {metric.after}
                                      </span>
                                    </div>
                                    <span className={`text-[10px] font-bold mt-0.5 block truncate ${
                                      metric.change.startsWith('+') || metric.change.includes('위')
                                        ? 'text-emerald-600'
                                        : 'text-neutral-400'
                                    }`}>
                                      {metric.change}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Skills Grid Section */}
          <div className="bento-card p-6 print-card">
            <h2 className="text-sm font-bold text-neutral-900 border-b border-neutral-100 pb-3 flex items-center gap-2">
              <ClipboardList className="w-4 h-4 text-neutral-600" />
              핵심 기획 역량 (Skills)
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
              {skillsData.map((skillCat, idx) => {
                // Highlight full skill category based on active filter
                let highlightCategory = false;
                if (activeFilter === 'research' && skillCat.title.includes('조사')) {
                  highlightCategory = true;
                } else if (activeFilter === 'prioritize' && skillCat.title.includes('기획')) {
                  highlightCategory = true;
                } else if (activeFilter === 'metrics' && skillCat.title.includes('PM')) {
                  highlightCategory = true;
                }

                return (
                  <div 
                    key={idx} 
                    className={`p-4 rounded-2xl border transition-all duration-300 ${
                      highlightCategory 
                        ? 'bg-emerald-50/40 border-emerald-500/20 shadow-2xs'
                        : 'bg-neutral-50 border-neutral-100/60'
                    }`}
                  >
                    <h3 className="text-xs font-bold text-neutral-900 flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${highlightCategory ? 'bg-emerald-500 animate-pulse' : 'bg-neutral-300'}`} />
                      {skillCat.title}
                    </h3>
                    <ul className="mt-3.5 space-y-2">
                      {skillCat.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="text-xs text-neutral-500 flex items-start gap-1.5 leading-relaxed">
                          <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                            highlightCategory ? 'text-emerald-500' : 'text-neutral-300'
                          }`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tools Grid Section */}
          <div className="bento-card p-6 print-card">
            <h2 className="text-sm font-bold text-neutral-900 border-b border-neutral-100 pb-3 flex items-center gap-2">
              <Settings className="w-4 h-4 text-neutral-600" />
              작업 도구 및 자격사항 (Tools &amp; Specs)
            </h2>

            <div className="mt-5 space-y-3">
              {toolsData.map((tool, idx) => {
                // Highlight tools matching specific filters
                let highlightTool = false;
                if (activeFilter === 'research' && (tool.name.includes('Analytics') || tool.name.includes('ChatGPT'))) {
                  highlightTool = true;
                } else if (activeFilter === 'prioritize' && (tool.name.includes('Figma') || tool.name.includes('Notion'))) {
                  highlightTool = true;
                } else if (activeFilter === 'metrics' && tool.name.includes('Analytics')) {
                  highlightTool = true;
                }

                return (
                  <div 
                    key={idx} 
                    className={`flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-2xl border transition-all duration-300 ${
                      highlightTool 
                        ? 'bg-emerald-50/40 border-emerald-500/20 shadow-2xs' 
                        : 'bg-white border-neutral-100'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-mono text-xs font-bold ${
                        highlightTool ? 'bg-emerald-100 text-emerald-800' : 'bg-neutral-100 text-neutral-500'
                      }`}>
                        {tool.name[0]}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-neutral-900">{tool.name}</h4>
                        <p className="text-[10px] text-neutral-455 font-medium">{tool.category}</p>
                      </div>
                    </div>
                    <p className="text-xs text-neutral-500 mt-2 sm:mt-0 sm:max-w-xs text-left sm:text-right leading-relaxed">
                      {tool.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Certifications text (Mandated to be small text at bottom) */}
            <div className="mt-6 pt-5 border-t border-neutral-100">
              <span className="text-[10px] font-bold text-neutral-455 uppercase tracking-wider block mb-2 font-mono">
                자격증 및 라이센스
              </span>
              <div className="flex flex-wrap gap-1.5">
                {certificationsData.map((cert, idx) => (
                  <span 
                    key={idx} 
                    className="text-[10px] font-bold text-neutral-600 bg-neutral-100 px-3 py-1 rounded-full font-sans shadow-2xs"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Details Panel (예시 표기임을 명시) */}
          <div id="contact-section" className="bento-card-dark p-6 text-white flex flex-col justify-between relative overflow-hidden print-card">
            {/* Background design accents */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl" />
            
            <div>
              <span className="text-[9px] font-bold tracking-widest text-emerald-400 uppercase font-mono block">
                Contact &amp; Proposal
              </span>
              <h3 className="text-sm font-bold mt-1 text-white">서달미 서비스 기획자와 함께할 팀을 찾습니다</h3>
              <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed">
                사용자의 작은 피드백도 놓치지 않고, 복잡한 비즈니스 요소를 단순하고 실행 가능한 기획으로 다듬어내겠습니다.
              </p>
            </div>

            {/* Grid of Contact Elements */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5 pt-4 border-t border-neutral-800">
              <div className="flex items-center justify-between bg-neutral-900 p-3 rounded-2xl border border-neutral-800/80 hover:border-neutral-700 transition-colors">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-emerald-400" />
                  <div className="text-left">
                    <span className="text-[9px] font-mono text-neutral-500 block uppercase font-bold">이메일 (제안)</span>
                    <span className="text-xs font-mono font-medium text-neutral-200">{contactData.email}</span>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(contactData.email, 'email')}
                  className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
                  title="Copy email address"
                >
                  {copiedField === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="flex items-center justify-between bg-neutral-900 p-3 rounded-2xl border border-neutral-800/80 hover:border-neutral-700 transition-colors">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <div className="text-left">
                    <span className="text-[9px] font-mono text-neutral-500 block uppercase font-bold">연락처 (인사)</span>
                    <span className="text-xs font-mono font-medium text-neutral-200">{contactData.phone}</span>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(contactData.phone, 'phone')}
                  className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
                  title="Copy phone number"
                >
                  {copiedField === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* Note about placeholders */}
            <p className="text-[10px] text-neutral-500 mt-4 flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
              <span>실제 연락 시에는 위 placeholder 대신 연락처 복사 후 메일로 연락 부탁드립니다.</span>
            </p>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 px-4 text-center mt-12 no-print">
        <p className="text-[11px] text-slate-400 font-mono">
          &copy; {new Date().getFullYear()} Seo Dal-mi. All rights reserved. &middot; Designed for Service Planning Recruiters.
        </p>
      </footer>

    </div>
  );
}
