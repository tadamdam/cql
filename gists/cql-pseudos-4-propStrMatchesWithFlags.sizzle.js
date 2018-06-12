// Avoid creating new instances of the same RegExp on multiple elements
let cachedRegexes = {};
$.expr.pseudos.propStrMatches = 
    $.expr.createPseudo( function( text ) {
        return function( elem ) {
            let args = ( text || ",," ).split( "," );
            let prop = ( $( elem ).data( "props" ) || {} )[ args[ 0 ] ];
            // let regex = new RegExp( args[ 1 ], args[ 2 ] );
            let regexID =  args[ 1 ] + "," + args[ 2 ];
            if( !( regexID in cachedRegexes ) ) {
                cachedRegexes[ regexID ] = new RegExp( args[ 1 ], args[ 2 ] );
            }
            return cachedRegexes[ regexID ].test( prop );
        };
    });
