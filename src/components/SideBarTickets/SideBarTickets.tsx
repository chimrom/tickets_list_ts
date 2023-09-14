import { FC, Dispatch, SetStateAction } from 'react';
import { CurrencyGroup } from './components/CurrencyGroup';
import { StopsFilter } from './components/StopsFilter';

interface SideBarTicketsProps {
	currency: string[];
	selected: string[];
	stopsCount: string[];
	currentCurrency: string;
	setSelected: Dispatch<SetStateAction<string[]>>;
	setCurrentCurrency: Dispatch<SetStateAction<string>>;
}

export const SideBarTickets: FC<SideBarTicketsProps> = ({
	currency,
	stopsCount,
	setSelected,
	selected,
	currentCurrency,
	setCurrentCurrency,
}) => {
	return (
		<section className="bg-white  text-gray-600 text-sm h-full py-3 ">
			<h3 className="uppercase mb-3 px-4">Валюта</h3>
			<CurrencyGroup
				currency={currency}
				currentCurrency={currentCurrency}
				setCurrentCurrency={setCurrentCurrency}
			/>
			<h3 className="uppercase mb-3  px-4">Количество пересадок</h3>

			<StopsFilter
				stopsCount={stopsCount}
				selected={selected}
				setSelected={setSelected}
			/>
		</section>
	);
};
