import { DateTime } from 'luxon';
import { nextAllowedSendTime, type FollowupType } from './compliance';

export const CHECK_IN_DAYS = 2; // day 2-3 after the visit
export const CHECK_IN_HOUR = 11;
export const REBOOK_HOUR = 10;
export const REBOOK_LEAD_DAYS = 7; // about one week before the rebook date

/**
 * Default send time for each follow-up, before the pro adjusts anything.
 *  - thank_you: now (shifted out of quiet hours)
 *  - check_in: 2 days after the visit, 11am salon time
 *  - rebook: one week before the rebook date, 10am salon time
 * Every time is pushed into the 8am-8pm window and never in the past.
 */
export function defaultSendAt(
  type: FollowupType,
  opts: { visitAt: Date; rebookWeeks: number | null; timezone: string; now: Date },
): Date | null {
  const { visitAt, rebookWeeks, timezone, now } = opts;
  const visitDay = DateTime.fromJSDate(visitAt, { zone: timezone }).startOf('day');
  let at: Date;
  switch (type) {
    case 'thank_you':
      at = now;
      break;
    case 'check_in':
      at = visitDay.plus({ days: CHECK_IN_DAYS }).set({ hour: CHECK_IN_HOUR }).toJSDate();
      break;
    case 'rebook': {
      if (!rebookWeeks) return null;
      at = visitDay
        .plus({ weeks: rebookWeeks })
        .minus({ days: REBOOK_LEAD_DAYS })
        .set({ hour: REBOOK_HOUR })
        .toJSDate();
      break;
    }
  }
  if (at.getTime() < now.getTime()) at = now;
  return nextAllowedSendTime(at, timezone);
}

/** The rebook appointment date itself (for copy like "you're due back around 12 Nov"). */
export function rebookDueDate(visitAt: Date, rebookWeeks: number | null, timezone: string): DateTime | null {
  if (!rebookWeeks) return null;
  return DateTime.fromJSDate(visitAt, { zone: timezone }).startOf('day').plus({ weeks: rebookWeeks });
}
