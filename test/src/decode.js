import test from 'ava' ;
import { CodecError } from '@aureooms/js-codec' ;
import { range } from '@aureooms/js-itertools' ;

import { decode , Base16DecodeError , byte2pair } from '../../src' ;

function success ( t , bytes , options , expected ) {

	const string = decode( bytes ) ;

	t.deepEqual( string , expected ) ;

}

success.title = ( _ , bytes , options , expected ) => `decode '${bytes}' succeed` ;

function failure ( t , bytes , options , ExpectedError , position ) {

	t.throws( ( ) => decode( bytes ) , CodecError ) ;
	t.throws( ( ) => decode( bytes ) , ExpectedError ) ;
	t.throws( ( ) => decode( bytes ) , ( error ) => error.encoding === 'base16' ) ;
	t.throws( ( ) => decode( bytes ) , ( error ) => error.object === bytes ) ;
	t.throws( ( ) => decode( bytes ) , ( error ) => error.position.start === position.start ) ;
	t.throws( ( ) => decode( bytes ) , ( error ) => error.position.end === position.end ) ;

}

failure.title = ( _ , bytes , options , expected ) => `decode '${bytes}' should fail` ;


test( success , [ 0x41 ] , null , '41' ) ;
test( success , [ 0x61 ] , null , '61' ) ;

test( success , [ ...range(0xFF + 1) ] , null , byte2pair.join('') ) ;

test( failure , [ -1 ] , null , Base16DecodeError , { start : 0 , end : 1 } ) ;
test( failure , [ 0xFF + 1 ] , null , Base16DecodeError , { start : 0 , end : 1 } ) ;
test( failure , [ ...range(0xFF + 2) ] , null , Base16DecodeError , { start : 256 , end : 257 } ) ;
