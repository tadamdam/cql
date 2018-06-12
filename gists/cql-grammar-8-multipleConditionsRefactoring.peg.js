/* Shared data and functions */ {
    const acceptAllSelector = "*";
    ...
}
query
    = __* cond:condition __* {
        return cond;
    }
    / __* {
        return acceptAllSelector;
    }
condition
    = prop:strProperty __* "=" __* val:str {
        return `:propStrEquals(${prop},${val})`;
    }
	...
