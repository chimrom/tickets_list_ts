import { FC } from 'react';
import { getCurrentDate } from '../../../utils/getCurrectDate';

interface DestinationPlaceProps {
	time: string;
	destination: string;
	name: string;
	date: string;
	version: string;
}

export const DestinationPlace: FC<DestinationPlaceProps> = ({
	time,
	destination,
	name,
	date,
	version,
}) => {
	const currentDate = getCurrentDate(date);
	return (
		<div className="flex flex-col text-gray-600 text-sm md:text-base">
			<span className="text-base sm:text-xl md:text-2xl lg:text-4xl">
				{time}
			</span>
			<div>
				{version === '2' ? (
					<>
						{name},{destination}
					</>
				) : (
					<>
						{destination}, {name}
					</>
				)}
			</div>
			<div className="text-gray-400">
				{currentDate.day} {currentDate.month} {currentDate.year},{' '}
				{currentDate.dayOfWeek}
			</div>
		</div>
	);
};
