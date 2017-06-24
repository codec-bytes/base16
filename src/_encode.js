import { iter , next , StopIteration } from '@aureooms/js-itertools' ;

import pair2byte from './pair2byte' ;
import Base16EncodeError from './Base16EncodeError' ;

export default function* _encode ( string , options = null ) {

	let start = 0 ;

	const it = iter(string) ;

	while ( true ) {

		let first, second;

		try {
			first = next( it ) ;
		}
		catch ( e ) {
			if ( e instanceof StopIteration ) break ;
			else throw e ;
		}

		try {
			second = next( it ) ;
		}
		catch ( e ) {
			if ( e instanceof StopIteration ) {
				const reason = `incomplete pair starting with ${first}` ;
				const position = { start : start , end : start + 1 } ;
				throw new Base16EncodeError( reason , string , position ) ;
			}
			else throw e ;
		}

		const pair = first + second ;

		if ( !pair2byte.hasOwnProperty(pair) ) {
			const reason = `cannot find pair ${pair}` ;
			const position = { start : start , end : start + 2 } ;
 			throw new Base16EncodeError( reason , string , position ) ;
		}

		yield pair2byte[pair] ;

		start += 2 ;

	}

}
