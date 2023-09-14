import { FC } from 'react';
import { CurrencyRateInterface } from '../../../interfaces/AllInterfaces';
interface CurrentPriceProps {
	price: number;
	currencyRate: CurrencyRateInterface;
	currentCurrency: string;
}
export const CurrentPrice: FC<CurrentPriceProps> = ({
	price,
	currencyRate,
	currentCurrency,
}) => {
	let simbol = '₽';
	let currentPrice = price;
	switch (currentCurrency) {
		case 'USD':
			simbol = '$';
			currentPrice = Number((currentPrice / currencyRate.USD).toFixed(1));
			break;

		case 'EUR':
			simbol = '€';
			currentPrice = Number((currentPrice / currencyRate.EUR).toFixed(1));
			break;

		default:
			simbol = '₽';
			currentPrice = currentPrice / 1;
			break;
	}

	return (
		<>
			{currentPrice.toLocaleString('ru-RU')} {simbol}
		</>
	);
};
