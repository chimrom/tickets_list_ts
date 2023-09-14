import { FC, Dispatch, SetStateAction, MouseEvent } from 'react';
import { getStopByCount } from '../../../utils/getTextByCount';

interface StopsFilterProps {
	selected: string[];
	stopsCount: string[];
	setSelected: Dispatch<SetStateAction<string[]>>;
}
export const StopsFilter: FC<StopsFilterProps> = ({
	stopsCount,
	setSelected,
	selected,
}) => {
	const handleSelectedChange = (event: MouseEvent<HTMLLabelElement>) => {
		event.stopPropagation();
		const { id } = event.target as HTMLLabelElement;
		if (!id) return;
		const index = selected?.findIndex((el) => el === id);
		if (index === -1) {
			setSelected((prevState) => [...prevState, id]);
		} else {
			setSelected(selected?.filter((skill) => skill !== id));
		}
	};

	const handleAllSelected = () => {
		setSelected(stopsCount);
	};
	const handleOnlyOneStop = (stop: string) => {
		setSelected([stop]);
	};

	const isActiveCheckbox = Boolean(selected.length === stopsCount.length);

	return (
		<div>
			<div className="p-2">
				<label className="relative ">
					<input
						type="checkbox"
						className="hidden"
						name="все"
						checked={Boolean(selected.length === stopsCount.length)}
						onChange={handleAllSelected}
					/>
					<span
						className={`absolute top-0 left-0 w-4 h-4 bg-white border  rounded ${
							isActiveCheckbox ? 'border-blue-500' : 'border-gray-300'
						}`}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							className={`absolute w-3 h-3 top-0.5 left-0.5 ${
								isActiveCheckbox ? 'stroke-blue-500' : 'hidden'
							}`}
						>
							<path
								fillRule="evenodd"
								d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
								clipRule="evenodd"
							/>
						</svg>
					</span>
					<p className="ml-6">Все</p>
				</label>
			</div>
			<ul>
				{stopsCount?.map((stop) => {
					return (
						<li
							key={stop}
							className=" p-2 text-white hover:text-blue-500 hover:bg-blue-100"
						>
							<button
								className="flex justify-between items-center w-full"
								onClick={() => handleOnlyOneStop(stop)}
								type="button"
							>
								<label
									className="relative cursor-pointer text-blue-500"
									onClick={(event) => handleSelectedChange(event)}
								>
									<input
										className="hidden"
										id={stop}
										type="checkbox"
										name={stop}
										// checked={Boolean(selected?.find((el) => el === stop))}
										// onChange={}
									/>
									<span
										className={`absolute top-0 left-0 w-4 h-4 bg-white border  rounded ${
											selected?.find((el) => el === stop)
												? 'border-blue-500'
												: 'border-gray-300'
										}`}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											className={`absolute w-3 h-3 top-0.5 left-0.5 ${
												selected?.find((el) => el === stop)
													? 'stroke-blue-500'
													: 'hidden'
											}`}
										>
											<path
												fillRule="evenodd"
												d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
												clipRule="evenodd"
											/>
										</svg>
									</span>

									<p className="ml-6 text-gray-600">
										{getStopByCount(Number(stop))}
									</p>
								</label>
								<p className="uppercase text-xs">Только</p>
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
