...
start
    = query
    / __* {
        return acceptAllSelector;
    }

query
    = __* left:condition operatorOr right:query __* {
        return `${left}, ${right}`;
    }
    / __* left:condition operatorAnd right:query __* {
        return `${left}${right}`;
    }
    / __* only:condition __* {
        return only;
    }
...
