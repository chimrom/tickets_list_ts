import { dateParted, timeParted } from './getCurrectDate';
import { TicketInterface } from '../interfaces/AllInterfaces';

export const sortedByDate = (a: TicketInterface, b: TicketInterface) => {
	const oneTime = timeParted(a.departure_time);
	const twoTime = timeParted(b.departure_time);
	const oneDate = dateParted(a.departure_date);
	const twoDate = dateParted(b.departure_date);
	const currentOneDate = new Date(
		oneDate.year,
		oneDate.month,
		oneDate.day,
		oneTime.hours,
		oneTime.minutes
	);
	const currentTwoDate = new Date(
		twoDate.year,
		twoDate.month,
		twoDate.day,
		twoTime.hours,
		twoTime.minutes
	);

	if (currentOneDate < currentTwoDate) {
		return -1;
	}
	if (currentOneDate > currentTwoDate) {
		return 1;
	}
	return 0;
};
