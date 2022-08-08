export {};
class CurrencyRate {
  public currencyID: number;
  public currencyCode: string;
  public exchangeRate: number;
  constructor(
    _currencyID: number,
    _currencyCode: string,
    _exchangeRate: number
  ) {
    this.currencyID = _currencyID;
    this.currencyCode = _currencyCode;
    this.exchangeRate = _exchangeRate;
  }
  public getCurrencyCode() {
    let val = "";
  }
}

interface IHashMap {
  [index: string]: CurrencyRate;
}

let usDollar = new CurrencyRate(1, "USD", 1.0);
let euro = new CurrencyRate(2, "EUR", 0.977);
let pound = new CurrencyRate(3, "GBP", 0.822);
let canadianDollar = new CurrencyRate(4, "CAD", 1.285);
let australianDollar = new CurrencyRate(5, "AUD", 1.433);
let yen = new CurrencyRate(6, "JPY", 133.097);
let rupee = new CurrencyRate(7, "INR", 79.355);
let newZealandDollar = new CurrencyRate(8, "NZD", 1.586);
let philippinePeso = new CurrencyRate(9, "PHP", 55.536);
let mexicanPeso = new CurrencyRate(10, "MXN", 20.371);

const currencies: IHashMap = {
  USD: usDollar,
  EUR: euro,
  GBP: pound,
  CAD: canadianDollar,
  AUD: australianDollar,
  JPY: yen,
  INR: rupee,
  NZD: newZealandDollar,
  PHP: philippinePeso,
  MXN: mexicanPeso,
};

function convertCurrency(
  currencyFrom: string,
  currencyTo: string,
  amount: number
): number {
  return (
    amount *
    currencies[currencyFrom].exchangeRate *
    currencies[currencyTo].exchangeRate
  );
}

convertCurrency("USD", "EUR", 20)