// 1) Nova Google Preglednica → Razširitve → Apps Script → prilepi to kodo.
// 2) Uvedi → Nova uvedba → Spletna aplikacija → Izvajaj kot: jaz, Dostop: Kdorkoli.
// 3) URL spletne aplikacije prilepi v config.js (SHEET_URL).
const KLJUC = 'spremeni-me';   // enak kot v config.js
const LIST = 'Predaje';
const GLAVA = ['Čas','Vozilo','Predal','Prevzel','Izmena','Km','Gorivo','Kisik','Zdravila','Oprema','Čistoča','Poškodbe','Posebnosti','ID'];

function list_() {
  const ss = SpreadsheetApp.getActive();
  let sh = ss.getSheetByName(LIST);
  if (!sh) { sh = ss.insertSheet(LIST); sh.appendRow(GLAVA); sh.setFrozenRows(1); }
  return sh;
}

function doPost(e) {
  const o = JSON.parse(e.postData.contents);
  if (o.k !== KLJUC) return ContentService.createTextOutput('no');
  const sh = list_();
  if (sh.createTextFinder(o.id).matchEntireCell(true).findNext()) return ContentService.createTextOutput('dup');
  sh.appendRow([o.cas, o.vozilo, o.predal, o.prevzel, o.izmena, o.km, o.gorivo, o.kisik, o.zdravila, o.oprema, o.cistoca, o.poskodbe, o.posebnosti, o.id]);
  return ContentService.createTextOutput('ok');
}

function doGet(e) {
  let out = {};
  if (e.parameter.k === KLJUC) {
    const r = list_().getDataRange().getDisplayValues();
    for (let i = r.length - 1; i > 0; i--) if (r[i][1] === e.parameter.v) {
      out = {cas: r[i][0], prevzel: r[i][3], km: r[i][5], gorivo: r[i][6], posebnosti: r[i][12]};
      break;
    }
  }
  return ContentService.createTextOutput(JSON.stringify(out)).setMimeType(ContentService.MimeType.JSON);
}
