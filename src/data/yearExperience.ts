export function getYearExperience(): string {
  // Define work periods as arrays of [startDate, endDate] tuples
  // Using Date objects directly for clarity
  const workPeriods: [Date, Date][] = [
    [new Date("2020-01-06"), new Date("2020-10-02")],
    [new Date("2022-05-05"), new Date("2024-07-05")],
    [new Date("2024-12-02"), new Date()] // Current ongoing role
  ];
  
  // Constants for time calculations
  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  const DAYS_PER_YEAR = 365;
  
  // Calculate total experience in years
  const totalExperienceInYears = workPeriods.reduce((totalYears, [start, end]) => {
    const periodInDays = (end.getTime() - start.getTime()) / MILLISECONDS_PER_DAY;
    return totalYears + (periodInDays / DAYS_PER_YEAR);
  }, 0);
  
  const fullYears = Math.floor(totalExperienceInYears);
  
  // Return with "+" if there are partial years
  return fullYears < totalExperienceInYears ? `${fullYears}+` : `${fullYears}`;
}