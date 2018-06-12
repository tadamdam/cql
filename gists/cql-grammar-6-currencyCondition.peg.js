query
    = prop:strProperty __* "=" __* val:str {
        return `:propStrEquals(${prop},${val})`;
    }
    ...
    / prop:currencyProperty __* op:numOperator __* val:currency {
        return `:propNumSatisfies(${prop},${op},${val})`;
    }
currencyProperty
    = "Price"
currency
    = "$" val:num {
        return val;
    }
    ...
