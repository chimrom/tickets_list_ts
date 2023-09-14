export const dateParted = (date: string) => {
	const dateString = date;
	const dateParts = dateString.split('.');
	const day = parseInt(dateParts[0], 10);
	const month = parseInt(dateParts[1], 10) - 1;
	const yearString = '20' + parseInt(dateParts[2], 10);

	const year = Number(yearString);

	return { year, month, day };
};

export const timeParted = (time: string) => {
	const timeParts = time.split(':');
	const hours = parseInt(timeParts[0], 10);
	const minutes = parseInt(timeParts[1], 10);

	return { hours, minutes };
};

export const getCurrentDate = (date: string) => {
	const days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
	const months = [
		'янв',
		'февр',
		'март',
		'апр',
		'мая',
		'июня',
		'июля',
		'авг',
		'сент',
		'окт',
		'нояб',
		'дек',
	];

	const { year, month, day } = dateParted(date);

	const newDate = new Date(year, month, day);

	const currectDate = {
		day: newDate.getDay(),
		dayOfWeek: days[newDate.getDay()],
		month: months[newDate.getMonth()],
		year: newDate.getFullYear(),
	};

	return currectDate;
};
