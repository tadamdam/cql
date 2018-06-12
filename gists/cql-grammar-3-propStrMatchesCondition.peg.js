query
    = prop:strProperty __* "=" __* val:str {
        return `:propStrEquals(${prop},${val})`;
    }
    / prop:strProperty __* "~" __* pattern:regex {
        return `:propStrMatches(${prop},${pattern})`;
    }

strProperty
    = "Name" / "OSName"
str
    = "\"" val:$[^\"]* "\"" {
        return val;
    }
regex
    = "/" pattern:$[^/]+ "/" {
        return pattern;
    }
__
    = [ \t\v\f\n\r]
