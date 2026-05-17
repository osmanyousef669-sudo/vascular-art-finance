"use client";
import { useLang } from "@/contexts/LangContext";
import { TEAM } from "@/lib/data";

export default function ContactPage() {
  const { t } = useLang();

  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="bg-gradient-to-br from-teal-600 to-teal-900 text-white rounded-2xl p-8">
        <h2 className="text-2xl font-extrabold">
          {t("فريق علاقات المستثمرين", "Investor Relations Team")}
        </h2>
        <p className="opacity-75 mt-2 text-sm max-w-xl">
          {t(
            "نحن هنا لمساعدة المستثمرين والمحللين الماليين. يسعدنا الإجابة على استفساراتكم بشكل مهني وسريع.",
            "We are here to assist investors and financial analysts. We are happy to answer your inquiries professionally and promptly."
          )}
        </p>
        <div className="mt-4 flex gap-4 flex-wrap">
          <a
            href="mailto:ir@vascularart.ae"
            className="bg-white text-teal-700 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-teal-50 transition-colors"
          >
            📧 ir@vascularart.ae
          </a>
          <a
            href="tel:+97125550100"
            className="bg-white/20 text-white font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-white/30 transition-colors"
          >
            📞 +971 2 555 0100
          </a>
        </div>
      </div>

      {/* Team Grid */}
      <div>
        <h3 className="text-lg font-bold text-slate-700 mb-4">
          {t("أعضاء الفريق", "Team Members")}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {TEAM.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-400 to-teal-700 text-white font-extrabold text-xl flex items-center justify-center mb-3">
                {member.avatar}
              </div>
              <h4 className="font-bold text-slate-800">
                {t(member.nameAr, member.nameEn)}
              </h4>
              <p className="text-xs text-primary font-semibold mt-1">
                {t(member.titleAr, member.titleEn)}
              </p>
              <div className="mt-4 w-full space-y-2">
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center gap-2 text-xs text-slate-500 hover:text-primary transition-colors"
                >
                  <span>📧</span>
                  <span className="truncate">{member.email}</span>
                </a>
                <a
                  href={`tel:${member.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-xs text-slate-500 hover:text-primary transition-colors"
                >
                  <span>📞</span>
                  <span>{member.phone}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <h3 className="text-base font-bold text-slate-700 mb-5">
          {t("إرسال استفسار", "Send an Inquiry")}
        </h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert(t("تم إرسال رسالتك بنجاح!", "Your message was sent successfully!"));
          }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {[
            { id: "name", labelAr: "الاسم الكامل", labelEn: "Full Name", type: "text" },
            { id: "email", labelAr: "البريد الإلكتروني", labelEn: "Email Address", type: "email" },
            { id: "company", labelAr: "الشركة / المؤسسة", labelEn: "Company / Institution", type: "text" },
            { id: "phone", labelAr: "رقم الهاتف", labelEn: "Phone Number", type: "tel" },
          ].map((field) => (
            <div key={field.id}>
              <label className="block text-sm font-semibold text-slate-600 mb-1.5">
                {t(field.labelAr, field.labelEn)}
              </label>
              <input
                type={field.type}
                required
                className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          ))}
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-slate-600 mb-1.5">
              {t("الموضوع", "Subject")}
            </label>
            <select className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors">
              <option>{t("استفسار مالي عام", "General Financial Inquiry")}</option>
              <option>{t("طلب تقرير", "Report Request")}</option>
              <option>{t("طلب اجتماع", "Meeting Request")}</option>
              <option>{t("شكوى أو اقتراح", "Complaint or Suggestion")}</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-slate-600 mb-1.5">
              {t("الرسالة", "Message")}
            </label>
            <textarea
              required
              rows={4}
              className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
            />
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="bg-primary hover:bg-primary-dark text-white font-bold px-8 py-3 rounded-xl transition-colors"
            >
              {t("إرسال الاستفسار", "Send Inquiry")}
            </button>
          </div>
        </form>
      </div>

      {/* Office Info */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          {
            icon: "🏥",
            titleAr: "المقر الرئيسي",
            titleEn: "Main Office",
            lineAr: "أبوظبي، شارع المطار، برج الصحة",
            lineEn: "Abu Dhabi, Airport Road, Health Tower",
          },
          {
            icon: "🕐",
            titleAr: "ساعات العمل",
            titleEn: "Office Hours",
            lineAr: "الأحد – الخميس: 8ص – 5م",
            lineEn: "Sun – Thu: 8AM – 5PM",
          },
          {
            icon: "📠",
            titleAr: "فاكس",
            titleEn: "Fax",
            lineAr: "+971 2 555 0199",
            lineEn: "+971 2 555 0199",
          },
        ].map((info, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-sm p-5 flex gap-4">
            <div className="text-3xl">{info.icon}</div>
            <div>
              <h4 className="font-bold text-slate-700 text-sm">
                {t(info.titleAr, info.titleEn)}
              </h4>
              <p className="text-xs text-slate-500 mt-1">{t(info.lineAr, info.lineEn)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
