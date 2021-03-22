# RUNNING THE PARSER

* Run ```npm i -g ts-node```.
* Run ```npm i```.
* Run ```INPUT=filename npm run clean```.
* Example: ```INPUT=sample1 npm run clean```.

# INVALID

* strong
* span
* small
* i
* sub
* iframe image
* cite
* sup
* h2
* u
* br
* em.

## TRANSFORMS

* HTML figure tags are also not supported. These tags are currently being replaced by the XML media tag defined in the XML schema.
* HTML blockquote tags now need to be renamed to bq and padded with block tags.
* p tags only support enriched text format child tags, so media tags are being checked to ensure they are not encapsulated within a p tag.
* Similarly, p tags cannot sit within a p tag so we first check to see if a p tag is currently open before parsing a new opening p tag.
* Custom attributes have to be removed in some case
