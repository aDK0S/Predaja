// ===== TU UREJAŠ SEZNAME (navaden urejevalnik besedila je dovolj) =====
// Vsak vnos je v narekovajih in se konča z vejico. Primeri spodaj so samo vzorci.
const CONFIG = {
  naziv: "Predaja vozila",
  SHEET_URL: "",          // URL iz Apps Scripta (glej Code.gs). Prazno = shranjuje le v telefon.
  KLJUC: "spremeni-me",   // mora biti enak kot KLJUC v Code.gs (osnovna zaščita)
  vozila: ["NRV KK-EL-207", "RV-02", "RV-03"],
  zaposleni: ["ADIS SARAMATI", "Ime Priimek 2", "Ime Priimek 3"],
  izmene: ["Dnevna 07–19", "Nočna 19–07", "24 ur"],
  gorivo: ["Prazno", "1/4", "1/2", "3/4", "Polno"],
  kisik: ["Glavna jeklenka", "Prenosna jeklenka"],   // vnos v barih
  cistoca: ["Očiščeno", "Dezinficirano", "Ni očiščeno"],
  zdravila: ["Adrenalin", "Amiodaron", "Atropin", "Fiziološka raztopina 0,9 %"],
  oprema: ["LIFEPAK 15", "Weinmann Standard", "Aspirator", "Nosila", "Kisikova maska"],
  stanjaZdravila: ["V redu", "Manjka", "Poteklo"],
  stanjaOprema: ["V redu", "Manjka", "Okvara"]
};
