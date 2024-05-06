export const Currencies = [
    {value: "USD", label: "$ Dollar", locale: "en-US"},
    {value: "EUR", label: "€ Euro", locale: "en-EU"},
    {value: "GBP", label: "£ Pound Sterling", locale: "en-GB"},
    {value: "JPY", label: "¥ Japanese Yen", locale: "ja-JP"},
    {value: "AUD", label: "A$ Australian Dollar", locale: "en-AU"},
    {value: "CAD", label: "C$ Canadian Dollar", locale: "en-CA"},
    {value: "CHF", label: "Fr Swiss Franc", locale: "fr-CH"},
    {value: "CNY", label: "¥ Chinese Yuan", locale: "zh-CN"},
    {value: "INR", label: "₹ Indian Rupee", locale: "en-IN"},
    {value: "BDT", label: "৳ Bangladeshi Taka", locale: "bn-BD"}
];

export type Currency = (typeof  Currencies)[0]