const back = document.getElementById('back');
const wayBackChange = document.getElementById('wayBack');
const inputStartStation = document.getElementById('start-station');
const selectStartStation = document.getElementById('select-station');
const inputArrivalStation = document.getElementById('arrival-station');
const selectArivalStation = document.getElementById('select-arrival-station');


inputStartStation.addEventListener('click', changeValueInput);
selectStartStation.addEventListener('change', selectListStation); 
wayBackChange.addEventListener('click', showBackPanel);
inputArrivalStation.addEventListener('click', changeValueArrivalInput);
selectArivalStation.addEventListener('change', selectListArrivalStation);

const stations = [
	{
		name: 'International Space Station (ISS)',
		region: 'USA',
		planet: 'Earth',
	},
	{
		name: 'Chinese Space Station (CSS)',
		region: 'China',
		planet: 'Earth',
	},
	{
		name: 'Mir Space Station',
		region: 'Russia',
		planet: 'Earth',
	},
	{
		name: 'Salyut Space Station',
		region: 'Russia',
		planet: 'Earth',
	},
	{
		name: 'Soyuz Space Station',
		region: 'Russia',
		planet: 'Earth',
	},
	{
		name: 'Tiangong Space Station',
		region: 'China',
		planet: 'Earth',
	},
	{
		name: 'Skylab',
		region: 'USA',
		planet: 'Earth',
	},
	{
		name: 'SpaceHab',
		region: 'USA',
		planet: 'Earth',
	},
	{
		name: 'Curiosity Rover',
		region: 'Gale Crater',
		planet: 'Mars',
	},

	{
		name: 'Perseverance Rover',
		region: 'Jezero Crater',
		planet: 'Mars',
	},

	{
		name: 'InSight Lander',
		region: 'Elysium Planitia',
		planet: 'Mars',
	},

	{
		name: 'Spirit Rover',
		region: 'Gusev Crater',
		planet: 'Mars',
	},

	{
		name: 'Opportunity Rover',
		region: 'Meridiani Planum',
		planet: 'Mars',
	},
];

for (const el of stations) {
	const option = document.createElement('option');
	option.value = el.name;
	option.textContent = `${el.name},${el.region},${el.planet}`;

	selectStartStation.appendChild(option);
}

for (const el of stations) {
	const option = document.createElement('option');
	option.value = el.name;
	option.textContent = `${el.name},${el.region},${el.planet}`;

	selectArivalStation.appendChild(option);
}

// for date input
const minLimitDate = new Date().toISOString().split('T')[0];
document.getElementById('date').setAttribute('min', minLimitDate);

// max Limit Date
const currentDate = new Date();
const maxDate = new Date();
maxDate.setFullYear(currentDate.getFullYear() + 1);
document.getElementById('date').setAttribute('max', maxDate.toISOString().split('T')[0]);


function showBackPanel() {
	back.style.display === 'flex'
		? (back.style.display = 'none')
		: (back.style.display = 'flex');
};

// choosing of start station
function selectListStation() {
	const selectedValue = selectStartStation.value;
	console.log("selectedValue", selectedValue);
	inputStartStation.value = selectedValue;
	//  close list
	selectStartStation.setAttribute('hidden', 'true');
};

function changeValueInput() {
	const inputValue = inputStartStation.value;
	selectStartStation.value = inputValue;
	selectStartStation.removeAttribute('hidden');
};

// choosing of arrival station
function selectListArrivalStation() {
	const selectedValue = selectArivalStation.value;
	console.log("selectedValue", selectedValue);
	inputArrivalStation.value = selectedValue;
	//  close list
	selectArivalStation.setAttribute('hidden', 'true');
};

function changeValueArrivalInput() {
	const inputValue = inputArrivalStation.value;
	selectArivalStation.value = inputValue;
	selectArivalStation.removeAttribute('hidden');
};