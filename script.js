const back = document.querySelector('.back');
const wayBackChange = document.getElementById('wayBack');


wayBackChange.addEventListener('click', showBaclPanel);

console.log('back', back);

const stations = [
	{
		name: 'International Space Station (ISS)',
		country: 'USA',
	},
	{
		name: 'Chinese Space Station (CSS)',
		country: 'China',
	},
	{
		name: 'Mir Space Station',
		country: 'Russia',
	},
	{
		name: 'Salyut Space Station',
		country: 'Russia',
	},
	{
		name: 'Soyuz Space Station',
		country: 'Russia',
	},
	{
		name: 'Tiangong Space Station',
		country: 'China',
	},
	{
		name: 'Skylab',
		country: 'USA',
	},
	{
		name: 'SpaceHab',
		country: 'USA',
	},
];



// for date input
const today = new Date().toISOString().split('T')[0];
document.getElementById('date').setAttribute('min', today);

function showBaclPanel(){
	// console.log("change")
	back.style.display === 'flex'
		? (back.style.display = 'none')
		: (back.style.display = 'flex');
};

function selecStation(str) {
	
}
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

