query
    = prop:strProperty __* "=" __* val:str {
        return `:propStrEquals(${prop},${val})`;
    }
    / prop:strProperty __* "~" __* rx:regex {
        return `:propStrMatches(${prop},${rx.pattern},${rx.flags})`;
    }
...
regex
    = "/" pattern:$[^/]+ "/" flags:$[gimuy]* {
        return { pattern: pattern, flags: flags };
    }
...
