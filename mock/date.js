let years = [];
let months = [];
let days = [];
for (let i = 1970; i < 2005; i++) {
    let year = {
        en: i,
        cn: i
    };
    years.push(year);
}
for (let i = 0; i < 12; i++) {
    let month = {
        en: i,
        cn: i
    };
    months.push(month);
}
for (let i = 0; i < 31; i++) {
    let day = {
        en: i,
        cn: i
    };
    days.push(day);
}
export const mockMonths: any[] = months;
export const mockYears: any[] = years;
export const mockDays: any[] = days;