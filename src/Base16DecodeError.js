import { DecodeError } from '@codec-bytes/error' ;

export default class Base16DecodeError extends DecodeError {

	constructor ( reason , object , position ) {
		super( 'base16' , reason , object , position ) ;
	}

}
