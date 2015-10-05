#!/bin/sh
pandoc -s -S -c ./style.css ./README.md -o ./index.html
