import { FC } from 'react';
import { getStopByCount } from '../../../utils/getTextByCount';

export const Stops: FC<{ stops: number }> = ({ stops }) => {
	return (
		<div className="w-2/6 md:px-2 text-center text-gray-400 uppercase text-[10px] sm:text-xs lg:text-sm">
			{stops === 0 ? (
				<h3 className="md:p-2 ">Без пересадок</h3>
			) : (
				<div className="relative ">
					<div className="md:p-2 border-b-2 ">{getStopByCount(stops)}</div>

					<div className="absolute -right-4 -bottom-4">
						<svg
							className="w-8 h-8 p-2 mx-2    fill-current "
							viewBox="0 0 64 64"
							pointerEvents="all"
							aria-hidden="true"
							role="presentation"
						>
							<path d="M43.389 38.269L29.222 61.34a1.152 1.152 0 01-1.064.615H20.99a1.219 1.219 0 01-1.007-.5 1.324 1.324 0 01-.2-1.149L26.2 38.27H11.7l-3.947 6.919a1.209 1.209 0 01-1.092.644H1.285a1.234 1.234 0 01-.895-.392l-.057-.056a1.427 1.427 0 01-.308-1.036L1.789 32 .025 19.656a1.182 1.182 0 01.281-1.009 1.356 1.356 0 01.951-.448l5.4-.027a1.227 1.227 0 01.9.391.85.85 0 01.2.252L11.7 25.73h14.5L19.792 3.7a1.324 1.324 0 01.2-1.149A1.219 1.219 0 0121 2.045h7.168a1.152 1.152 0 011.064.615l14.162 23.071h8.959a17.287 17.287 0 017.839 1.791Q63.777 29.315 64 32q-.224 2.685-3.807 4.478a17.282 17.282 0 01-7.84 1.793h-9.016z"></path>
						</svg>
					</div>
				</div>
			)}
		</div>
	);
};
