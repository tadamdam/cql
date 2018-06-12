query
    = prop:strProperty __* "=" __* val:str {
        return `:propStrEquals(${prop},${val})`;
    }
strProperty
    = "Name"
str
    = "\"" val:$[^\"]* "\"" {
        return val;
    }
__
    = [ \t\v\f\n\r]
