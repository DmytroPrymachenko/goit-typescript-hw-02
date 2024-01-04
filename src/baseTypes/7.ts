/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DaysWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}
function todayWeek(day: DaysWeek): boolean {
  if (day === DaysWeek.Saturday || day === DaysWeek.Sunday) {
    return true
  }
  else {
    return false  }
}



