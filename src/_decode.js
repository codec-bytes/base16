import byte2pair from './byte2pair.js' ;
import Base16DecodeError from './Base16DecodeError.js' ;

export default function* _decode ( bytes , options = null ) {

	let start = 0 ;

	for ( const b of bytes ) {

		if ( b < 0x00 || b > 0xFF ) {
			const reason = `byte out of range 0x00 <= ${b} <= 0xFF` ;
			const position = { start : start , end : start + 1 } ;
			throw new Base16DecodeError( reason , bytes , position ) ;
		}

		yield byte2pair[b] ;

		++start ;

	}

}
