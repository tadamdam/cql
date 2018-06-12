query
    = "Name" [ \t\n\r]* "=" [ \t\n\r]* "\"" val:$[^\"]* "\"" {
        return `:nameEquals(${val})`;
    }
