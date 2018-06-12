/* Shared data and functions */ {
    const gramsInOneUSPound = 453.59237;
    function getMultiplier( prefix ) {
        return prefixToMultiplier[ prefix || "" ] || 1;
    }
    let prefixToMultiplier = {
        da:         1e1, 
        k:          1e3,
        M:          1e6,
        G:          1e9,
        T:          1e12,
        "":         1e0,
        undefined:  1e0
    };
}

query
    = prop:strProperty __* "=" __* val:str {
        return `:propStrEquals(${prop},${val})`;
    }
    ...
    / prop:numBytesProperty __* op:numOperator __* val:numBytes {
        return `:propNumSatisfies(${prop},${op},${val})`;
    }
    / prop:weightProperty __* op:numOperator __* val:weight {
        return `:propNumSatisfies(${prop},${op},${val})`;
    }
numBytesProperty
    = "DiskSizeTotal"
numBytes 
    = val:numFloat __* prefix:$[kMGT]? "B" {
        return getMultiplier( prefix ) * val;
    }
weightProperty
    = "Weight"
weight
    = val:numFloat __* prefix:$( "da" / [kMGT] )? unit:"g" {
        return getMultiplier( prefix ) * val;
    }
    / val:numFloat __* ( "lb" / "pound" ) "s"? {
        return val * gramsInOneUSPound;
    }
numFloat
    = num:$( [0-9]+ ( "." [0-9]* )? ) {
        return +num;
    }
...
