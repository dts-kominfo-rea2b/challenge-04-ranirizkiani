// ! JANGAN DIMODIFIKASI
const dates = [
  "2019-01-02", // 1546387200 (epoch time, dalam detik)
  "2022-05-06 00:00:00 UTC-2", // 1651802400 (epoch time, dalam detik)
  "2021-03-04 07:00:00 UTC", // 1614841200 (epoch time, dalam detik)
  "2021-04-05 00:00:00 UTC+2", // 1617573600 (epoch time, dalam detik)
  "2020-02-03 UTC+7", // 1580662800 (epoch time, dalam detik)
];


let arr = [4, 5, 6];


// TODO: Buatlah fungsi createDate
function createDate(arrayDate, arrayPosition) {
  if (isNaN(arrayPosition)) {
    let arr = [];
    for (const date of arrayDate) {
      let epochTime = Date.parse(date) / 1000;
      arr.push(epochTime);
    }
    arr.sort(); // [1000, 2000, 3000]
    return arr.join('-'); // 1000-2000-3000
  } else {
    let date = arrayDate[arrayPosition]; // "2022-05-06 00:00:00 UTC-2"
    let epochTime = Date.parse(date) / 1000;
    return epochTime.toString();
  }
}
// ! JANGAN DIMODIFIKASI
(() => {
  // IIFE

  // '1546387200-1580662800-1614841200-1617573600-1651802400' (dalam string)
  console.log(createDate?.(dates));

  // '1614841200' (dalam string)
  console.log(createDate?.(dates, 2));
})();

module.exports = {
  dates,
  createDate,
};
