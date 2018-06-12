...
__
    = [ \t\v\f\n\r]
    / comment
comment
    = lineComment / blockComment
lineComment
    = "//" [^\n\r]*
blockComment
    = "/*" ( !"*/" . )* "*/"
...
