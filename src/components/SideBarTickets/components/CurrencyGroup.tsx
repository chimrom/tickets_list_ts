import { FC, Dispatch, SetStateAction, MouseEvent } from 'react';

interface CurrencyGroupProps {
	currency: string[];
	currentCurrency: string;
	setCurrentCurrency: Dispatch<SetStateAction<string>>;
}

export const CurrencyGroup: FC<CurrencyGroupProps> = ({
	currency,
	currentCurrency,
	setCurrentCurrency,
}) => {
	const handleChangeCurrency = (event: MouseEvent<HTMLButtonElement>) => {
		const { id } = event.target as HTMLButtonElement;
		setCurrentCurrency(id);
	};

	return (
		<div className="inline-flex rounded-md  mb-6 p-4" role="group">
			{currency.map((item) => {
				return (
					<button
						type="button"
						key={item}
						id={item}
						onClick={(event) => handleChangeCurrency(event)}
						className={`px-4 py-2 text-sm font-medium   border  rounded-md hover:bg-blue-50 hover:text-blue-600 hover:border-blue-500 focus:z-10  focus:bg-blue-500 focus:text-white  ${
							currentCurrency === item
								? 'bg-blue-500 text-white'
								: 'bg-white text-blue-400'
						} `}
					>
						{item}
					</button>
				);
			})}
		</div>
	);
};
