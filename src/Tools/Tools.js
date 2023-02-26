const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "EUR",
  style: "currency",
});

export const FormatCurrency = (number) => {
  return CURRENCY_FORMATTER.format(number);
};

export const goToTopOfPage = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
