$.expr.pseudos.propStrEquals = 
    $.expr.createPseudo( function( text ) {
        return function( elem ) {
            let args = ( text || "," ).split( "," );
            return ( $( elem ).data( "props" ) || {} )[ args[ 0 ] ] == args[ 1 ];
        };
    });
