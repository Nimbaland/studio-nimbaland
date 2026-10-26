import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getT } from "@/i18n/t";
import { CartView } from "@/components/shop";
import { PageHead } from "@/components/ui";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return { title: getT(locale)("cart.h1"), robots: { index: false } };
}

export default async function Cart({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = getT(locale);
  return (
    <>
      <PageHead label={t("cart.label")} title={t("cart.h1")} />
      <CartView locale={locale} />
    </>
  );
}
