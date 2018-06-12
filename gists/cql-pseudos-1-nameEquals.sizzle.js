$.expr.pseudos.nameEquals = 
    $.expr.createPseudo( function( text ) {
        return function( elem ) {
            return ( $( elem ).data( "props" ) || {} ).Name == text;
        };
    });
