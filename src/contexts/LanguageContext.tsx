import React, { createContext, useContext, useState } from "react";

type Language = "zh" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  zh: {
    // Navigation
    nav_home: "首頁",
    nav_products: "產品服務", 
    nav_research: "研發實力",
    nav_about: "公司介紹",
    nav_contact: "聯繫我們",
    nav_contact_info: "聯繫諮詢",
    nav_contact_now: "立即聯繫",

    // Hero Section
    hero_badge: "再生醫療領導品牌",
    hero_title_1: "引領",
    hero_title_2: "幹細胞",
    hero_title_3: "與",
    hero_title_4: "外泌體",
    hero_title_5: "研發創新未來",
    hero_subtitle: "大凡健康專注於前沿生物科技研發，與國家級教學醫院合作，致力於為民眾提供更優質、更精準的健康解決方案",
    hero_cta_products: "了解產品服務",
    hero_cta_contact: "聯繫專業團隊",
    hero_feature_1_title: "專業研發",
    hero_feature_1_desc: "尖端生物科技研發能力",
    hero_feature_2_title: "醫院合作",
    hero_feature_2_desc: "與國家級教學醫院合作",
    hero_feature_3_title: "品質保證",
    hero_feature_3_desc: "安全有效的醫療產品",

    // Products Section
    products_badge: "核心產品服務",
    products_title: "專業的再生醫療研發服務",
    products_subtitle: "結合臨床需求與研發能量，打造安全、有效且高品質的醫療產品與服務",
    
    product_1_title: "幹細胞新藥研發",
    product_1_desc: "專注於幹細胞治療技術研發，針對多種疾病開發創新治療方案",
    product_1_feature_1: "間充質幹細胞技術",
    product_1_feature_2: "多潛能幹細胞應用",
    product_1_feature_3: "自體幹細胞治療",
    product_1_feature_4: "臨床試驗管理",
    
    product_2_title: "外泌體新藥研發",
    product_2_desc: "開發外泌體載體技術，提供精準的細胞間通訊治療解決方案",
    product_2_feature_1: "外泌體純化技術",
    product_2_feature_2: "載體工程設計",
    product_2_feature_3: "靶向治療研發",
    product_2_feature_4: "藥物遞送系統",
    
    learn_more: "了解更多",
    
    research_title: "尖端科技研發實力",
    research_1_title: "國際級研發標準",
    research_1_desc: "遵循GMP標準，確保產品品質與安全性",
    research_2_title: "產學合作網絡",
    research_2_desc: "與頂尖大學和醫院建立長期合作關係",
    research_3_title: "臨床轉化應用",
    research_3_desc: "將研發成果轉化為實際臨床應用",

    // About Section
    about_badge: "關於大凡健康",
    about_title: "積極推動再生醫療發展的創新企業",
    about_subtitle: "以「生技創新 × 再生醫療 × 健康未來」為核心，致力於結合臨床需求與研發能量",
    
    stat_capital: "資本額",
    stat_team: "專業團隊",
    stat_location: "營運據點",
    stat_growth: "成長潜力",
    stat_capital_value: "1.97億元",
    stat_team_value: "15人",
    stat_location_value: "台中工業區",
    stat_growth_value: "快速發展",
    
    mission_title: "企業使命",
    mission_desc: "提供專業的健康與醫療諮詢服務，持續深耕尖端生物科技研發，為民眾帶來更優質、更精準的健康解決方案。",
    
    partnership_title: "核心合作",
    partnership_desc: "長期與國家級教學醫院及知名大學建立計畫性產學合作與專業交流，掌握全球最新醫學資訊與技術趨勢，並將成果轉化為臨床可用的高端醫療產品。",
    
    values_title: "經營理念",
    values_subtitle: "我們堅持五大核心價值，打造卓越的生技醫療企業文化",
    
    value_1_title: "品質至上",
    value_1_desc: "專業、安全、穩定、有效",
    value_2_title: "忠誠信任",
    value_2_desc: "團隊合作、核心價值、彼此信賴",
    value_3_title: "高效簡化",
    value_3_desc: "精實管理、扁平組織、資源優化",
    value_4_title: "共享共榮",
    value_4_desc: "互利共贏、尊重包容、團隊共好",
    value_5_title: "透明公開",
    value_5_desc: "資訊公開、信任溝通、公平機制",

    // Contact Section
    contact_badge: "聯繫我們",
    contact_title: "開啟合作可能性",
    contact_subtitle: "歡迎與我們聯繫，討論再生醫療領域的合作機會與專業諮詢",
    
    contact_info_title: "聯繫資訊",
    contact_address_title: "公司地址",
    contact_address: "台中市西屯區工業區七路2-1號",
    contact_address_note: "(台中工業區)",
    contact_person_title: "聯繫人",
    contact_person: "鍾小姐",
    contact_person_note: "專業諮詢服務",
    contact_industry_title: "產業類別",
    contact_industry: "生化科技研發業",
    contact_industry_note: "生物技術研究",
    
    why_choose_title: "為什麼選擇大凡健康？",
    why_choose_1: "專業的再生醫療研發團隊",
    why_choose_2: "與國家級醫院產學合作",
    why_choose_3: "符合國際標準的品質管理",
    why_choose_4: "創新的幹細胞外泌體技術",
    
    form_title: "聯繫表單",
    form_name: "姓名",
    form_company: "公司/機構",
    form_email: "電子信箱",
    form_phone: "聯繫電話",
    form_subject: "諮詢主題",
    form_message: "詳細訊息",
    form_placeholder_name: "請輸入您的姓名",
    form_placeholder_company: "請輸入公司或機構名稱",
    form_placeholder_email: "請輸入電子信箱",
    form_placeholder_phone: "請輸入聯繫電話",
    form_placeholder_subject: "請輸入諮詢主題",
    form_placeholder_message: "請詳細描述您的需求或問題...",
    form_response_time: "我們將在1-2個工作天內回覆您",
    form_submit: "發送訊息",

    // Footer
    footer_company_desc: "專注於前沿科技的應用，擁有強勁的成長潛力。以「生技創新 × 再生醫療 × 健康未來」為核心，致力於結合臨床需求與研發能量。",
    footer_contact_person: "聯繫人：鍾小姐",
    footer_quick_links: "快速連結",
    footer_services: "主要服務",
    footer_service_1: "幹細胞新藥研發",
    footer_service_2: "外泌體新藥研發",
    footer_service_3: "再生醫療技術",
    footer_service_4: "醫療諮詢服務",
    footer_service_5: "產學合作",
    footer_industry_label: "產業類別：",
    footer_industry_value: "生化科技研發業",
    footer_capital_label: "資本額：",
    footer_capital_value: "新台幣1億9660萬元",
    footer_employees_label: "員工人數：",
    footer_employees_value: "15人",
    footer_copyright: "© 2024 大凡健康股份有限公司 DaFan Health Co., Ltd. 版權所有",
    footer_tagline: "專注於幹細胞與外泌體新藥研發 | 再生醫療創新領導品牌"
  },
  
  en: {
    // Navigation
    nav_home: "Home",
    nav_products: "Products & Services",
    nav_research: "R&D Capabilities", 
    nav_about: "About Us",
    nav_contact: "Contact",
    nav_contact_info: "Contact Us",
    nav_contact_now: "Contact Now",

    // Hero Section
    hero_badge: "Leading Regenerative Medicine Brand",
    hero_title_1: "Leading",
    hero_title_2: "Stem Cell",
    hero_title_3: "&",
    hero_title_4: "Exosome",
    hero_title_5: "R&D Innovation",
    hero_subtitle: "DaFan Health focuses on cutting-edge biotechnology R&D, collaborating with national teaching hospitals to provide superior and precise healthcare solutions",
    hero_cta_products: "Explore Our Services",
    hero_cta_contact: "Contact Our Team",
    hero_feature_1_title: "Professional R&D",
    hero_feature_1_desc: "Advanced biotechnology R&D capabilities",
    hero_feature_2_title: "Hospital Partnership",
    hero_feature_2_desc: "Collaboration with national teaching hospitals",
    hero_feature_3_title: "Quality Assurance",
    hero_feature_3_desc: "Safe and effective medical products",

    // Products Section
    products_badge: "Core Products & Services",
    products_title: "Professional Regenerative Medicine R&D Services",
    products_subtitle: "Integrating clinical needs with R&D capabilities to create safe, effective, and high-quality medical products and services",
    
    product_1_title: "Stem Cell Drug Development",
    product_1_desc: "Focused on stem cell therapy technology development, creating innovative treatment solutions for various diseases",
    product_1_feature_1: "Mesenchymal stem cell technology",
    product_1_feature_2: "Pluripotent stem cell applications",
    product_1_feature_3: "Autologous stem cell therapy",
    product_1_feature_4: "Clinical trial management",
    
    product_2_title: "Exosome Drug Development",
    product_2_desc: "Developing exosome carrier technology to provide precise cell-to-cell communication therapeutic solutions",
    product_2_feature_1: "Exosome purification technology",
    product_2_feature_2: "Carrier engineering design",
    product_2_feature_3: "Targeted therapy development",
    product_2_feature_4: "Drug delivery systems",
    
    learn_more: "Learn More",
    
    research_title: "Advanced R&D Capabilities",
    research_1_title: "International R&D Standards",
    research_1_desc: "Following GMP standards to ensure product quality and safety",
    research_2_title: "Industry-Academia Network",
    research_2_desc: "Long-term partnerships with top universities and hospitals",
    research_3_title: "Clinical Translation",
    research_3_desc: "Translating R&D results into practical clinical applications",

    // About Section
    about_badge: "About DaFan Health",
    about_title: "Innovative Enterprise Actively Promoting Regenerative Medicine",
    about_subtitle: "With 'Biotech Innovation × Regenerative Medicine × Health Future' as our core, committed to integrating clinical needs with R&D capabilities",
    
    stat_capital: "Capital",
    stat_team: "Professional Team",
    stat_location: "Operation Base",
    stat_growth: "Growth Potential",
    stat_capital_value: "196.6M TWD",
    stat_team_value: "15 People",
    stat_location_value: "Taichung Industrial Park",
    stat_growth_value: "Rapid Growth",
    
    mission_title: "Our Mission",
    mission_desc: "To provide professional health and medical consulting services while continuously advancing biotechnology research, bringing the public superior and more precise healthcare solutions.",
    
    partnership_title: "Core Partnerships",
    partnership_desc: "We have established long-term, strategic industry-academia collaborations and professional exchanges with national teaching hospitals and renowned universities. These partnerships enable us to stay at the forefront of global medical knowledge and technology trends, transforming advancements into clinically applicable, high-end medical products.",
    
    values_title: "Business Philosophy",
    values_subtitle: "We uphold five core values to build an excellent biotech medical corporate culture",
    
    value_1_title: "Quality First",
    value_1_desc: "Professional, Safe, Stable, and Effective",
    value_2_title: "Loyalty & Trust",
    value_2_desc: "Teamwork, Core Values, Mutual Trust",
    value_3_title: "Efficiency & Simplification",
    value_3_desc: "Lean Management, Flat Organization, Resource Optimization",
    value_4_title: "Shared Growth & Prosperity", 
    value_4_desc: "Mutual Benefit, Respect & Inclusion, Team Success",
    value_5_title: "Transparency & Openness",
    value_5_desc: "Information Transparency, Trustful Communication, Fair Mechanisms",

    // Contact Section
    contact_badge: "Contact Us",
    contact_title: "Open Collaboration Possibilities",
    contact_subtitle: "Welcome to contact us to discuss cooperation opportunities and professional consulting in regenerative medicine",
    
    contact_info_title: "Contact Information",
    contact_address_title: "Company Address",
    contact_address: "No. 2-1, 7th Rd., Industrial Park, Xitun Dist., Taichung City",
    contact_address_note: "(Taichung Industrial Park)",
    contact_person_title: "Contact Person",
    contact_person: "Ms. Chung",
    contact_person_note: "Professional consulting services",
    contact_industry_title: "Industry Category",
    contact_industry: "Biochemical Technology R&D",
    contact_industry_note: "Biotechnology Research",
    
    why_choose_title: "Why Choose DaFan Health?",
    why_choose_1: "Professional regenerative medicine R&D team",
    why_choose_2: "Industry-academia collaboration with national hospitals",
    why_choose_3: "International standard quality management",
    why_choose_4: "Innovative stem cell and exosome technology",
    
    form_title: "Contact Form",
    form_name: "Name",
    form_company: "Company/Organization",
    form_email: "Email",
    form_phone: "Phone",
    form_subject: "Subject",
    form_message: "Message",
    form_placeholder_name: "Please enter your name",
    form_placeholder_company: "Please enter company or organization name",
    form_placeholder_email: "Please enter your email",
    form_placeholder_phone: "Please enter your phone number",
    form_placeholder_subject: "Please enter inquiry subject",
    form_placeholder_message: "Please describe your needs or questions in detail...",
    form_response_time: "We will respond within 1-2 business days",
    form_submit: "Send Message",

    // Footer
    footer_company_desc: "Dedicated to applying cutting-edge technologies with strong growth potential. With 'Biotech Innovation × Regenerative Medicine × Health Future' as our core, committed to integrating clinical needs with R&D capabilities.",
    footer_contact_person: "Contact: Ms. Chung",
    footer_quick_links: "Quick Links",
    footer_services: "Main Services",
    footer_service_1: "Stem Cell Drug Development",
    footer_service_2: "Exosome Drug Development", 
    footer_service_3: "Regenerative Medicine Technology",
    footer_service_4: "Medical Consulting Services",
    footer_service_5: "Industry-Academia Collaboration",
    footer_industry_label: "Industry: ",
    footer_industry_value: "Biochemical Technology R&D",
    footer_capital_label: "Capital: ",
    footer_capital_value: "NT$196.6 Million",
    footer_employees_label: "Employees: ",
    footer_employees_value: "15 People",
    footer_copyright: "© 2024 DaFan Health Co., Ltd. All rights reserved",
    footer_tagline: "Focused on Stem Cell & Exosome Drug Development | Leading Innovation in Regenerative Medicine"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("zh");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};