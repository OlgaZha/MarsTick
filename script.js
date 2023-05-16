const back = document.querySelector('.back');
const wayBackChange = document.getElementById('wayBack');
const inputFormElement = document.getElementById('start-station');
const selectStation = document.getElementById('selectStation');

inputFormElement.addEventListener('input', function () {
	const inputValue = inputFormElement.value;
	selectStation.value = inputValue;
})

selectStation.addEventListener('change', function () {
	const selectedValue = selectStation.value;
	inputFormElement.value = selectedValue;
})

// console.log("selectStation ", selectStation);

// console.log('Input:', inputElement.value);

// show back way
wayBackChange.addEventListener('click', showBaclPanel);

// listening input value
// inputFromElement.addEventListener('keyup', function (event) {
// 	const inputValue = event.target.value;
//   });

// select station
// selectStation.addEventListener('change', function (event) {
// 	console.log('Selected option:', event.target.value);
// 	inputFromElement.value = event.target.value;
//   });

const stations = [
	{
		name: 'International Space Station (ISS)',
		region: 'USA',
		planet: "Earth"
	},
	{
		name: 'Chinese Space Station (CSS)',
		region: 'China',
		planet: "Earth"
	},
	{
		name: 'Mir Space Station',
		region: 'Russia',
		planet: "Earth"
	},
	{
		name: 'Salyut Space Station',
		region: 'Russia',
		planet: "Earth"
	},
	{
		name: 'Soyuz Space Station',
		region: 'Russia',
		planet: "Earth"
	},
	{
		name: 'Tiangong Space Station',
		region: 'China',
		planet: "Earth"
	},
	{
		name: 'Skylab',
		region: 'USA',
		planet: "Earth"
	},
	{
		name: 'SpaceHab',
		region: 'USA',
		planet: "Earth"
	},
];

const stationsMars =[
	{
		name: "Curiosity Rover",
		region: "Gale Crater",
		planet: "Mars"
		},
		
		{
		name: "Perseverance Rover",
		region: "Jezero Crater",
		planet: "Mars"
		},
		
		{
		name: "InSight Lander",
		region: "Elysium Planitia",
		planet: "Mars"
		},
		
		{
		name: "Spirit Rover",
		region: "Gusev Crater",
		planet: "Mars"
		},
		
		{
		name: "Opportunity Rover",
		region: "Meridiani Planum",
		planet: "Mars"
		}
]


// for date input
const today = new Date().toISOString().split('T')[0];
document.getElementById('date').setAttribute('min', today)

function showBaclPanel(){
	// console.log("change")
	back.style.display === 'flex'
		? (back.style.display = 'none')
		: (back.style.display = 'flex');
};

// function selecStation(str) {
	
// }


// function showHint(str) {
// 	var hint = '';
// 	if (str.length > 0) {
// 		for (var i = 0; i < stations.length; i++) {
// 			if (stations[i].name.toLowerCase().startsWith(str.toLowerCase())) {
// 				hint +=
// 					'<option value="' +
// 					stations[i].name +
// 					'">' +
// 					stations[i].name +
// 					'</option>';
// 			}
// 		}
// 	}
// 	var hintList = document.getElementById('txtHint');
// 	if (hint.length > 0) {
// 		hintList.innerHTML = hint;
// 		hintList.style.display = 'block';
// 	} else {
// 		hintList.innerHTML = '';
// 		hintList.style.display = 'none';
// 	}
// };

