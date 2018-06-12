/* Shared data and functions */ {	
    ...
    function joinOrConditions( orConditions ) {
        return [].concat( orConditions ).join( ", " );
    }
    function joinAndConditions( andConditions ) {
        return [].concat( andConditions ).join( "" );
    }
}
start
    = q:query { // We're on the topmost level, so can finally join all or'ed subexpressions
        return joinOrConditions( q );
    }
    / __* {
        return acceptAllSelector;
    }
query
    = __* left:andedConditions right:( operatorOr query )? __* {
        return [].concat( left, right ? right[ 1 ] : [] );
    }
andedConditions
    = left:subquery right:( operatorAnd subquery )* {
        let lSubquery = [].concat( left );
        right.map( el => [].concat( el[ 1 ] ) ).forEach( rSubquery => {
            let combinedSubquery = [];
            lSubquery.forEach( lTerm => {
                rSubquery.forEach( rTerm => {
                    combinedSubquery.push( joinAndConditions( [].concat( lTerm, rTerm ) ) );
                });
            });
            lSubquery = combinedSubquery; 
        });
        return lSubquery;
    }
subquery
    = condition / expressionInBrackets
expressionInBrackets
    = "(" __* q:query __*  ")" {
        return q;
    }
...
