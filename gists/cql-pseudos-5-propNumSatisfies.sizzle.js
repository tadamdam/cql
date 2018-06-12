$.expr.pseudos.propNumSatisfies = 
    $.expr.createPseudo( function( text ) {
        return function( elem ) {
            let args = ( text || ",," ).split( "," );
            let prop = +( ( $( elem ).data( "props" ) || {} )[ args[ 0 ] ] ),
                op = args[ 1 ], val = +( args[ 2 ] );
            return op == ">"  ? prop >  val
                    : op == "<"  ? prop <  val
                    : op == "<=" ? prop <= val
                    : op == ">=" ? prop >= val
                    : op == "="  ? prop == val
                    : op == "==" ? prop == val
                    : op == "!=" ? prop != val
                    : false;
        };
    });
