import { FC } from 'react';
import { DestinationPlace } from './DestinationPlace';
import { Stops } from './Stops';
import { CarrierLogo } from './CarrierLogo';
import { CurrentPrice } from './CurrentPrice';
import {
	TicketInterface,
	CurrencyRateInterface,
} from '../../../interfaces/AllInterfaces';

interface TicketsListItemProps {
	ticket: TicketInterface;
	currencyRate: CurrencyRateInterface;
	currentCurrency: string;
}

export const TicketsListItem: FC<TicketsListItemProps> = ({
	ticket,
	currencyRate,
	currentCurrency,
}) => {
	return (
		<div className="flex bg-white border w-full  rounded ">
			<div className="flex flex-col justify-between px-1 py-4 sm:px-4  items-center border-r">
				<div className="mb-2 ">
					<CarrierLogo carrier={ticket.carrier} />
				</div>
				<button className="bg-orange-500 text-white text-[10px] sm:text-xs rounded lg:text-base px-4 lg:px-8 py-1 hover:opacity-90 lg:w-4/6">
					<p>Купить за</p>
					<CurrentPrice
						price={ticket.price}
						currencyRate={currencyRate}
						currentCurrency={currentCurrency}
					/>
				</button>
			</div>
			<div className="flex justify-between  py-1 px-1 md:py-4 md:px-6 lg:py-6 lg:px-8 w-full">
				<DestinationPlace
					version="1"
					time={ticket.departure_time}
					destination={ticket.origin}
					name={ticket.origin_name}
					date={ticket.departure_date}
				/>
				<Stops stops={ticket.stops} />

				<DestinationPlace
					version="2"
					time={ticket.arrival_time}
					destination={ticket.destination}
					name={ticket.destination_name}
					date={ticket.arrival_date}
				/>
			</div>
		</div>
	);
};
