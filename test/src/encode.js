import test from 'ava' ;
import { CodecError } from '@aureooms/js-codec' ;
import { range } from '@aureooms/js-itertools' ;

import { encode , Base16EncodeError , byte2pair } from '../../src' ;

function success ( t , string , options , expected ) {

	const bytes = encode( string ) ;

	t.deepEqual( bytes , expected ) ;

}

success.title = ( _ , string , options , expected ) => `encode '${string}' should succeed` ;

function failure ( t , string , options , ExpectedError , position ) {

	t.throws( ( ) => encode( string ) , CodecError ) ;
	t.throws( ( ) => encode( string ) , ExpectedError ) ;
	t.throws( ( ) => encode( string ) , ( error ) => error.encoding === 'base16' ) ;
	t.throws( ( ) => encode( string ) , ( error ) => error.object === string ) ;
	t.throws( ( ) => encode( string ) , ( error ) => error.position.start === position.start ) ;
	t.throws( ( ) => encode( string ) , ( error ) => error.position.end === position.end ) ;

}

failure.title = ( _ , string , options , expected ) => `encode '${string}' should fail` ;


test( success , '41' , null , [ 0x41 ] ) ;
test( success , '61' , null , [ 0x61 ] ) ;

test( success , byte2pair.join('') , null , [ ...range(0xFF + 1) ] ) ;

test( failure , 'F' , null , Base16EncodeError , { start : 0 , end : 1 } ) ;
test( failure , 'XZ' , null , Base16EncodeError , { start : 0 , end : 2 } ) ;
test( failure , byte2pair.join('')+'F' , null , Base16EncodeError , { start : 512 , end : 513 } ) ;
test( failure , byte2pair.join('')+'XZ' , null , Base16EncodeError , { start : 512 , end : 514 } ) ;
