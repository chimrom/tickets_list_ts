import { TicketInterface } from '../interfaces/AllInterfaces';

export const getStopsCount = (data: TicketInterface[]) => {
	const count = data.map((ticket) => {
		return ticket.stops;
	});
	const sortedCount = count.sort(function (a, b) {
		return a - b;
	});

	const set = new Set(sortedCount);
	const arrayString = Array.from(set);
	return arrayString.map((el) => el.toString());
};
