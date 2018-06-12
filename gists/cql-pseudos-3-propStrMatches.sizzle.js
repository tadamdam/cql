$.expr.pseudos.propStrMatches = 
    $.expr.createPseudo( function( text ) {
        return function( elem ) {
            let args = ( text || "," ).split( "," );
            let prop = ( $( elem ).data( "props" ) || {} )[ args[ 0 ] ];
            let regex = new RegExp( args[ 1 ] );
            return regex.test( prop );
        };
    });
