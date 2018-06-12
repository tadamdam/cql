query
    = prop:strProperty __* "=" __* val:str {
        return `:propStrEquals(${prop},${val})`;
    }
    / prop:strProperty __* "~" __* rx:regex {
        return `:propStrMatches(${prop},${rx.pattern},${rx.flags})`;
    }
    / prop:numProperty __* op:numOperator __* val:num {
        return `:propNumSatisfies(${prop},${op},${val})`;
    }
numProperty
    = "ItemsAvailable"
numOperator
    = ( [<>=] "="? / "!=" ) {
        return text();
    }
num
    = num:$[0-9]+ {
        return +num;
    }
...
