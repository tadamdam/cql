#!/bin/bash

CURL_CONFIG="${1?Missing curl config with credentials, exiting now}"

#ls -1 | grep "sizzle.js$" | sort -k3 -n -t"-" | while read file
{ ls -1 | grep "sizzle.js$" | sort -k3 -n -t"-"; ls -1 | grep "peg.js$" | sort -k3 -n -t"-"; } | while read file
do 
	curl --config "${CURL_CONFIG}" --data "$( jq -n --arg file "$file" --arg content "$( cat "$file" )" '{ description: "", public: false, files: { ($file) : { content: $content } } }' )" https://api.github.com/gists
done

# cat all-gists | jq -r '(.[]|( .files[].filename + "\t" + .html_url ) )'

