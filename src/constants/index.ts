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

export const bankTransferNavItems: IHeaderMenuItems[] = [
  { href: '/bank-transfer/iban-inquiry', label: 'استعلام شبا' },
  { href: '/bank-transfer/card-inquiry', label: 'استعلام کارت' },
  { href: '/bank-transfer/card-to-sheba', label: 'کارت به شبا' },
  { href: '/bank-transfer/account-to-sheba', label: 'حساب به شبا' },
  { href: '/bank-transfer/card-to-account', label: 'کارت به حساب' },
];
