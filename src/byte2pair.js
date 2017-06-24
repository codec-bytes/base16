const digits = [
	'0',
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
] ;

const pair2byte = [ ] ;

for ( const first of digits ) {
	for ( const second of digits ) {
		pair2byte.push( first + second ) ;
	}
}

export default pair2byte ;
