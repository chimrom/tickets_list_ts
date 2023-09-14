import { FC } from 'react';
import { TicketsListItem } from './components/TicketsListItem';
import { sortedByDate } from '../../utils/sortedByDate';
import {
	TicketInterface,
	CurrencyRateInterface,
} from '../../interfaces/AllInterfaces';

interface TicketsListProps {
	tickets: TicketInterface[];
	selected: string[];
	currencyRate: CurrencyRateInterface;
	currentCurrency: string;
}

export const TicketsList: FC<TicketsListProps> = ({
	tickets,
	selected,
	currencyRate,
	currentCurrency,
}) => {
	const filteredTickets = tickets.filter((el) =>
		selected.includes(el.stops.toString())
	);

	if (filteredTickets.length) {
		return (
			<section className="flex flex-col gap-5 px-2 md:px-0  w-full">
				{filteredTickets.sort(sortedByDate).map((ticket, index) => {
					return (
						<TicketsListItem
							key={index}
							ticket={ticket}
							currencyRate={currencyRate}
							currentCurrency={currentCurrency}
						/>
					);
				})}
			</section>
		);
	} else {
		return <div className="w-full text-center">Ничего не найдено</div>;
	}
};
