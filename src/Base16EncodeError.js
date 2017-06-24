import { EncodeError } from '@aureooms/js-codec' ;

export default class Base16EncodeError extends EncodeError {

	constructor ( reason , object , position ) {
		super( 'base16' , reason , object , position ) ;
	}

}

