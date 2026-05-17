"use client";
import { useState } from "react";
import { TRANSACTIONS, type Transaction } from "@/lib/data";
import { useLang } from "@/contexts/LangContext";

interface Props {
  limit?: number;
  showFilters?: boolean;
}

export default function TransactionTable({ limit, showFilters = false }: Props) {
  const { t } = useLang();
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<"" | "in" | "out">("");

  const filtered = TRANSACTIONS.filter((tx) => {
    const matchSearch =
      tx.descAr.includes(search) ||
      tx.descEn.toLowerCase().includes(search.toLowerCase()) ||
      tx.party.toLowerCase().includes(search.toLowerCase());
    const matchType =
      typeFilter === ""
        ? true
        : typeFilter === "in"
        ? tx.in > 0
        : tx.out > 0;
    return matchSearch && matchType;
  });

  const rows = limit ? filtered.slice(0, limit) : filtered;

  const totalIn = rows.reduce((s, r) => s + r.in, 0);
  const totalOut = rows.reduce((s, r) => s + r.out, 0);

  return (
    <div>
      {showFilters && (
        <div className="flex gap-3 mb-4 flex-wrap">
          <input
            type="text"
            placeholder={t("بحث...", "Search...")}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 min-w-40 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary"
          />
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value as "" | "in" | "out")}
            className="border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary"
          >
            <option value="">{t("الكل", "All")}</option>
            <option value="in">{t("وارد فقط", "Income Only")}</option>
            <option value="out">{t("صادر فقط", "Expense Only")}</option>
          </select>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50">
              {[
                [t("التاريخ", "Date"), "w-24"],
                [t("البيان", "Description"), ""],
                [t("البند", "Category"), ""],
                [t("وارد", "In"), "w-28 text-success"],
                [t("صادر", "Out"), "w-28 text-danger"],
                [t("إلى/من", "Party"), ""],
              ].map(([label, cls]) => (
                <th
                  key={label}
                  className={`px-4 py-3 text-start text-xs font-bold text-slate-500 uppercase tracking-wide border-b border-slate-200 ${cls}`}
                >
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((tx) => (
              <tr key={tx.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                <td className="px-4 py-3 text-slate-500 whitespace-nowrap">{tx.date}</td>
                <td className="px-4 py-3 font-medium">{t(tx.descAr, tx.descEn)}</td>
                <td className="px-4 py-3">
                  <span className="bg-teal-50 text-teal-700 text-xs font-semibold px-2 py-0.5 rounded-lg">
                    {t(tx.categoryAr, tx.categoryEn)}
                  </span>
                </td>
                <td className="px-4 py-3 font-bold font-mono text-success">
                  {tx.in > 0 ? `${tx.in.toLocaleString()} AED` : "—"}
                </td>
                <td className="px-4 py-3 font-bold font-mono text-danger">
                  {tx.out > 0 ? `${tx.out.toLocaleString()} AED` : "—"}
                </td>
                <td className="px-4 py-3 text-slate-500 text-xs">{tx.party}</td>
              </tr>
            ))}
          </tbody>
          {showFilters && (
            <tfoot>
              <tr className="bg-slate-100 font-bold">
                <td className="px-4 py-3" colSpan={3}>
                  {t("المجموع", "Total")}
                </td>
                <td className="px-4 py-3 font-mono text-success">
                  {totalIn.toLocaleString()} AED
                </td>
                <td className="px-4 py-3 font-mono text-danger">
                  {totalOut.toLocaleString()} AED
                </td>
                <td />
              </tr>
            </tfoot>
          )}
        </table>
      </div>

      {rows.length === 0 && (
        <p className="text-center text-slate-400 py-8">
          {t("لا توجد نتائج", "No results found")}
        </p>
      )}
    </div>
  );
}
