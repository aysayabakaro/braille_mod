
// TODO: find the real table

// New 8 dots braille parameters

// dotMap: the dot numbering from x, y coordinates:

// New 8-dot Braille numbering
//
//    x: 0 1
// y
// 1     4 5
// 2     3 6
// 3     2 7
// 4     1 8

languages['new 8 dots'] = {
	dotMap: {
		0: {
			0: 4,
			1: 3, 
			2: 2,
			3: 1
		},
		1: {
			0: 5,
			1: 6,
			2: 7,
			3: 8
		}
	},
	numberPrefix: [4, 5, 7, 8],
	latinToBraille: {
		"!" : [2,3,5],
		""" : [3,5,6],
		"#" : [3,4,5,6],
		"$" : [1,2,4,6],
		"%" : [1,4,6],
		"&" : [1,2,3,4,6],
		"'" : [3],
		"(" : [2,3,5,6],
		")" : [2,3,5,6],
		"*" : [1,6],
		"+" : [3,4,6],
		"," : [2],
		"-" : [3,6],
		"." : [2,5,6],
		"/" : [3,4],
		"0": [3, 4, 5],
		"1": [1],
		"2": [1, 2],
		"3": [1, 4],
		"4": [1, 4, 5],
		"5": [1, 5],
		"6": [1, 2, 4],
		"7": [1, 2, 4, 5],
		"8": [1, 2, 5],
		"9": [2, 4],
		":" : [1,5,6],
		";" : [5,6],
		"<" : [1,2,6],
		"=" : [1,2,3,4,5,6],
		">" : [3,4,5],
		"?" : [2,3,6],
		"@" : [4],
		"A" : [1,7],
		"B" : [1,2,7],
		"C" : [1,4,7],
		"D" : [1,4,5,7],
		"E" : [1,5,7],
		"F" : [1,2,4,7],
		"G" : [1,2,4,5,7],
		"H" : [1,2,5,7],
		"I" : [2,4,7],
		"J" : [2,4,5,7],
		"K" : [1,3,7],
		"L" : [1,2,3,7],
		"M" : [1,3,4,7],
		"N" : [1,3,4,5,7],
		"O" : [1,3,5,7],
		"P" : [1,2,3,4,7],
		"Q" : [1,2,3,4,5,7],
		"R" : [1,2,3,5,7],
		"S" : [2,3,4,7],
		"T" : [2,3,4,5,7],
		"U" : [,1,3,6,7],
		"V" : [1,2,3,6,7],
		"W" : [2,4,5,6,7],
		"X" : [1,3,4,6,7],
		"Y" : [1,3,4,5,6,7],
		"Z" : [1,3,5,6,7],
		"[" : [2,4,6],
		"\\" : [1,2,5,6],
		"]" : [1,2,4,5,6],
		"^" : [4,5],
		"_" : [3,6],
		"`" : [4,7],
		"a" : [1],
		"b" : [1,2],
		"c" : [1,4],
		"d" : [1,4,5],
		"e" : [1,5],
		"f" : [1,2,4],
		"g" : [1,2,4,5],
		"h" : [1,2,5],
		"i" : [2,4],
		"j" : [2,4,5],
		"k" : [1,3],
		"l" : [1,2,3],
		"m" : [1,3,4],
		"n" : [1,3,4,5],
		"o" : [1,3,5],
		"p" : [1,2,3,4],
		"q" : [1,2,3,4,5],
		"r" : [1,2,3,5],
		"s" : [2,3,4],
		"t" : [2,3,4,5],
		"u" : [1,3,6],
		"v" : [1,2,3,6],
		"w" : [2,4,5,6],
		"x" : [1,3,4,6],
		"y" : [1,3,4,5,6],
		"z" : [1,3,5,6],
		"{" : [2,4,6,7],
		"|" : [1,2,5,6,7],
		"}" : [1,2,4,5,6,7],
		"~" : [4,5,7]
	}
}
