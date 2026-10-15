---
title: "Add explanatory comments to regex patterns"
description: "Ensure AI always includes detailed comments explaining regex components."
scope: user
alwaysApply: true
---

# Regex Commenting Rule

Whenever you create or modify a regular expression, always add detailed comments explaining every part of the pattern, including each symbol, character class, group, quantifier, escape, and special character. If the pattern does not contain a particular kind of component, state that when it helps clarify the explanation. Keep the comments close to the regular expression so readers can understand its behavior without decoding it themselves.

Example pattern: `/^\w+@[a-z]+\.[a-z]{2,3}$/`

- The leading and trailing `/` delimit a regular-expression literal; they are not part of the pattern being matched.
- `^` is an anchor that requires the match to start at the beginning of the input.
- `\w` matches one word character, typically a letter, digit, or underscore. The backslash makes `w` a special character class rather than a literal `w`.
- `+` is a quantifier that requires one or more consecutive matches of the preceding `\w`.
- `@` matches a literal at sign.
- `[` and `]` delimit a character class. Inside `[a-z]`, `a-z` specifies the range of lowercase ASCII letters from `a` through `z`.
- The `+` after `[a-z]` requires one or more consecutive lowercase ASCII letters.
- `\.` uses the backslash to escape the dot. The escaped `.` matches a literal period; an unescaped dot would match any single character.
- The second `[a-z]` character class again matches one lowercase ASCII letter.
- `{2,3}` is a quantifier requiring between two and three repetitions of the preceding `[a-z]` class. The braces delimit the quantifier, and the comma separates its minimum and maximum counts.
- `$` is an anchor that requires the match to end at the end of the input.
- This pattern contains no groups.
s