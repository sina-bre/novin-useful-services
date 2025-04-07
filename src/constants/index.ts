export interface IHeaderMenuItems {
  label: string;
  href: string;
}

export const headerMenuItems: IHeaderMenuItems[] = [
  { label: 'خدمات', href: '/services' },
  { label: 'تاریخچه استعلام', href: '/history' },
  { label: 'نسخه شرکتی', href: '/enterprise' },
  { label: 'درباره ما', href: '/about' },
];
export const headerFeatures: string[] = [
  'کیفیت بالا',
  'کارمزد مناسب',
  'پشتیبانی 24 ساعته',
];
